import React from 'react'
import styled from 'styled-components'
import { aboutContent } from '../../content'

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
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

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.info});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
`

const TextContent = styled.div`
padding: 0 ${({ theme }) => theme.spacing.md};
text-break: keep-all;
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const HighlightCard = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
`

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>{aboutContent.sectionTitle}</SectionTitle>
        <Content>
         
          <TextContent>
            {aboutContent.paragraphs.map((raw, i) => {
              const parts = raw.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={j}>{part.slice(2, -2)}</strong>
                ) : (
                  part
                )
              )
              return <Paragraph key={i}>{parts}</Paragraph>
            })}
          </TextContent>
          <ImageContainer>
            {/* <ProfileImage>{aboutContent.profileImageAlt}</ProfileImage> */}
          </ImageContainer>
        </Content>
        <Highlights>
          {aboutContent.highlights.map((h, i) => (
            <HighlightCard key={i}>
              <HighlightTitle>{h.title}</HighlightTitle>
              <HighlightText>{h.text.split('\n').map((line, j) => (
                <React.Fragment key={j}>{line}{j < h.text.split('\n').length - 1 && <br />}</React.Fragment>
              ))}</HighlightText>
            </HighlightCard>
          ))}
        </Highlights>
      </Container>
    </AboutSection>
  )
}

export default About

