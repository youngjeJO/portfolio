import React from 'react'
import styled from 'styled-components'
import { contactContent } from '../../content'

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.dark};
`

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ContactItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
`

const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
`

const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  word-break: break-all;
`

const FinalMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>{contactContent.sectionTitle}</SectionTitle>
        <CTAText>{contactContent.ctaText}</CTAText>
        <ContactGrid>
          {contactContent.items.map((contact, index) => (
            <ContactItem
              key={index}
              href={contact.url}
              target={contact.url.startsWith('http') ? '_blank' : undefined}
              rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <ContactIcon>{contact.icon}</ContactIcon>
              <ContactLabel>{contact.label}</ContactLabel>
              <ContactValue>{contact.value}</ContactValue>
            </ContactItem>
          ))}
        </ContactGrid>
        <FinalMessage>{contactContent.finalMessage}</FinalMessage>
      </Container>
    </ContactSection>
  )
}

export default Contact

