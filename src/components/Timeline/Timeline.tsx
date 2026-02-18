import React from 'react'
import styled from 'styled-components'

const TimelineSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.dark};
`

const TimelineContainer = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.info});
  }
`

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => `calc(${theme.spacing.xl} + 6px)`};
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`

const TimelineYear = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const TimelineEvent = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
`

const EventTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`

const EventDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
`

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2024',
      title: 'Next.js SSR 적용',
      description: 'Next.js 14 App Router를 활용한 서버 사이드 렌더링 도입 및 성능 최적화',
    },
    {
      year: '2023',
      title: 'Zustand 리팩토링',
      description: '기존 Redux 기반 상태 관리를 Zustand로 마이그레이션하여 코드 간소화 및 성능 개선',
    },
    {
      year: '2022',
      title: 'React 도입',
      description: '프론트엔드 프레임워크로 React를 도입하고 컴포넌트 기반 개발 시작',
    },
  ]

  return (
    <TimelineSection id="timeline">
      <Container>
        <SectionTitle>Career Timeline</SectionTitle>
        <TimelineContainer>
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineYear>{event.year}</TimelineYear>
              <TimelineEvent>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </TimelineEvent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </TimelineSection>
  )
}

export default Timeline

