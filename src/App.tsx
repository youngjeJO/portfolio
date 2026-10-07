import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AnalyticsPageView from './components/AnalyticsPageView'

function App() {
  return (
    <Router basename="/portfolio" >
      <AnalyticsPageView />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

