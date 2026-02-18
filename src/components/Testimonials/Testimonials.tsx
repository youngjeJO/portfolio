import React from 'react'
import styled from 'styled-components'

const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.light};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.dark};
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const Quote = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.info});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  flex-shrink: 0;
`

const AuthorInfo = styled.div`
  flex: 1;
`

const AuthorName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 2px;
`

const AuthorRole = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
`

interface Testimonial {
  text: string
  author: string
  role: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: '코드 품질이 뛰어나고 협업 커뮤니케이션이 원활했습니다. 기술적 문제를 구조적으로 해결하는 능력이 인상적이었어요.',
      author: '김팀장',
      role: '프론트엔드 팀 리더',
    },
    {
      text: '프로젝트 진행 중 성능 최적화와 코드 리뷰에서 많은 도움을 받았습니다. 항상 최신 기술 동향을 공유해주셔서 팀 전체의 성장에 기여하셨네요.',
      author: '이동료',
      role: '백엔드 개발자',
    },
    {
      text: '사용자 경험을 고려한 세심한 개발과 지속적인 개선 노력이 돋보였습니다. 함께 일하고 싶은 개발자입니다.',
      author: '박디자이너',
      role: 'UI/UX 디자이너',
    },
  ]

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionTitle>Testimonials</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>"</Quote>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  {testimonial.author[0]}
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  )
}

export default Testimonials

