# 포트폴리오 프로젝트 정리

## 개요

- **배포 URL:** https://youngjejo.github.io/portfolio/
- **기술 스택:** React 18 + TypeScript + Vite + styled-components
- **라우터:** React Router v6 (basename: `/portfolio`)
- **배포:** GitHub Pages (`gh-pages` 패키지)

---

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/         # UI 컴포넌트
│   │   ├── About/
│   │   ├── Blog/
│   │   ├── Contact/
│   │   ├── Hero/
│   │   ├── Layout/
│   │   ├── Navigation/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Testimonials/
│   │   └── Timeline/
│   ├── content/            # 콘텐츠 데이터 (TypeScript 객체)
│   │   ├── about.ts
│   │   ├── contact.ts
│   │   ├── hero.ts
│   │   ├── index.ts
│   │   ├── labels.ts
│   │   ├── navigation.ts
│   │   └── skills.ts
│   ├── data/
│   │   └── projects.ts     # 프로젝트 상세 데이터
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ProjectDetail.tsx
│   ├── styles/
│   │   ├── GlobalStyle.ts
│   │   └── theme.ts
│   ├── types/
│   │   └── styled.d.ts     # styled-components 테마 타입 선언
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 라우팅

| 경로 | 컴포넌트 | 설명 |
|---|---|---|
| `/` | `Home.tsx` | 전체 포트폴리오 (Hero → About → Skills → Projects → Contact) |
| `/project/:id` | `ProjectDetail.tsx` | 프로젝트 상세 페이지 |

- 홈 내부 섹션 이동은 해시 앵커(`#about`, `#skills` 등) + smooth scroll로 처리
- `useLocation` 훅으로 hash 변경 감지 후 100ms 딜레이 적용

---

## 컴포넌트 목록

### Layout / Navigation
- **Layout:** 전체 페이지 레이아웃 (고정 Navigation + 가변 main 영역)
- **Navigation:** 72px 고정 네비게이션 바. 스크롤 감지로 배경 전환. 768px 미만에서 햄버거 메뉴로 전환

### 섹션 컴포넌트
| 컴포넌트 | 설명 |
|---|---|
| **Hero** | 전체 화면 인트로 섹션. 이름, 소개, CTA 버튼 |
| **About** | 경력 소개 텍스트 + 하이라이트 카드 그리드 |
| **Skills** | 스킬 카테고리별 레벨 바 표시 |
| **Projects** | 프로젝트 카드 그리드. 호버 시 translateY(-8px) |
| **Contact** | 이메일 / GitHub 링크 |
| **Blog** | 블로그 카드 (현재 링크 미연결, `#`) |
| **Timeline** | 연도별 커리어 타임라인 (하드코딩) |
| **Testimonials** | 추천사 카드 (하드코딩) |

---

## 콘텐츠 데이터

### 기본 정보 (`src/content/`)

- **인사말:** "안녕하세요 👋"
- **이름:** 조영제
- **소개:** Frontend-oriented BFF 개발자 (3년 경력)
- **이메일:** yj01591@gmail.com
- **GitHub:** github.com/youngjeJO

### 경력
| 회사 | 기간 |
|---|---|
| ㈜굿스플로 SCM팀 | 2023.06 ~ 현재 |
| ㈜나인커뮤니케이션 | 2022.08 ~ 2023.03 |

### 스킬 카테고리 (`src/content/skills.ts`)

| 카테고리 | 주요 스킬 |
|---|---|
| Frontend | React (90), TypeScript (88), Zustand (88), Styled-components (85), Axios (88) |
| BFF/Backend | ASP.NET (82), BFF API 설계 (85), API Aggregation (85) |
| Authentication | OAuth 2.0 (80), Cookie Sessions (85), Token Refresh (82), Cafe24 API (78) |
| State/Performance/UI | 전역 상태 관리 (88), useShallow (85), Wijmo Grid (75), 반응형 (82) |
| Other | Git (90), REST API 설계 (85), Logging/Error Handling (80) |

---

## 프로젝트 데이터 (`src/data/projects.ts`)

### 1. DHL ILMS — 물류센터 업무 통합 시스템
- **기간:** 2025.06 ~ 2025.09
- **역할:** 프론트엔드 주도 개발
- **기술:** React, TypeScript, Zustand, Styled-components, Wijmo Grid
- **주요 기능:** 바코드 스캔, 실시간 재고 관리, 프린트 서비스 연동
- **성과:** 바코드 스캔 정확도 향상, 처리 시간 단축, 시스템 안정성 개선

### 2. Cafe24 운송장 출력 시스템 & Web BFF
- **기간:** 2024.11 ~ 2025.06
- **역할:** Frontend / BFF 설계 및 구현
- **기술:** React 18, Zustand, ASP.NET Core, Cafe24 API, Payment API
- **주요 기능:** 주문 관리, 결제 연동, 배송 워크플로우
- **성과:** 페이지 로딩 30% 단축, API 호출 60% 감소

### 3. GODO 이커머스 관리 시스템 & BFF
- **기간:** 2025.10 ~ 2025.12
- **역할:** Frontend / BFF 설계
- **기술:** React, TypeScript, Zustand, ASP.NET, GODO API
- **주요 기능:** 이커머스 운영 관리
- **성과:** 생산성 향상, 유지보수성 개선, 장애 대응 속도 향상

---

## 스타일 시스템 (`src/styles/`)

### 테마 (`theme.ts`)
- **Colors:** primary `#4a5568`, secondary `#718096`
- **Fonts:** Inter (본문), Poppins (제목)
- **Font sizes:** xs ~ 5xl
- **Spacing:** xs (0.5rem) ~ 2xl (3rem)
- **Breakpoints:** sm 640px / md 768px / lg 1024px / xl 1280px

### 글로벌 스타일 (`GlobalStyle.ts`)
- CSS 리셋 (margin, padding, box-sizing)
- smooth scroll + scroll-padding-top: 72px (고정 네비 높이)
- `#root` min-height: 100vh

---

## 빌드 & 배포

| 명령어 | 설명 |
|---|---|
| `npm run dev` | Vite 개발 서버 |
| `npm run build` | tsc → vite build |
| `npm run deploy` | GitHub Pages 배포 (gh-pages) |

- **Base path:** `/portfolio/` (GitHub Pages 서브디렉토리 대응)
- **Output:** `dist/`
- **Sourcemap:** 활성화

---

## 주요 아키텍처 패턴

- **콘텐츠 관리:** TypeScript 객체 파일로 분리 (`src/content/`, `src/data/`)
- **스타일링:** styled-components + 중앙화된 테마
- **반응형:** 768px 브레이크포인트 단일 기준
- **타입 안전:** strict 모드 TypeScript (noUnusedLocals, noUnusedParameters)
- **경로 별칭:** `@/*` → `src/*`

---

## 현재 상태 (git status 기준)

- `src/pages/Home.tsx` — 수정 중
- `portfolio-recommendations.md` — 미추적 파일 존재
