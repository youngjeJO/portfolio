export interface SkillItem {
  name: string
  level: number
  icon: string
}

export interface SkillCategoryContent {
  title: string
  skills: SkillItem[]
}

/**
 * 프로젝트(DHL ILMS, Cafe24 BFF, godo BFF) 실제 사용 스택·역량 기준으로 구성
 */
export const skillsContent = {
  sectionTitle: 'Skills',
  categories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Zustand', level: 88, icon: '🐻' },
        { name: 'Styled-components', level: 85, icon: '💅' },
        { name: 'SCSS', level: 85, icon: '🎨' },
        { name: 'Axios', level: 88, icon: '🌐' },
      ],
    },
    {
      title: 'BFF / Backend',
      skills: [
        { name: 'ASP.NET', level: 82, icon: '🔷' },
        { name: 'BFF API 설계', level: 85, icon: '🏗️' },
        { name: 'API Aggregation', level: 85, icon: '🔗' }
      ],
    },
    {
      title: '인증·외부 연동',
      skills: [
        { name: 'OAuth 2.0', level: 80, icon: '🔐' },
        { name: '쿠키 기반 세션', level: 85, icon: '🍪' },
        { name: '토큰 갱신 처리', level: 82, icon: '🎫' },
        { name: 'Cafe24 API', level: 78, icon: '🛒' },
        { name: '이니시스 결제 API', level: 75, icon: '💳' },
      ],
    },
    {
      title: '상태·성능·UI',
      skills: [
        { name: '전역 상태 관리 설계', level: 88, icon: '📦' },
        { name: 'useShallow / 리렌더 최소화', level: 85, icon: '⚡' },
        { name: 'Promise.all·allSettled', level: 85, icon: '🔄' },
        { name: 'Wijmo Grid', level: 75, icon: '📋' },
        { name: '반응형·접근성', level: 82, icon: '📱' },
      ],
    },
    {
      title: '기타',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'REST API 설계', level: 85, icon: '🔌' },
        { name: '로깅·예외 처리', level: 80, icon: '📝' },
      ],
    },
  ],
} as const
