import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { projectsSummary } from '../../data/projects'
import { sectionLabels, projectLabels } from '../../content'

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(Link)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
`

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
`

const Role = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TechTag = styled.span`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.dark};
`

const Highlights = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`

const HighlightsTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const HighlightsList = styled.ul`
  list-style: none;
`

const HighlightItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`

const ViewMore = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>{sectionLabels.projects}</SectionTitle>
        <ProjectsGrid>
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} to={`/project/${project.id}`}>
              <ProjectImage>{project.title}</ProjectImage>
              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <Role>{projectLabels.role}: {project.role}</Role>
                </ProjectHeader>
                <Description>{project.description}</Description>
                <TechStack>
                  {project.techStack.slice(0, 6).map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                  {project.techStack.length > 6 && (
                    <TechTag>+{project.techStack.length - 6}</TechTag>
                  )}
                </TechStack>
                <Highlights>
                  <HighlightsTitle>{projectLabels.highlightsTitle}</HighlightsTitle>
                  <HighlightsList>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <HighlightItem key={highlightIndex}>{highlight}</HighlightItem>
                    ))}
                  </HighlightsList>
                </Highlights>
                <ViewMore>{projectLabels.viewMore}</ViewMore>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
