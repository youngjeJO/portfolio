import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'

interface LayoutProps {
  children: React.ReactNode
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 72px;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />
      <Main>{children}</Main>
    </LayoutContainer>
  )
}

export default Layout

