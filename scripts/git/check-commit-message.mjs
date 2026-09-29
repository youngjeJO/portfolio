import { readFileSync } from 'node:fs'

// Limit rejection to attribution lines; ordinary discussion of tools is allowed.
const toolIdentity = /\b(?:claude|codex)\b|(?:noreply|bot)@(?:anthropic|openai)\.com/i
const attribution = /^\s*(?:co-authored-by|signed-off-by)\s*:/i
const generated = /^\s*(?:[^\p{L}\p{N}]*\s*)?(?:generated|written|created|implemented|assisted|co-authored|powered)\s+(?:with|by)\b/iu
const koreanAttribution = /^\s*(?:(?:claude|codex)\s*(?:와|과|가|이|으로|로)?\s*(?:함께\s*)?(?:공동\s*작성|작성|생성)|(?:공동\s*작성|자동\s*생성)\s*[:：])/i

try {
  const messagePath = process.argv[2]
  if (!messagePath) throw new Error('커밋 메시지 파일 경로가 필요합니다.')
  const lines = readFileSync(messagePath, 'utf8').split(/\r?\n/)
  const rejected = lines.some((line) =>
    toolIdentity.test(line) &&
    (attribution.test(line) || generated.test(line) || koreanAttribution.test(line)),
  )
  if (rejected) {
    console.error('커밋 메시지의 도구 공동 작성 표시 또는 자동 생성 서명을 제거해 주세요. 사람의 공동 작성 표시는 허용됩니다.')
    process.exitCode = 1
  }
} catch (error) {
  console.error(`커밋 메시지 검사 실패: ${error.message}`)
  process.exitCode = 1
}
