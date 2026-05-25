import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { projectsDetail } from '../data/projects'
import { projectDetailLabels } from '../content'

const DetailContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.text});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 600;
`

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

const ProjectTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`

const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const MetaItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};

  strong {
    color: ${({ theme }) => theme.colors.text};
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`

const Role = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.base};
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
`

const Description = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`

const TechStackSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const TechStackCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TechCategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`

const TechTag = styled.span`
  padding: 6px 14px;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const TasksSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const TaskItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.base};
`

const TaskTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const TaskList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const TaskListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`

const TaskResult = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`

const ChallengesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ChallengeItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: 0 ${({ theme }) => theme.radii.base} ${({ theme }) => theme.radii.base} 0;
`

const ChallengeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ChallengeLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: 4px;
`

const ChallengeText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`

const Results = styled.div`
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.base};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const ResultsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

const ResultCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ResultCategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ResultsList = styled.ul`
  list-style: none;
`

const ResultItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`

const ContributionBlock = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ContributionText = styled(ChallengeText)`
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? projectsDetail[id] : null

  if (!project) {
    return (
      <DetailContainer>
        <Container>
          <h1>{projectDetailLabels.projectNotFound}</h1>
          <BackButton to="/#projects">{projectDetailLabels.backToProjects}</BackButton>
        </Container>
      </DetailContainer>
    )
  }

  return (
    <DetailContainer>
      <Container>
        <BackButton to="/#projects">{projectDetailLabels.backToProjects}</BackButton>

        <ProjectCard>
          <ProjectImage>{project.title}</ProjectImage>
          <ProjectContent>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectMeta>
                {project.scale && (
                  <MetaItem>
                    <strong>{projectDetailLabels.scale}:</strong>
                    {project.scale}
                  </MetaItem>
                )}
                {project.team && (
                  <MetaItem>
                    <strong>{projectDetailLabels.team}:</strong>
                    {project.team}
                  </MetaItem>
                )}
              </ProjectMeta>
              <Role>{projectDetailLabels.role}: {project.role}</Role>
            </ProjectHeader>

            <Description>
              <DescriptionTitle>{projectDetailLabels.description}</DescriptionTitle>
              <DescriptionText>{project.description}</DescriptionText>
            </Description>

            <TechStackSection>
              <DescriptionTitle>{projectDetailLabels.techStack}</DescriptionTitle>
              {project.techStack.map((category, catIndex) => (
                <TechStackCategory key={catIndex}>
                  <TechCategoryTitle>{category.category}</TechCategoryTitle>
                  <TechStack>
                    {category.items.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </TechStackCategory>
              ))}
            </TechStackSection>

            <TasksSection>
              <DescriptionTitle>{projectDetailLabels.tasks}</DescriptionTitle>
              {project.tasks.map((task, taskIndex) => (
                <TaskItem key={taskIndex}>
                  <TaskTitle>
                    {taskIndex + 1}. {task.title}
                  </TaskTitle>
                  <TaskList>
                    {task.items.map((item, itemIndex) => (
                      <TaskListItem key={itemIndex}>{item}</TaskListItem>
                    ))}
                  </TaskList>
                  {task.result && <TaskResult>{projectDetailLabels.result}: {task.result}</TaskResult>}
                </TaskItem>
              ))}
            </TasksSection>

            {project.challenges && project.challenges.length > 0 && (
              <ChallengesSection>
                <DescriptionTitle>{projectDetailLabels.challenges}</DescriptionTitle>
                {project.challenges.map((challenge, challengeIndex) => (
                  <ChallengeItem key={challengeIndex}>
                    <ChallengeTitle>{projectDetailLabels.challenge}: {challenge.challenge}</ChallengeTitle>
                    <ChallengeLabel>{projectDetailLabels.solution}:</ChallengeLabel>
                    <ChallengeText>{challenge.solution}</ChallengeText>
                    <ChallengeLabel>{projectDetailLabels.outcome}:</ChallengeLabel>
                    <ChallengeText>{challenge.result}</ChallengeText>
                  </ChallengeItem>
                ))}
              </ChallengesSection>
            )}

            {(project.technicalResults || project.businessResults) && (
              <Results>
                <ResultsTitle>{projectDetailLabels.results}</ResultsTitle>
                <ResultsGrid>
                  {project.technicalResults && (
                    <ResultCategory>
                      <ResultCategoryTitle>{projectDetailLabels.technicalResults}</ResultCategoryTitle>
                      <ResultsList>
                        {project.technicalResults.map((result, resultIndex) => (
                          <ResultItem key={resultIndex}>{result}</ResultItem>
                        ))}
                      </ResultsList>
                    </ResultCategory>
                  )}
                  {project.businessResults && (
                    <ResultCategory>
                      <ResultCategoryTitle>{projectDetailLabels.businessResults}</ResultCategoryTitle>
                      <ResultsList>
                        {project.businessResults.map((result, resultIndex) => (
                          <ResultItem key={resultIndex}>{result}</ResultItem>
                        ))}
                      </ResultsList>
                    </ResultCategory>
                  )}
                </ResultsGrid>
                {project.contribution && (
                  <ContributionBlock>
                    <ResultCategoryTitle>{projectDetailLabels.contribution}</ResultCategoryTitle>
                    <ContributionText>{project.contribution}</ContributionText>
                  </ContributionBlock>
                )}
              </Results>
            )}
          </ProjectContent>
        </ProjectCard>
      </Container>
    </DetailContainer>
  )
}

export default ProjectDetail
