export interface TechStackCategory {
  category: string
  items: string[]
}

export interface Task {
  title: string
  items: string[]
  result?: string
}

export interface Challenge {
  challenge: string
  solution: string
  result: string
}

export interface ProjectDetail {
  title: string
  period: string
  scale?: string
  team?: string
  role: string
  description: string
  techStack: TechStackCategory[]
  tasks: Task[]
  challenges?: Challenge[]
  technicalResults?: string[]
  businessResults?: string[]
  contribution?: string
  links: {
    demo?: string
    github?: string
    blog?: string
  }
}

export interface ProjectSummary {
  id: string
  title: string
  period: string
  role: string
  description: string
  techStack: string[]
  highlights: string[]
}

export const projectsDetail: Record<string, ProjectDetail> = {
  'dhl-ilms': {
    title: '물류센터 업무 통합 시스템',
    period: '2025.06 ~ 2025.09',
    scale: '중대형 (물류센터 현장 업무 시스템)',
    team: '㈜굿스플로 SCM팀',
    role: '프론트엔드 주도 개발',
    description:
      'DHL 인천 물류센터의 출고, 검수, 프린트, 작업 관리 등 현장 업무를 효율적으로 처리하기 위한 웹 기반 통합 물류관리 시스템입니다. 바코드 스캔 기반의 실시간 데이터 처리와 자동화된 워크플로우를 통해 물류 업무의 정확성과 효율성을 향상시켰습니다.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Zustand', 'Styled-components', 'SCSS'],
      },
      {
        category: 'HTTP 통신',
        items: ['Axios'],
      },
      {
        category: '기타',
        items: ['Git'],
      },
    ],
    tasks: [
      {
        title: '바코드 스캔 기반 실시간 출고/검수 시스템',
        items: [
          '바코드 리더기 연동을 통한 실시간 스캔 데이터 처리',
          '2단계 검수 프로세스: PID 스캔 → 운송장번호 스캔 → sheetNo 비교 검증',
          '실시간 상태 피드백: 스캔 성공/실패에 따른 시각적/청각적 피드백 제공',
          '디바운스 처리: 중복 스캔 방지를 위한 1초 디바운스 적용',
        ],
        result: '검수 정확도 향상 및 작업 시간 단축',
      },
      {
        title: '상태 관리 아키텍처 설계 및 구현',
        items: [
          'Zustand 기반 전역 상태 관리: useJobStore, useDetailStore, useConfirmStore, usePrintStore, useContractStore',
          '상태 최적화: useShallow를 활용한 불필요한 리렌더링 방지',
          '비동기 처리: async/await 기반 API 연동 및 에러 핸들링',
        ],
        result: '복잡한 상태 관리 로직을 체계적으로 구조화하여 유지보수성 향상',
      },
      {
        title: '환경설정 시스템 구축',
        items: [
          '쿠키 기반 설정 저장: 프린터, 발송지, 배송사, 박스규격, 유형별 색상/사운드 등',
          '설정값 영구 저장: 10년 만료 쿠키로 설정값 영구 보존',
          '유형별 커스터마이징: 일반/애플/B2C 유형별 색상 및 사운드 개별 설정',
          '사운드 미리듣기: 설정 모달에서 사운드 선택 시 즉시 재생 기능',
        ],
        result: '사용자별 맞춤 설정 지원으로 업무 효율성 향상',
      },
      {
        title: '인증 및 세션 관리',
        items: [
          '사용자 정보 자동 동기화: 토큰 갱신 시 mem_idx, user_idx 자동 쿠키 저장',
          '자동 로그아웃: 30분 비활성 시 세션 만료 모달 표시 및 로그인 페이지 리다이렉트',
          '세션 만료 모달: 사용자 친화적인 세션 만료 알림 UI 구현',
        ],
        result: '보안 강화 및 사용자 경험 개선',
      },
      {
        title: '프린트 서비스 통합',
        items: [
          '외부 프린트 서비스 연동: 외부 프린트 서비스와의 통합',
          '비동기 프린트 처리: 스캔 데이터 기반 자동 프린트 실행',
          '프린트 결과 피드백: 성공/실패에 따른 사운드 및 시각적 피드백',
          '설정 기반 프린트: 사용자 설정(프린터, 계약정보) 반영',
        ],
        result: '자동화된 프린트 프로세스로 업무 효율성 향상',
      },
      {
        title: 'Wijmo Grid 기반 데이터 테이블',
        items: [
          '고성능 그리드 구현: 대용량 데이터 처리 최적화',
          '셀 중앙 정렬: 사용자 경험 향상을 위한 스타일링',
          '필터링 및 정렬: 실시간 데이터 필터링 및 정렬 기능',
          'Excel 내보내기: 그리드 데이터 Excel 다운로드 기능',
        ],
        result: '직관적인 데이터 조회 및 관리 기능 제공',
      },
      {
        title: 'UI/UX 개선',
        items: [
          'Styled-components 기반 디자인 시스템: 일관된 UI 컴포넌트 설계',
          '반응형 레이아웃: 다양한 화면 크기 대응',
          '애니메이션 효과: 성공/실패 상태에 따른 시각적 피드백',
          '접근성 향상: 키보드 네비게이션 및 포커스 관리',
        ],
        result: '사용자 친화적인 인터페이스로 학습 곡선 단축',
      },
      {
        title: '유틸리티 및 공통 모듈 개발',
        items: [
          '날짜 포맷 유틸리티: yyyy-MM-dd hh:mm 형식 표준화',
          '쿠키 관리 유틸리티: 통일된 쿠키 get/set/remove 인터페이스',
          '사용자 정보 관리: 사용자 정보 쿠키 저장 및 불러오기',
          '에러 처리: 통일된 에러 핸들링 및 사용자 알림',
        ],
        result: '코드 재사용성 향상 및 유지보수성 개선',
      },
    ],
    challenges: [
      {
        challenge: '복잡한 상태 관리 최적화: 다수의 스토어 간 상태 동기화 및 불필요한 리렌더링',
        solution: 'useShallow를 활용한 선택적 상태 구독 및 상태 구조 재설계',
        result: '리렌더링 최소화 및 성능 향상',
      },
      {
        challenge: '바코드 스캔 중복 처리 방지: 빠른 연속 스캔 시 중복 처리 문제',
        solution: '디바운스(1초) 적용 및 상태 기반 입력 제어',
        result: '중복 스캔 방지 및 데이터 정확성 향상',
      },
      {
        challenge: '쿠키 기반 설정 관리: 다양한 설정값의 영구 저장 및 불러오기',
        solution: 'JSON 기반 객체 저장 및 초기값 자동 설정 로직 구현',
        result: '사용자 설정 영구 보존 및 사용자 경험 향상',
      },
      {
        challenge: '외부 프린트 서비스 연동: 외부 서비스와의 비동기 통합',
        solution: 'Promise 기반 비동기 처리 및 에러 핸들링 강화',
        result: '안정적인 프린트 서비스 연동',
      },
    ],
    technicalResults: [
      'Zustand 기반 상태 관리 아키텍처 설계로 복잡한 상태 로직 체계화',
      '바코드 스캔 기반 실시간 출고·검수 시스템 구현',
      '외부 프린트 서비스 연동',
    ],
    businessResults: [
      '검수 정확도 향상',
      '작업 처리 시간 단축',
      '대규모 현장 시스템 안정화',
    ],
    contribution:
      '프론트엔드 주도 개발, 바코드 스캔 기반 출고·검수 시스템 구현, Zustand 기반 상태 관리 아키텍처 설계, 외부 프린트 서비스 연동',
    links: {
      demo: '#',
      github: '#',
      blog: '#',
    },
  },
  'cafe24-bff': {
    title: 'Cafe24 운송장 출력 시스템 & Web BFF',
    period: '2024.11 ~ 2025.06',
    scale: '중대형 (이커머스 물류 · 운송장 출력 실운영 시스템)',
    team: '㈜굿스플로 SCM팀',
    role: '프론트엔드 / BFF 설계 및 구현',
    description:
      'Cafe24 입점 셀러 및 물류 운영자를 위한 운송장 출력 시스템입니다. 복잡하게 분산된 Cafe24 API 및 내부 시스템을 프론트엔드에서 사용하기 쉬운 형태로 통합하고, 프론트엔드 요구사항을 기준으로 BFF(Backend for Frontend) 구조를 설계하여 운송장 출력, 주문·결제·배송 흐름을 하나의 화면·API 흐름으로 단순화했습니다. 실운영 환경에서 성능·안정성·유지보수성을 개선하는 것이 목표였습니다.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Zustand', 'Axios', 'SCSS'],
      },
      {
        category: 'BFF / Backend',
        items: ['ASP.NET', 'Cafe24 API', '이니시스 API'],
      },
      {
        category: '기타',
        items: ['Git'],
      },
    ],
    tasks: [
      {
        title: '프론트엔드 중심 BFF(Service Layer) 설계',
        items: [
          '화면 단위 요구사항을 기준으로 API 응답 구조 재정의',
          '여러 백엔드/외부 API를 단일 엔드포인트 형태로 집계(Aggregation)',
          '도메인별 서비스 모듈 분리 (Order / Payment / Contract / Alert 등)',
        ],
        result: '프론트엔드 컴포넌트 복잡도 감소 및 API 의존성 감소, 재사용성 향상',
      },
      {
        title: 'React 기반 프론트엔드 구현',
        items: [
          'React 18 기반 SPA 개발',
          'Zustand를 활용한 전역 상태 관리 구조 설계',
          'API 응답을 프론트엔드 상태 구조에 맞게 정규화',
          '불필요한 리렌더링 방지를 위한 상태 분리 및 메모이제이션 적용',
        ],
        result: '화면 상태 관리 단순화 및 유지보수성, 가독성 개선',
      },
      {
        title: '인증 및 세션 관리 (Frontend + BFF 협업)',
        items: [
          'Cafe24 OAuth 2.0 인증 흐름 연동',
          '쿠키 기반 세션 유지 및 토큰 자동 갱신 처리',
          '세션 만료 시 사용자 경험을 고려한 공통 처리 로직 구현',
        ],
        result: '세션 만료로 인한 사용자 이탈 감소 및 인증 로직의 일관성 확보',
      },
      {
        title: '결제 및 외부 서비스 연동',
        items: [
          '이니시스 결제 API 연동',
          '팝업 기반 결제 프로세스를 PostMessage로 제어',
          '결제 승인·환불·부분환불 흐름 처리',
          '결제 결과에 따른 UI 상태 동기화',
        ],
        result: '결제 흐름 안정화 및 프론트엔드 로직 단순화',
      },
      {
        title: '데이터 흐름 및 성능 최적화',
        items: [
          '병렬 API 호출(Promise.all / allSettled) 적용',
          '폴링 구조 개선 및 무한 스크롤 적용',
          '불필요한 API 호출 제거',
        ],
        result: '초기 로딩 시간 약 30% 개선, API 호출 횟수 약 60% 감소, 렌더링 성능 및 사용자 반응성 개선',
      },
      {
        title: 'BFF 백엔드(Web BFF) 구현 – ASP.NET Core',
        items: [
          'ASP.NET Core 기반 BFF 서버 설계 및 구현',
          '프론트엔드 전용 API 제공',
          '주문·상품·배송 데이터를 UI 기준으로 그룹핑·정규화',
          '인쇄/송장 콜백 처리로 UI 상태 동기화',
          '요청/응답 로깅 및 예외 처리 구조 설계',
        ],
        result: '프론트엔드와 백엔드 간 책임 분리 명확화 및 운영 환경에서 장애 분석 및 대응 용이',
      },
    ],
    challenges: [
      {
        challenge: '프론트엔드에서 화면 하나를 구성하기 위해 여러 개의 백엔드·외부 API를 직접 호출해야 하는 구조로 인한 복잡성 및 API 응답 구조가 화면 요구사항과 맞지 않아 프론트엔드 로직이 과도하게 복잡',
        solution: '프론트엔드 요구사항을 기준으로 API를 재구성하는 BFF(Backend for Frontend) 구조 도입. 화면 단위 요구사항을 기준으로 API 응답 구조 재정의 및 여러 백엔드/외부 API를 단일 엔드포인트 형태로 집계',
        result: '프론트엔드 개발 속도 향상 및 데이터 변환 로직 단순화, API 복잡도 감소',
      },
      {
        challenge: '인증/세션 처리, 에러 처리 방식이 화면마다 달라 유지보수성과 안정성이 저하',
        solution: '인증 및 세션 관리를 Frontend + BFF 협업으로 통합. Cafe24 OAuth 2.0 인증 흐름 연동 및 쿠키 기반 세션 유지, 토큰 자동 갱신 처리. 세션 만료 시 공통 처리 로직 구현',
        result: '인증·에러 처리 일원화로 운영 안정성 향상',
      },
      {
        challenge: '잦은 폴링과 불필요한 API 호출로 초기 로딩 속도 및 네트워크 효율 문제 발생',
        solution: '병렬 API 호출(Promise.all / allSettled) 적용, 폴링 구조 개선 및 무한 스크롤 적용, 불필요한 API 호출 제거',
        result: '초기 로딩 시간 약 30% 개선, API 호출 횟수 약 60% 감소',
      },
      {
        challenge: '결제 프로세스와 배송 상태 동기화의 안정성 확보',
        solution: '이니시스 결제 API 연동 및 PostMessage를 통한 팝업 제어, 결제 승인·환불·부분환불 흐름 처리. 인쇄/송장 콜백 처리로 배송 상태와 UI 상태 동기화',
        result: '결제/주문/배송 상태 안정화로 사용자 경험 개선',
      },
    ],
    technicalResults: [
      '프론트엔드 요구사항 기준 BFF 서비스 레이어 설계',
      'API 통합 및 데이터 정규화',
      '인증(OAuth) 및 상태 관리 구조 개선',
      '초기 로딩 속도 약 30% 개선',
      'API 호출 횟수 약 60% 감소',
    ],
    businessResults: [
      '운송장 출력, 주문·결제·배송 흐름을 하나의 화면·API 흐름으로 단순화하여 사용자 경험 개선',
      '실운영 환경에서 성능·안정성·유지보수성 개선',
      '프론트엔드 개발 속도 향상으로 개발 생산성 향상',
      '세션 만료로 인한 사용자 이탈 감소',
    ],
    contribution:
      '프론트엔드 요구사항 기준 BFF 서비스 레이어 설계, API 통합 및 데이터 정규화, 인증(OAuth) 및 상태 관리 구조 개선, SPA 전용 BFF API 구축(ASP.NET Core), 주문·결제·배송 데이터 통합, 쿠키 기반 인증 및 토큰 갱신 처리',
    links: {
      demo: '#',
      github: '#',
      blog: '#',
    },
  },
  'GODO-bff': {
    title: 'GODO 이커머스 관리 시스템 & BFF',
    period: '[기간 입력]',
    scale: '중대형 (이커머스 운영·관리 실서비스)',
    team: '[팀 구성 입력]',
    role: '프론트엔드 개발 / BFF 설계 및 구현',
    description:
      '쇼핑몰 운영자 및 관리자를 위한 이커머스 관리 시스템입니다. 프론트엔드 요구사항을 기준으로 BFF 구조를 설계하여 이커머스 운영 화면에서 필요한 데이터를 한 번에 제공하고, 프론트엔드 복잡도를 낮추며 API 사용성과 유지보수성을 개선했습니다. 인증·상태·에러 처리 방식을 일관되게 통합하여 운영 안정성을 향상시켰습니다.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Zustand', 'Axios'],
      },
      {
        category: 'BFF / Backend',
        items: ['ASP.NET', 'GODO몰 API', '이니시스 API'],
      },
      {
        category: '기타',
        items: ['Git'],
      },
    ],
    tasks: [
      {
        title: '프론트엔드 개발 (GODO 운영 시스템)',
        items: [
          '운영자용 이커머스 관리 화면 개발',
          '화면 단위 요구사항 정의 및 UI 구성',
          '상태 변화가 많은 화면에서의 데이터 흐름 관리',
          '사용자 액션에 따른 실시간 UI 상태 반영',
        ],
        result: '운영 화면 가독성 및 사용성 개선, 프론트엔드 로직 구조 단순화',
      },
      {
        title: 'BFF(Service Layer) 설계 및 구현',
        items: [
          '프론트엔드 요구사항 기준으로 API 응답 구조 재정의',
          '여러 API를 하나의 엔드포인트로 집계(Aggregation)',
          '도메인 단위 서비스 모듈 분리',
        ],
        result: '프론트엔드 API 호출 수 감소 및 화면 개발 생산성 향상',
      },
      {
        title: '인증 및 세션 관리',
        items: [
          '쿠키 기반 인증 구조 설계',
          '세션 유지 및 만료 처리 공통화',
          '인증 실패/만료 시 공통 UX 제공',
        ],
        result: '인증 관련 중복 코드 제거 및 사용자 경험 일관성 확보',
      },
      {
        title: '데이터 가공 및 정규화',
        items: [
          '백엔드 응답 데이터를 UI 기준으로 그룹핑·정규화',
          '프론트엔드에서 불필요한 데이터 처리 로직 제거',
        ],
        result: '프론트엔드 코드 복잡도 감소 및 유지보수성 향상',
      },
      {
        title: 'BFF 백엔드 구현 (GODO BFF)',
        items: [
          'BFF 서버에서 프론트엔드 전용 API 제공',
          '요청/응답 로깅 및 예외 처리 구조 설계',
          '장애 발생 시 원인 분석이 가능한 구조 마련',
        ],
        result: '운영 중 이슈 대응 속도 개선 및 프론트엔드–백엔드 책임 분리 명확화',
      },
    ],
    challenges: [
      {
        challenge: '화면 하나를 구성하기 위해 다수의 API를 개별 호출해야 하며, API 응답 구조가 화면 요구사항과 맞지 않아 프론트엔드에서 데이터 가공 로직이 증가',
        solution: '프론트엔드 요구사항을 기준으로 API를 재구성하는 BFF 구조 도입. 프론트엔드 요구사항 기준으로 API 응답 구조 재정의 및 여러 API를 하나의 엔드포인트로 집계',
        result: '프론트엔드 API 호출 수 감소 및 화면 개발 생산성 향상',
      },
      {
        challenge: '인증, 세션, 에러 처리 방식이 화면별로 달라 유지보수 어려움',
        solution: '인증 및 세션 관리를 공통화. 쿠키 기반 인증 구조 설계 및 세션 유지/만료 처리 공통화, 인증 실패/만료 시 공통 UX 제공',
        result: '인증 관련 중복 코드 제거 및 사용자 경험 일관성 확보',
      },
      {
        challenge: '운영 중 장애 발생 시 원인 추적이 어려운 구조',
        solution: 'BFF 서버에서 요청/응답 로깅 및 예외 처리 구조 설계. 장애 발생 시 원인 분석이 가능한 구조 마련',
        result: '운영 중 이슈 대응 속도 개선 및 프론트엔드–백엔드 책임 분리 명확화',
      },
      {
        challenge: '프론트엔드에서 불필요한 데이터 처리 로직으로 인한 복잡도 증가',
        solution: '백엔드 응답 데이터를 UI 기준으로 그룹핑·정규화하여 BFF 레이어에서 처리',
        result: '프론트엔드 코드 복잡도 감소 및 유지보수성 향상',
      },
    ],
    technicalResults: [
      '프론트엔드 중심 BFF 구조 도입으로 API 사용성 개선',
      '프론트엔드 데이터 가공 로직 감소',
      '인증·에러 처리 일원화로 유지보수성 향상',
      '운영 환경에서 장애 대응 및 분석 용이성 확보',
    ],
    businessResults: [
      '프론트엔드 API 호출 수 감소로 네트워크 효율성 향상',
      '화면 개발 생산성 향상',
      '운영 화면 가독성 및 사용성 개선',
      '운영 중 이슈 대응 속도 개선',
    ],
    contribution:
      '프론트엔드 요구사항 정의 및 화면 구현, BFF 구조 설계 및 API 재구성, 인증·세션·데이터 흐름 설계, 운영 환경 기준 안정성 개선',
    links: {
      demo: '#',
      github: '#',
      blog: '#',
    },
  },
}

export const projectsSummary: ProjectSummary[] = [
  {
    id: 'dhl-ilms',
    title: '물류센터 업무 통합 시스템',
    period: '2025.06 ~ 2025.09',
    role: '프론트엔드 주도 개발',
    description:
      '물류센터의 출고, 검수, 프린트, 작업 관리 등 현장 업무를 효율적으로 처리하기 위한 웹 기반 통합 물류관리 시스템입니다.',
    techStack: ['React 18', 'TypeScript', 'Zustand', 'Styled-components', 'Vite', 'Wijmo Grid'],
    highlights: [
      '바코드 스캔 기반 출고·검수 시스템 구현',
      'Zustand 기반 상태 관리 아키텍처 설계',
      '외부 프린트 서비스 연동',
    ],
  },
  {
    id: 'cafe24-bff',
    title: 'Cafe24 운송장 출력 시스템 & Web BFF',
    period: '2024.11 ~ 2025.06',
    role: '프론트엔드 / BFF 설계 및 구현',
    description:
      'Cafe24 입점 셀러 및 물류 운영자를 위한 운송장 출력 시스템입니다. 프론트엔드 요구사항을 기준으로 BFF 구조를 설계하여 복잡하게 분산된 API를 통합하고, 운송장 출력, 주문·결제·배송 흐름을 하나의 화면·API 흐름으로 단순화했습니다.',
    techStack: ['React 18', 'Zustand', 'ASP.NET', 'Cafe24 API', '이니시스 API'],
    highlights: [
      '프론트엔드 요구사항 기준 BFF 서비스 레이어 설계',
      'API 통합 및 데이터 정규화',
      '초기 로딩 속도 약 30% 개선, API 호출 횟수 약 60% 감소',
      'SPA 전용 BFF API 구축 (ASP.NET Core)',
    ],
  },
  {
    id: 'GODO-bff',
    title: 'GODO 이커머스 관리 시스템 & BFF',
    period: '2025.10 ~ 2025.12',
    role: '프론트엔드 개발 / BFF 설계 및 구현',
    description:
      '쇼핑몰 운영자 및 관리자를 위한 이커머스 관리 시스템입니다. 프론트엔드 요구사항을 기준으로 BFF 구조를 설계하여 이커머스 운영 화면에서 필요한 데이터를 한 번에 제공하고, 프론트엔드 복잡도를 낮추며 API 사용성과 유지보수성을 개선했습니다.',
    techStack: ['React', 'TypeScript', 'Zustand', 'ASP.NET', 'GODO몰 API', '이니시스 API'],
    highlights: [
      '프론트엔드 요구사항 기준 BFF 구조 설계 및 구현',
      '프론트엔드 API 호출 수 감소 및 화면 개발 생산성 향상',
      '인증·세션·에러 처리 일원화로 유지보수성 향상',
      '운영 환경에서 장애 대응 및 분석 용이성 확보',
    ],
  },
]
