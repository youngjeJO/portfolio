import React from 'react'
import styled from 'styled-components'
import { heroContent, aboutContent } from '../../content'

const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Greeting = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gray500};
`

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.navy};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray500};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`

const Button = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navy};
    transform: translateY(-2px);
  }

  &:nth-child(2) {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.navy};

    &:hover {
      background-color: ${({ theme }) => theme.colors.navy};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: calc(${({ theme }) => theme.spacing.xl} * 2);
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.navy};
`

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const TextContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-break: keep-all;
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray500};
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
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.navy};
`

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.navy};
`

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray500};
  line-height: 1.6;
`

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Container>
        <Greeting>{heroContent.greeting}</Greeting>
        <Name>{heroContent.name}</Name>
        <Tagline>
          {heroContent.tagline[0]}
          <br />
          {heroContent.tagline[1]}
        </Tagline>
        <ButtonGroup>
          <Button href="#projects">{heroContent.buttons.projects}</Button>
          <Button href="#contact">{heroContent.buttons.contact}</Button>
        </ButtonGroup>
      </Container>
      <AboutWrapper>
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
        </Content>
        <Highlights>
          {aboutContent.highlights.map((h, i) => {
            const lines = h.text.split('\n')
            return (
              <HighlightCard key={i}>
                <HighlightTitle>{h.title}</HighlightTitle>
                <HighlightText>
                  {lines.map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </HighlightText>
              </HighlightCard>
            )
          })}
        </Highlights>
      </AboutWrapper>
    </HeroSection>
  )
}

export default Hero
