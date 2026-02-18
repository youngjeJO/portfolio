import React from 'react'
import styled from 'styled-components'
import { heroContent } from '../../content'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.light} 0%, ${({ theme }) => theme.colors.white} 100%);
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Greeting = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary};
`

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px);
  }

  &:nth-child(2) {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
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
          {/* <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">{heroContent.buttons.resume}</Button> */}
        </ButtonGroup>
      </Container>
    </HeroSection>
  )
}

export default Hero

