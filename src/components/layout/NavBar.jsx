function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Accueil', icon: HomeIcon },
  { id: 'cours', label: 'Cours', icon: BookIcon },
  { id: 'quizz', label: 'Quizz', icon: ZapIcon },
  { id: 'conditions', label: 'Conditions', icon: ListIcon },
  { id: 'cas', label: 'Cas pratique', icon: TargetIcon },
]

export default function NavBar({ currentView, navigate, variant }) {
  if (variant === 'bottom') {
    return (
      <nav
        className="fixed bottom-0 left-0 right-0 z-20 flex md:hidden border-t"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-light)' }}
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = currentView === id
          return (
            <button
              key={id}
              onClick={() => navigate(id)}
              className="flex-1 flex flex-col items-center py-2 gap-0.5 transition-colors duration-150"
              style={{ color: isActive ? 'var(--color-eco)' : 'var(--text-subtle)' }}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={`transition-transform duration-150 ${isActive ? 'scale-110' : ''}`}>
                <Icon />
              </span>
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </button>
          )
        })}
      </nav>
    )
  }

  // sidebar variant
  return (
    <nav className="flex flex-col gap-1 px-2 flex-1 mt-1">
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
        const isActive = currentView === id
        return (
          <button
            key={id}
            onClick={() => navigate(id)}
            className="flex flex-row items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 w-full text-left"
            style={{
              backgroundColor: isActive ? 'rgba(196,98,45,0.12)' : 'transparent',
              color: isActive ? 'var(--color-eco)' : 'var(--text-muted)',
            }}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="shrink-0"><Icon /></span>
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
