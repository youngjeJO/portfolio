# 포트폴리오 프로젝트 개요

확인 기준: 2026-09-29 작업 트리. 이 문서는 사이트 구현을 설명하며, 회사 프로젝트의 실제 소스·인프라를 검증한 문서는 아니다.

## 실행

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

애플리케이션 테스트 러너는 아직 없다. Git 커밋 정책 검사는 `node --test scripts/git/commit-policy.test.mjs`로 별도 실행한다.

## 구조

| 위치 | 역할 |
|---|---|
| `src/main.tsx` | ThemeProvider와 GlobalStyle 적용 |
| `src/App.tsx` | BrowserRouter와 두 페이지 라우트 |
| `src/pages/Home.tsx` | Hero → Skills → Projects → Contact |
| `src/pages/ProjectDetail.tsx` | 프로젝트 ID로 상세 데이터 조회 및 표시 |
| `src/content/` | 소개·기술·연락처·내비게이션·레이블 |
| `src/data/projects.ts` | 프로젝트 상세와 요약 목록, 타입 |
| `src/styles/`, `src/types/styled.d.ts` | 테마 토큰·전역 스타일·테마 타입 |

React 18 + TypeScript + Vite + React Router v6 + styled-components를 사용한다. About 내용은 Hero에 통합돼 있으며 별도 About 컴포넌트는 없다. Blog·Timeline·Testimonials 파일은 존재하지만 현재 Home에 렌더링되지 않는다. 기술 목록은 이름과 아이콘을 표시하며 데이터에 남아 있는 `level` 값은 화면에서 사용하지 않는다.

## 경로와 스타일

- 사이트: [배포된 포트폴리오](https://youngjejo.github.io/portfolio/)
- URL 기준 경로는 `/portfolio/`이며 Vite의 base와 Router basename이 함께 설정돼 있다.
- 홈 `/`, 상세 `/project/:id`. 상세에서 알 수 없는 ID는 안내를 표시하지만 그 외 경로의 catch-all 라우트는 없다.
- 홈 섹션 이동은 hash와 `scrollIntoView`를 사용한다.
- 강조색 `#0094ff`, 본문색 `#444950`, 기본 반경 10px, 테두리 중심 스타일이다.
- TypeScript strict 모드이며 `@/*` 별칭은 Vite에 연결되지 않았다. 현재 상대 경로 import를 사용한다.

## 현재 소개하는 프로젝트

| ID | 프로젝트 | 기간 |
|---|---|---|
| `ezchat` | 화주·물류사 업무용 실시간 채팅 | 2026.07 ~ 2026.09 |
| `cafe24-bff` | Cafe24 운송장 출력 시스템 & Web BFF | 2024.11 ~ 2025.06 |
| `GODO-bff` | GODO 이커머스 관리 시스템 & BFF | 2025.09 ~ 2025.11 |
| `dhl-ilms` | 물류센터 업무 통합 시스템 | 2025.06 ~ 2025.09 |
| `waybill-legacy` | 운송장 출력 시스템 레거시 유지보수 및 운영 이슈 대응 | 2023.06 ~ 현재 |

프로젝트 설명은 경력 주장이다. 이 저장소에서 BFF, 채팅 서버, 인증 또는 테스트 1,578개의 실체를 확인할 수는 없다. 상세의 `links` 데이터는 빈 객체 또는 `#`이고 현재 화면에서 링크로 렌더링하지 않는다.

## 배포

주 배포 경로는 `.github/workflows/deploy.yml`이다. main/master push → Node 20 환경의 `npm ci` → `npm run build` → `.nojekyll`·`404.html` 생성 → `dist/` 업로드 → GitHub Pages 게시 순서다. PR 린트·테스트 검증은 구성되어 있지 않다.

수동 `npm run deploy`는 predeploy 빌드 후 `gh-pages -d dist`를 실행한다. 기존 작업 트리에서 산출물 폴더 수정이 반영돼 있다. 단, 수동 명령에는 워크플로의 `404.html`·`.nojekyll` 생성이 없고, Pages 게시 소스 설정도 영향을 주므로 워크플로와 동등한 경로로 취급하지 않는다.

빌드는 sourcemap을 출력한다. Pages의 상세 URL 직접 접근·새로고침과 HTTP 상태는 이번 작업에서 검증하지 않았다. `404.html` 복사만으로 정상 200 응답이나 검색엔진 동작을 보장하지 않는다.

## 유지보수 자료

- [작업 지침](AGENT.md)
- [채용 관점 분석과 보완 가이드](portfolio-recommendations.md)
- [설치와 커밋 정책](README.md)

TXT는 로컬 참고 자료이며 Git 공개 대상에서 제외한다. 원문을 이 문서에 복사하지 않는다.
