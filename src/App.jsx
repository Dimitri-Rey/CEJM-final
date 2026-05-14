import { useState } from 'react'
import useProgress from './hooks/useProgress.js'
import useDarkMode from './hooks/useDarkMode.js'
import Shell from './components/layout/Shell.jsx'
import DashboardView from './components/dashboard/DashboardView.jsx'
import CoursView from './components/cours/CoursView.jsx'
import QuizzView from './components/quizz/QuizzView.jsx'
import ConditionsView from './components/conditions/ConditionsView.jsx'
import CasView from './components/cas/CasView.jsx'

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [viewParams, setViewParams] = useState({})
  const progress = useProgress()
  const [dark, toggleDark] = useDarkMode()

  const navigate = (view, params = {}) => {
    setCurrentView(view)
    setViewParams(params)
  }

  const views = {
    dashboard: <DashboardView progress={progress} navigate={navigate} />,
    cours: <CoursView progress={progress} navigate={navigate} initialNotionId={viewParams.notionId} />,
    quizz: <QuizzView progress={progress} navigate={navigate} tierFilter={viewParams.tier} />,
    conditions: <ConditionsView progress={progress} navigate={navigate} />,
    cas: <CasView progress={progress} navigate={navigate} />,
  }

  return (
    <Shell currentView={currentView} navigate={navigate} masterScore={progress.masterScore} dark={dark} toggleDark={toggleDark}>
      {views[currentView] || views.dashboard}
    </Shell>
  )
}
