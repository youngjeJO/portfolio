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
  ezchat: {
    title: 'ezchat — 화주·물류사 업무용 실시간 채팅 서비스',
    period: '2026.07 ~ 2026.09',
    scale: '물류사 1곳과 여러 화주사가 협업하는 업무용 채팅 서비스',
    role: '기술 선정·업무용 대화 구조 제안·AI 제안 설계 검토 및 단독 개발·배포',
    description:
      '물류사와 여러 화주사가 협업하는 업무용 채팅 서비스입니다. 요구사항과 UI 시안을 바탕으로 기술을 선정하고, AI가 제안한 설계를 검토·채택하며 프론트엔드·백엔드·DB·인프라·배포를 단독 수행했습니다. 업무별 논의를 이어갈 수 있도록 채널·스레드 구조를 직접 제안했습니다.',
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'PWA'] },
      { category: 'Backend', items: ['NestJS', 'Node.js', 'PostgreSQL'] },
      { category: 'Realtime', items: ['Socket.IO', 'Redis'] },
      { category: 'Cloud / Notification', items: ['AWS ECS Fargate', 'Web Push', 'VAPID'] },
    ],
    tasks: [
      {
        title: '업무용 대화 구조 제안과 반응형 스레드 구현',
        items: [
          '초기 카카오톡형 대화 UI 대신 메시지별 후속 논의를 이어갈 수 있는 슬랙형 채널·스레드 구조를 직접 제안',
          '물류사가 화주사별 업무 공간을 관리하고, 초대받은 사용자만 채널을 확인하도록 구성',
          '데스크톱에서는 오른쪽 패널, 모바일에서는 기본 채팅 영역을 덮는 화면으로 스레드 제공',
          '새 답글을 알림으로 안내',
        ],
      },
      {
        title: '공지 공유와 소속별 접근 제어 구현',
        items: [
          '회사의 화주사 간 정보 격리 요구사항에 맞춰 AI가 제안한 서버 응답 필터링과 소속별 소켓 전송 설계를 검토·채택',
          '메시지 조회 API와 소켓의 메시지 발신·리액션 요청에서 채널 멤버십 검사',
          '공지는 모든 화주사가 확인하되, 화주사는 공지 메시지를 작성할 수 없고 리액션만 가능하도록 구성',
          '공지 리액션의 응답 범위와 실시간 이벤트 수신 대상을 사용자 소속에 따라 구분',
        ],
      },
      {
        title: '사용자 요구에 따른 첨부 기능 개선',
        items: [
          '기본 메시지·답글 기능으로 시작한 뒤 사용자 요구를 반영해 첨부 기능 확장',
          '드래그 앤 드롭 첨부와 여러 파일을 한 번에 첨부하는 기능 추가',
        ],
      },
      {
        title: '서비스 개발과 운영 환경 배포',
        items: [
          '기술을 직접 선정하고 AI의 설계 제안을 검토·채택하며 React/NestJS 개발, DB·인프라·배포를 단독 수행',
          'Socket.IO와 Redis 기반 실시간 통신 및 기기 단위 Web Push 구성',
          'AWS ECS Fargate 운영 환경에 배포',
        ],
      },
      {
        title: 'AI 생성 코드 검증',
        items: [
          'AI가 테스트를 수행한 뒤에도 직접 라이브 환경에서 기능 확인',
          '기대와 다른 동작의 실제 증상과 정상 동작 기준을 AI에 전달해 수정하고, 같은 흐름을 재실행해 해결 여부 확인',
          '별도로 코드의 조건이나 값을 의도적으로 변경해 기존 테스트의 오류 탐지 여부를 확인하는 검증 수행',
          '테스트 1,578개(E2E 275개 포함) 구성',
          'AI 사용 기록 219건을 바탕으로 사내 발표 「바이브 코딩과 Claude Code」 진행',
        ],
      },
    ],
    challenges: [
      {
        challenge:
          '동일한 공지를 모든 화주사에 공유하면서 화주사 간 리액션 정보는 노출하지 않아야 하는 요구사항',
        solution:
          'AI가 제안한 서버 응답 필터링과 소속별 소켓 전송 설계를 검토·채택했습니다. 공지 리액션은 DB 조회 후 서버의 DTO 변환 단계에서 필터링해 화주사에는 자기 회사와 소유 물류사의 반응만, 소유 물류사에는 전체 반응을 전달했습니다. 소켓도 인증된 사용자가 참여한 채널의 room에만 가입시키고 요청마다 멤버십을 검사했습니다. 화주사의 리액션은 같은 회사와 소유 물류사의 사용자 소켓에만 전송하고, 물류사의 리액션은 공지 참여자 모두에게 전달하도록 구성했습니다.',
        result:
          '개발 기록상 두 화주사 계정으로 리액션 격리와 공지 도달을 확인했습니다. 자동화 테스트에는 비멤버 메시지 조회 차단, 다른 워크스페이스 화주사 초대 거부, 화주사 리액션의 소속별 수신·미수신 및 물류사 리액션의 양측 수신 시나리오를 포함했습니다.',
      },
    ],
    technicalResults: [
      'API 멤버십 검사와 서버 DTO 필터링을 통한 공지 리액션 응답 범위 구분',
      '사용자 소속에 따른 소켓 이벤트 전송 대상 구분',
      '화면 크기에 대응하는 스레드 UI와 새 답글 알림 구현',
    ],
    businessResults: [
      '물류사의 화주사별 업무 공간 관리와 전체 화주사 대상 공지 기능 제공',
      '메시지별 후속 업무 논의를 이어갈 수 있는 스레드 제공',
      '사용자 요구에 따른 드래그 앤 드롭·다중 파일 첨부 기능 추가',
    ],
    contribution:
      '회사 요구사항과 UI 시안을 바탕으로 기술을 선정하고 업무용 채널·스레드 구조를 직접 제안했습니다. AI가 제안한 설계를 검토·채택하며 프론트엔드·백엔드·DB·인프라·배포를 단독 수행하고, 요구사항에 맞는 동작을 직접 검증했습니다.',
    links: {},
  },
  'dhl-ilms': {
    title: '물류센터 업무 통합 시스템',
    period: '2025.06 ~ 2025.09',
    scale: '중대형 (물류센터 현장 업무 시스템)',
    team: '프론트엔드 1명, 백엔드 2명',
    role: '프론트엔드 주도 개발',
    description:
      '바코드 스캔 → 운송장출력 → 검증 피드백으로 이어지는 현장 검수 흐름을 웹 화면으로 구현했습니다. 중복 스캔 방지를 위해 디바운스와 상태 기반 입력 제어를 적용했고, 성공/실패 상황을 시각·청각 피드백으로 제공해 현장 작업자가 즉시 오류를 인지할 수 있도록 개선했습니다.',
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
          '2단계 검수 프로세스: ID 값 스캔 → 운송장번호 스캔 → 비교 검증',
          '실시간 상태 피드백: 스캔 성공/실패에 따른 시각적/청각적 피드백 제공',
          '디바운스 처리: 중복 스캔 방지를 위한 1초 디바운스 적용',
        ],
        result: '검수 정확도 향상 및 작업 시간 단축',
      },
      {
        title: '상태 관리 아키텍처 설계 및 구현',
        items: [
          'Zustand 기반 전역 상태 관리',
          '상태 최적화: useShallow를 활용한 불필요한 리렌더링 방지'
        ],
        result: '복잡한 상태 관리 로직을 체계적으로 구조화하여 유지보수성 향상',
      },
      {
        title: '환경설정 시스템 구축',
        items: [
          '쿠키 기반 설정 저장: 프린터, 발송지, 배송사, 박스규격, 유형별 색상/사운드 등',
          '유형별 커스터마이징: 작업 유형별 색상 및 사운드 개별 설정',
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
        challenge: '외부 프린트 서비스 연동: 외부 서비스와의 비동기 통합',
        solution: 'Promise 기반 비동기 처리 및 에러 핸들링 강화',
        result: '안정적인 프린트 서비스 연동',
      },
    ],
    technicalResults: [
      'Zustand 기반 상태 관리 아키텍처 설계로 복잡한 상태 로직 체계화',
      '바코드 스캔 기반 실시간 운송장출력·검수 시스템 구현',
      '외부 프린트 서비스 연동',
    ],
    businessResults: [
      '검수 정확도 향상',
      '작업 처리 시간 단축',
      '대규모 현장 시스템 안정화',
    ],
    contribution:
      '프론트엔드 주도 개발, 바코드 스캔 기반 운송장출력·검수 시스템 구현, Zustand 기반 상태 관리 아키텍처 설계, 외부 프린트 서비스 연동',
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
    team: '프론트엔드 1명, 백엔드 1명',
    role: '프론트엔드 / BFF 설계 및 구현',
    description:
      'Cafe24 기반 셀러의 주문수집·운송장출력·배송 상태 관리를 하나의 흐름으로 처리하기 위한 운영 시스템을 개발했습니다.\n분산된 Cafe24 API, 결제 API, 내부 배송 데이터를 프론트엔드 화면 기준으로 재구성하기 위해 ASP.NET Core 기반 BFF를 설계·구현했고, 프론트엔드에서는 React/TypeScript와 Zustand를 활용해 주문, 결제, 배송 상태를 일관되게 관리했습니다.\n병렬 API 호출, 폴링 구조 개선, 불필요한 호출 제거를 통해 초기 로딩 시간을 약 30% 개선하고 API 호출 횟수를 약 60% 줄였습니다.',
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
          '주문·배송 데이터를 UI 기준으로 그룹핑·정규화',
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
      '주문수집·운송장출력·배송 흐름을 하나의 화면·API 흐름으로 단순화하여 사용자 경험 개선',
      '실운영 환경에서 성능·안정성·유지보수성 개선',
      '프론트엔드 개발 속도 향상으로 개발 생산성 향상',
      '세션 만료로 인한 사용자 이탈 감소',
    ],
    contribution:
      '프론트엔드 요구사항 기준 BFF 설계, API 통합 및 데이터 정규화, 인증(OAuth) 및 상태 관리 구조 개선, SPA 전용 BFF API 구축(ASP.NET Core), 주문·배송 데이터 통합, 쿠키 기반 인증 및 토큰 갱신 처리',
    links: {
      demo: '#',
      github: '#',
      blog: '#',
    },
  },
  'godo-bff': {
    title: 'GODO 이커머스 관리 시스템 & BFF',
    period: '2025.09 ~ 2025.11',
    scale: '중대형 (이커머스 운영·관리 실서비스)',
    team: '프론트엔드 1명, 백엔드 1명',
    role: '프론트엔드 개발 / BFF 설계 및 구현',
    description:
      'GODO몰 기반 운영자 관리 시스템에서 주문/배송/운송장 출력 화면을 개발하고, 화면 요구사항에 맞춰 BFF API 응답 구조를 정리했습니다. 인증, 세션 만료, API 실패 응답, 요청/응답 로깅 흐름을 공통화하여 운영 중 이슈 대응과 유지보수성을 개선했습니다.',
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
        title: 'BFF 설계 및 구현',
        items: [
          '프론트엔드 요구사항 기준으로 API 응답 구조 재정의',
          '여러 API를 하나의 엔드포인트로 통합',
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
        solution: '프론트엔드 요구사항을 기준으로 API를 재구성하는 BFF 구조 도입. 프론트엔드 요구사항 기준으로 API 응답 구조 재정의 및 여러 API를 하나의 엔드포인트로 통합',
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
  'waybill-legacy': {
    title: '운송장 출력 시스템 레거시 유지보수 및 운영 이슈 대응',
    period: '2023.06 ~ 현재',
    scale: '실운영 B2B 운송장 출력 솔루션',
    role: '레거시 유지보수 / 운영 이슈 대응',
    description:
      '운송장 출력 시스템의 AngularJS 기반 레거시 화면을 유지보수하고, 고객사의 운송장 출력 오류 및 문의에 대응한 운영 업무입니다. 화면·API·DB·외부 택배사/플랫폼 연동 흐름을 함께 확인하며 원인을 분석하고, 반복 오류와 예외 상황을 정리해 개선 포인트를 도출하며 실운영 B2B 솔루션의 안정성을 유지했습니다.',
    techStack: [
      {
        category: 'Frontend',
        items: ['AngularJS'],
      },
      {
        category: '운영·연동',
        items: ['REST API', 'DB', '외부 택배사/플랫폼 연동'],
      },
      {
        category: '기타',
        items: ['Git'],
      },
    ],
    tasks: [
      {
        title: '레거시 화면 유지보수',
        items: [
          'AngularJS 기반 레거시 화면 유지보수',
        ],
      },
      {
        title: '운영 이슈 대응 및 원인 분석',
        items: [
          '고객사 운송장 출력 오류 및 문의 대응',
          '화면, API, DB, 외부 택배사/플랫폼 연동 흐름을 함께 확인하며 원인 분석',
          '반복 오류와 예외 상황을 정리해 개선 포인트 도출',
        ],
      },
    ],
    businessResults: [
      '실운영 B2B 솔루션의 안정성 유지 경험 확보',
    ],
    contribution:
      'AngularJS 기반 레거시 화면 유지보수, 고객사 운송장 출력 오류 및 문의 대응, 화면·API·DB·외부 연동 흐름 분석을 통한 원인 파악 및 개선 포인트 도출',
    links: {},
  },
}

export const projectsSummary: ProjectSummary[] = [
  {
    id: 'ezchat',
    title: 'ezchat — 화주·물류사 업무용 실시간 채팅 서비스',
    period: '2026.07 ~ 2026.09',
    role: '업무용 대화 구조 제안 · AI 제안 설계 검토 · 단독 개발·배포',
    description:
      '물류사와 여러 화주사가 협업하는 업무용 채팅 서비스입니다. 채널·스레드 구조를 직접 제안하고, 공지는 공유하면서 화주사 간 리액션 정보를 제한하도록 구현했습니다. 기술 선정부터 AI 제안 설계 검토, 개발·배포까지 담당했습니다.',
    techStack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Redis', 'AWS ECS Fargate'],
    highlights: [
      '업무별 논의를 이어가는 채널·스레드 구조 직접 제안',
      'API 접근 제어와 소속별 소켓 전송으로 공지 리액션 가시성 구분',
      '데스크톱·모바일 스레드 UI 및 사용자 요구에 따른 첨부 기능 확장',
      '두 화주사 계정 검증 기록과 접근 제어·이벤트 수신 자동화 테스트',
    ],
  },
  {
    id: 'cafe24-bff',
    title: 'Cafe24 운송장 출력 시스템 & Web BFF',
    period: '2024.11 ~ 2025.06',
    role: '프론트엔드 / BFF 설계 및 구현',
    description:
      'Cafe24 입점 셀러와 물류 운영자를 위한 운송장 출력 시스템입니다. 분산된 Cafe24 API, 결제 API, 내부 배송 데이터를 프론트엔드 화면 기준으로 통합하기 위해 ASP.NET Core 기반 Web BFF를 설계·구현했고, 주문수집·운송장출력·배송 상태 관리 흐름을 하나의 화면과 API 흐름으로 단순화했습니다.',
    techStack: ['React 18', 'TypeScript', 'Zustand', 'Axios', 'ASP.NET Core', 'Cafe24 API', '이니시스 API'],
    highlights: [
      '프론트엔드 화면 요구사항 기준 Web BFF API 설계',
      '분산된 외부 API 응답 통합 및 UI 기준 데이터 정규화',
      'Cafe24 OAuth 2.0 인증 및 토큰 갱신 흐름 연동',
      '이니시스 결제 승인·환불·부분환불 흐름 처리',
      '초기 로딩 속도 약 30% 개선, API 호출 횟수 약 60% 감소',
    ],
  },
  {
    id: 'godo-bff',
    title: 'GODO 이커머스 관리 시스템 & Web BFF',
    period: '2025.09 ~ 2025.11',
    role: '프론트엔드 개발 / BFF 설계 및 구현',
    description:
      'GODO몰 기반 이커머스 운영자가 주문, 배송, 운송장 출력 업무를 관리할 수 있는 운영자용 시스템입니다. Cafe24 프로젝트에서 사용한 BFF 기반 데이터 통합 방식을 GODO 플랫폼에 맞게 확장 적용하고, 인증·세션·에러 처리 흐름을 공통화해 운영 시스템의 유지보수성을 개선했습니다.',
    techStack: ['React', 'TypeScript', 'Zustand', 'Axios', 'ASP.NET Core', 'GODO몰 API', '이니시스 API'],
    highlights: [
      'GODO API 연동 및 화면 기준 데이터 구조 정리',
      '프론트엔드 요구사항 기준 Web BFF API 설계',
      '쿠키 기반 인증 및 세션 만료 처리 공통화',
      'API 실패 응답 및 예외 처리 흐름 일원화',
      '요청/응답 로깅 기반 운영 이슈 분석 구조 개선',
    ],
  },
  {
    id: 'dhl-ilms',
    title: '물류센터 업무 통합 시스템',
    period: '2025.06 ~ 2025.09',
    role: '프론트엔드 주도 개발',
    description:
      '물류센터의 운송장 출력, 검수, 작업 상태 관리를 처리하기 위한 웹 기반 업무 시스템입니다. 바코드 스캔 → 운송장출력 → 검수 피드백으로 이어지는 현장 업무 흐름을 React/TypeScript 기반 화면으로 구현하고, Zustand를 활용해 스캔 상태, 검수 결과, 프린트 설정, 사용자 설정을 관리했습니다.',
    techStack: ['React 18', 'TypeScript', 'Zustand', 'Axios', 'Styled-components', 'Vite', 'Wijmo Grid'],
    highlights: [
      '바코드 스캔 기반 운송장 출력·검수 흐름 구현',
      'ID 스캔 → 운송장출력 → 비교 검증 프로세스 구현',
      '중복 스캔 방지를 위한 디바운스 및 입력 상태 제어',
      '외부 프린트 서비스 연동 및 출력 결과 피드백 처리',
      'Wijmo Grid 기반 작업 데이터 조회, 필터링, Excel 다운로드 기능 구현',
    ],
  },
  {
    id: 'waybill-legacy',
    title: '운송장 출력 시스템 레거시 유지보수 및 운영 이슈 대응',
    period: '2023.06 ~ 현재',
    role: '레거시 유지보수 / 운영 이슈 대응',
    description:
      '실운영 중인 B2B 운송장 출력 시스템의 AngularJS 기반 레거시 화면을 유지보수하고, 고객사 운송장 출력 오류와 외부 플랫폼·택배사 연동 이슈를 분석하며 서비스 안정성을 유지한 업무입니다.',
    techStack: ['AngularJS', 'JavaScript', 'REST API', 'MSSQL', '외부 택배사/플랫폼 연동'],
    highlights: [
      'AngularJS 기반 레거시 화면 유지보수',
      '운송장 출력 오류 및 고객사 문의 대응',
      '화면·API·DB·외부 연동 흐름 분석을 통한 운영 이슈 원인 파악',
      '반복 오류와 예외 상황 정리 및 개선 포인트 도출',
      '실운영 B2B 솔루션의 장애 대응 및 안정성 유지',
    ],
  }
]
