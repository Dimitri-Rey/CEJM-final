import NavBar from './NavBar.jsx'
import MasterScore from './MasterScore.jsx'

export default function Shell({ currentView, navigate, masterScore, children }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-56 md:min-h-screen bg-white border-r border-neutral-100 sticky top-0 h-screen">
        <div className="p-5 border-b border-neutral-100">
          <h1 className="font-display text-lg font-bold text-neutral-900 leading-tight">CEJM</h1>
          <p className="text-xs text-neutral-400 mt-0.5">Viser le 10</p>
        </div>
        <div className="p-4">
          <MasterScore score={masterScore} variant="sidebar" />
        </div>
        <NavBar currentView={currentView} navigate={navigate} variant="sidebar" />
      </aside>

      {/* Main content */}
      <main className="flex-1 pb-20 md:pb-0 min-h-screen">
        {/* Mobile header */}
        <header className="md:hidden sticky top-0 z-10 bg-white border-b border-neutral-100 px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-neutral-900 text-base">CEJM · Viser le 10</h1>
          </div>
          <MasterScore score={masterScore} variant="header" />
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
