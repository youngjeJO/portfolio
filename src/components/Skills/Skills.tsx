import React from 'react'
import styled from 'styled-components'
import { skillsContent } from '../../content'

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.light};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.dark};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.dark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
`

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.info});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`

const SkillInfo = styled.div`
  flex: 1;
`

const SkillName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4px;
`

const SkillLevel = styled.div`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 4px;
`

const SkillLevelBar = styled.div<{ level: number }>`
  height: 100%;
  width: ${({ level }) => level}%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.info});
  border-radius: 3px;
  transition: width 0.3s ease;
`

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>{skillsContent.sectionTitle}</SectionTitle>
        <SkillsGrid>
          {skillsContent.categories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillInfo>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>
                        <SkillLevelBar level={skill.level} />
                      </SkillLevel>
                    </SkillInfo>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}

export default Skills

