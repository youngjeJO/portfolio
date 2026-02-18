import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { navigationContent } from '../../content'

const NAV_HEIGHT = 72

const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.white : 'transparent')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease;
  z-index: 1000;
`

const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  position: fixed;
  top: ${NAV_HEIGHT}px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const Navigation: React.FC = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = navigationContent.items

  const getTo = (href: string) => (href === '#home' ? '/' : `/${href}`)

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHome) {
      e.preventDefault()
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo
          to="/"
          onClick={(e) => isHome && handleNavClick(e, '#home')}
        >
          {navigationContent.logo}
        </Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={getTo(item.href)}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={getTo(item.href)}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </Nav>
  )
}

export default Navigation

