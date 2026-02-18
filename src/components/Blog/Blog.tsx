import React from 'react'
import styled from 'styled-components'

const BlogSection = styled.section`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const BlogCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const BlogTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.dark};
`

const BlogDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const BlogLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`

interface BlogPost {
  title: string
  description: string
  url: string
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'React 성능 최적화 실험기',
      description: 'React 렌더링 최적화를 위한 다양한 기법들을 실험하고 그 결과를 정리했습니다. useMemo, useCallback, React.memo 등의 사용 시점과 효과를 다룹니다.',
      url: '#',
    },
    {
      title: 'Zustand에서 리렌더링을 줄이는 방법',
      description: 'Zustand의 useShallow를 활용하여 불필요한 리렌더링을 방지하는 방법과 실제 프로젝트에서 적용한 사례를 공유합니다.',
      url: '#',
    },
    {
      title: 'Next.js App Router에서 SSR 적용기',
      description: 'Next.js 14 App Router를 사용하여 SSR을 구현하면서 겪었던 문제점과 해결 방법을 정리했습니다.',
      url: '#',
    },
  ]

  return (
    <BlogSection id="blog">
      <Container>
        <SectionTitle>Problem Solving / Blog</SectionTitle>
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard key={index}>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDescription>{post.description}</BlogDescription>
              <BlogLink href={post.url} target="_blank" rel="noopener noreferrer">
                읽어보기 →
              </BlogLink>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  )
}

export default Blog

