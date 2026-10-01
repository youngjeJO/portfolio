import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { skillsContent } from '../../content'
import { projectsDetail } from '../../data/projects'

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`

const Introduction = styled.p`
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  word-break: keep-all;
  overflow-wrap: anywhere;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const SkillCategory = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.base};
`

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
`

const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`

const Technology = styled.li`
  max-width: 100%;
  padding: 4px ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  overflow-wrap: anywhere;
`

const Experiences = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  list-style: disc;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.8;
  word-break: keep-all;
  overflow-wrap: anywhere;
`

const RelatedProjects = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ProjectsLabel = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const ProjectLinks = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

const ProjectLink = styled(Link)`
  display: inline-block;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.accent};
  text-underline-offset: 4px;
  overflow-wrap: anywhere;

  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
    border-radius: 2px;
  }
`

const Skills: React.FC = () => (
  <SkillsSection id="skills" aria-labelledby="skills-title">
    <Container>
      <SectionTitle id="skills-title">{skillsContent.sectionTitle}</SectionTitle>
      <Introduction>{skillsContent.description}</Introduction>
      <SkillsGrid>
        {skillsContent.categories.map((category) => (
          <SkillCategory key={category.id} aria-labelledby={`skill-${category.id}`}>
            <CategoryTitle id={`skill-${category.id}`}>{category.title}</CategoryTitle>
            <Technologies>
              {category.technologies.map((technology) => (
                <Technology key={technology}>{technology}</Technology>
              ))}
            </Technologies>
            <Experiences>
              {category.experiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </Experiences>
            <RelatedProjects>
              <ProjectsLabel>{skillsContent.projectsLabel}</ProjectsLabel>
              <ProjectLinks>
                {category.projectIds.map((id) => (
                  <li key={id}>
                    <ProjectLink to={`/project/${id}`}>
                      {projectsDetail[id].title}
                    </ProjectLink>
                  </li>
                ))}
              </ProjectLinks>
            </RelatedProjects>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Container>
  </SkillsSection>
)

export default Skills
