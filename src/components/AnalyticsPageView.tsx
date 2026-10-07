import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projectsDetail } from '../data/projects'

const MEASUREMENT_ID = 'G-MSTQH4XP2S'
let previousPage: string | undefined

function safeReferrer(referrer: string) {
  if (!referrer) return ''
  try {
    const url = new URL(referrer)
    return `${url.origin}${url.pathname}` // Drop query strings and fragments.
  } catch {
    return ''
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Send one page_view per path; hash anchors are not separate pages. */
export default function AnalyticsPageView() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Do not send manual page views while running the Vite dev server.
    if (!import.meta.env.PROD || !window.gtag) return

    // Only forward safe, intentionally tagged campaign values. Never send arbitrary
    // query parameters (which may contain personal information) to Analytics.
    const campaign = new URLSearchParams()
    const query = new URLSearchParams(window.location.search)
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
      const value = query.get(key)
      if (value && /^[a-z][a-z0-9_-]{0,39}$/i.test(value)) campaign.set(key, value)
    }
    const pageLocation = `${window.location.origin}${pathname}${campaign.size ? `?${campaign}` : ''}`
    if (previousPage === pageLocation) return

    const projectId = pathname.match(/^\/project\/([^/]+)\/?$/)?.[1]
    const pageTitle = projectId
      ? projectsDetail[projectId]?.title ?? '프로젝트'
      : '조영제 포트폴리오'

    // On the first page use the browser referrer; on client-side navigation use
    // the previous page, so GA4 can follow the path through this SPA.
    const pageReferrer = previousPage ? safeReferrer(previousPage) : safeReferrer(document.referrer)
    window.gtag('event', 'page_view', {
      send_to: MEASUREMENT_ID,
      page_location: pageLocation,
      page_referrer: pageReferrer,
      page_title: pageTitle,
    })
    previousPage = pageLocation
  }, [pathname])

  return null
}