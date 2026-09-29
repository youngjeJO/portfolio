import { execFileSync, spawnSync } from 'node:child_process'
import { chmodSync, copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, renameSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

try {
  const root = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim()
  const configured = spawnSync('git', ['config', '--get', 'core.hooksPath'], { cwd: root, encoding: 'utf8' })
  if (configured.error || ![0, 1].includes(configured.status)) {
    throw new Error('Git 훅 설정을 읽을 수 없습니다.')
  }
  if (configured.status === 0) {
    throw new Error('기존 core.hooksPath 설정을 보존했습니다. 해당 commit-msg에서 이 저장소의 scripts/git/check-commit-message.mjs를 호출하도록 연결해 주세요.')
  }

  const hooks = execFileSync('git', ['rev-parse', '--path-format=absolute', '--git-path', 'hooks'], { cwd: root, encoding: 'utf8' }).trim()
  const target = join(hooks, 'commit-msg')
  const backup = join(hooks, 'commit-msg.before-portfolio')
  const source = fileURLToPath(new URL('../../.githooks/commit-msg', import.meta.url))
  const template = readFileSync(source, 'utf8')
  mkdirSync(hooks, { recursive: true })

  // lstat also detects dangling symlinks: never overwrite an unrecognised hook.
  const present = lstatSync(target, { throwIfNoEntry: false })
  if (present) {
    const ownHook = present.isFile() && readFileSync(target, 'utf8') === template
    if (ownHook) {
      chmodSync(target, 0o755)
      console.log('커밋 메시지 검사가 이미 설치되어 있습니다.')
      process.exit(0)
    }
    if (existsSync(backup) || lstatSync(backup, { throwIfNoEntry: false })) {
      throw new Error('기존 훅과 백업이 모두 있어 자동 설치를 중단했습니다. 두 파일을 덮어쓰지 않았습니다.')
    }
    renameSync(target, backup)
  }
  try {
    copyFileSync(source, target)
    chmodSync(target, 0o755)
  } catch (error) {
    if (present) renameSync(backup, target)
    throw error
  }
  console.log(`커밋 메시지 검사 설치 완료: ${target}`)
  if (present) console.log(`기존 훅 보존: ${backup}`)
} catch (error) {
  console.error(`훅 설치 실패: ${error.message}`)
  process.exitCode = 1
}
