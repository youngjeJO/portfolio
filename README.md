# Portfolio

프론트엔드 개발자를 위한 포트폴리오 웹사이트 프로젝트입니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Styled Components** - CSS-in-JS 스타일링
- **React Router** - 클라이언트 사이드 라우팅
- **Vite** - 빌드 도구 및 개발 서버

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

### 프리뷰

```bash
npm run preview
```

빌드된 프로덕션 버전을 로컬에서 미리볼 수 있습니다.

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   └── Layout/      # 레이아웃 컴포넌트
│   ├── pages/           # 페이지 컴포넌트
│   ├── styles/          # 스타일 관련 파일
│   │   ├── theme.ts     # 테마 설정
│   │   └── GlobalStyle.ts # 전역 스타일
│   ├── App.tsx          # 메인 앱 컴포넌트
│   └── main.tsx         # 진입점
├── index.html           # HTML 템플릿
├── package.json         # 의존성 관리
├── tsconfig.json        # TypeScript 설정
└── vite.config.ts       # Vite 설정
```

## 스타일 가이드

이 프로젝트는 `styled-components`의 테마 시스템을 사용합니다. 테마는 `src/styles/theme.ts`에서 정의되며, 모든 컴포넌트에서 접근할 수 있습니다.

### 테마 사용 예시

```tsx
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
`
```

## 라이센스

MIT

