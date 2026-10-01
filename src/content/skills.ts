export interface SkillCategoryContent {
  id: string
  title: string
  technologies: readonly string[]
  experiences: readonly string[]
  projectIds: readonly string[]
}

export const skillsContent = {
  sectionTitle: 'Skills',
  description: '화면 구현부터 API 연동, 실시간 통신과 배포, AI 활용·검증까지 직접 수행한 경험입니다.',
  projectsLabel: '관련 프로젝트',
  categories: [
    {
      id: 'frontend',
      title: '프론트엔드',
      technologies: ['React', 'JavaScript', 'TypeScript', 'Zustand', 'Wijmo Grid', 'styled-components', 'SCSS'],
      experiences: [
        'React와 Wijmo Grid로 주문 조회·선택 출력 화면을 구현하고, Zustand로 도메인별 상태를 관리했습니다.',
        '물류센터의 스캔 입력을 디바운스와 상태 기반으로 제어하고, 검수·출력 결과를 시각·청각 피드백으로 제공했습니다.',
      ],
      projectIds: ['cafe24-bff', 'dhl-ilms'],
    },
    {
      id: 'api-backend',
      title: 'API·백엔드',
      technologies: ['C#', 'ASP.NET Core', 'Node.js', 'NestJS', 'PostgreSQL'],
      experiences: [
        'ASP.NET Core BFF에서 외부 API 데이터를 화면과 사내 배송 서비스 요구 형식으로 변환하고, 결제·환불을 연동했습니다.',
        'Node.js 배송 상태 갱신 배치를 개발하고, GODO의 인증·세션·예외 처리 흐름을 공통화했습니다.',
        'ezchat의 NestJS 백엔드와 PostgreSQL 데이터 구조를 구현했습니다.',
      ],
      projectIds: ['cafe24-bff', 'godo-bff', 'ezchat'],
    },
    {
      id: 'realtime-deployment',
      title: '실시간·배포',
      technologies: ['Socket.IO', 'Redis', 'PWA', 'Web Push', 'AWS ECS Fargate'],
      experiences: [
        'Socket.IO·Redis 기반 실시간 통신을 구성하고, 사용자 소속에 따라 공지 리액션 이벤트의 전송 대상을 구분했습니다.',
        '기기 단위 Web Push를 구성하고, AWS ECS Fargate 운영 환경에 서비스를 배포했습니다.',
      ],
      projectIds: ['ezchat'],
    },
    {
      id: 'ai-verification',
      title: 'AI 활용·검증',
      technologies: ['Claude Code', '라이브 기능 검증', '자동화 테스트', '결함 주입'],
      experiences: [
        '업무용 채널·스레드 구조를 직접 제안하고, 정보 격리를 위한 AI의 설계 제안은 요구사항에 맞춰 검토·채택했습니다.',
        'AI가 생성한 기능을 라이브 환경에서 확인하고, 오류 증상과 정상 동작 기준을 전달해 수정한 뒤 재검증했습니다.',
        '코드의 조건이나 값을 의도적으로 변경해 기존 테스트가 오류를 탐지하는지 확인했습니다.',
      ],
      projectIds: ['ezchat'],
    },
  ] satisfies readonly SkillCategoryContent[],
} as const
