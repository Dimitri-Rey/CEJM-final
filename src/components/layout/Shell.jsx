import NavBar from './NavBar.jsx'
import MasterScore from './MasterScore.jsx'

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Shell({ currentView, navigate, masterScore, dark, toggleDark, children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-56 md:min-h-screen sticky top-0 h-screen border-r" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-light)' }}>
        <div className="p-5 flex items-start justify-between border-b" style={{ borderColor: 'var(--border-light)' }}>
          <div>
            <h1 className="font-display text-lg font-bold leading-tight" style={{ color: 'var(--text)' }}>CEJM</h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>Viser le 10</p>
          </div>
          <button
            onClick={toggleDark}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: 'var(--text-muted)' }}
            title={dark ? 'Mode clair' : 'Mode sombre'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
          <MasterScore score={masterScore} variant="sidebar" />
        </div>
        <NavBar currentView={currentView} navigate={navigate} variant="sidebar" />
      </aside>

      {/* Main content */}
      <main className="flex-1 pb-20 md:pb-0 min-h-screen">
        {/* Mobile header */}
        <header className="md:hidden sticky top-0 z-10 px-4 py-3 flex items-center justify-between border-b" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-light)' }}>
          <h1 className="font-display font-bold text-base" style={{ color: 'var(--text)' }}>CEJM · Viser le 10</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDark}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <MasterScore score={masterScore} variant="header" />
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-6 md:px-8">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <NavBar currentView={currentView} navigate={navigate} variant="bottom" />
    </div>
  )
}
