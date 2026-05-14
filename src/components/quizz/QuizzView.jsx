import { useState, useEffect } from 'react'
import useDueCards from '../../hooks/useDueCards.js'
import notions from '../../data/content.js'
import FlashCard from './FlashCard.jsx'
import SessionSummary from './SessionSummary.jsx'
import QCMView from './QCMView.jsx'

export default function QuizzView({ progress, navigate, tierFilter }) {
  const { state, reviewCard } = progress

  const [activeTab, setActiveTab] = useState('flashcards')

  // Flashcard session state
  const [mode, setMode] = useState(null) // null | 'due' | 'all' | 'tier'
  const [sessionCards, setSessionCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone] = useState(false)

  const dueCards = useDueCards(state)

  // Auto-switch to flashcards tab and start tier session if tierFilter is provided
  useEffect(() => {
    if (tierFilter && mode === null) {
      setActiveTab('flashcards')
      const tierNotions = notions.filter(n => n.tier === tierFilter)
      const tierCards = tierNotions.flatMap(n =>
        n.cards.map(c => ({ ...c, notionId: n.id, notionTitre: n.titre, tier: n.tier, matiere: n.matiere }))
      )
      setSessionCards(tierCards)
      setCardIndex(0)
      setResults([])
      setDone(false)
      setMode('tier')
    }
  }, [tierFilter])

  function resetFlashcardSession() {
    setMode(null)
    setSessionCards([])
    setCardIndex(0)
    setResults([])
    setDone(false)
  }

  function handleTabSwitch(tab) {
    if (tab === activeTab) return
    // Reset in-progress flashcard session when switching tabs
    resetFlashcardSession()
    setActiveTab(tab)
  }

  function startDue() {
    if (dueCards.length === 0) return
    setSessionCards(dueCards)
    setCardIndex(0)
    setResults([])
    setDone(false)
    setMode('due')
  }

  function startAll() {
    const allCards = notions.flatMap(n =>
      n.cards.map(c => ({ ...c, notionId: n.id, notionTitre: n.titre, tier: n.tier, matiere: n.matiere }))
    )
    const shuffled = [...allCards].sort(() => Math.random() - 0.5)
    setSessionCards(shuffled)
    setCardIndex(0)
    setResults([])
    setDone(false)
    setMode('all')
  }

  function handleGrade(grade) {
    const card = sessionCards[cardIndex]
    reviewCard(card.id, grade)
    const newResults = [...results, { card, grade }]
    setResults(newResults)

    if (cardIndex + 1 < sessionCards.length) {
      setCardIndex(cardIndex + 1)
    } else {
      setDone(true)
    }
  }

  // ── Tab bar (hidden when a flashcard session is active) ──────────────────
  const sessionInProgress = activeTab === 'flashcards' && mode !== null

  const tabBar = (
    <div className="flex border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button
        onClick={() => handleTabSwitch('flashcards')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 ${
          activeTab === 'flashcards'
            ? 'border-eco text-eco font-semibold bg-white'
            : 'border-transparent text-neutral-500 hover:text-neutral-700'
        }`}
      >
        <span className="text-base leading-none">📇</span>
        Flashcards
      </button>
      <button
        onClick={() => handleTabSwitch('qcm')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 ${
          activeTab === 'qcm'
            ? 'border-eco text-eco font-semibold bg-white'
            : 'border-transparent text-neutral-500 hover:text-neutral-700'
        }`}
      >
        <span className="text-base leading-none">❓</span>
        QCM
      </button>
    </div>
  )

  // ── QCM tab ──────────────────────────────────────────────────────────────
  if (activeTab === 'qcm') {
    return (
      <div className="min-h-screen bg-cream">
        {tabBar}
        <QCMView navigate={navigate} />
      </div>
    )
  }

  // ── Flashcards tab — session done ────────────────────────────────────────
  if (done) {
    return (
      <div className="min-h-screen bg-cream">
        {tabBar}
        <div className="max-w-2xl mx-auto px-4 py-6">
          <SessionSummary results={results} onDone={resetFlashcardSession} />
        </div>
      </div>
    )
  }

  // ── Flashcards tab — session in progress ─────────────────────────────────
  if (mode !== null && sessionCards.length > 0) {
    const current = sessionCards[cardIndex]
    const progressPct = Math.round((cardIndex / sessionCards.length) * 100)

    return (
      <div className="min-h-screen bg-cream">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Session header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={resetFlashcardSession}
              className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              ← Abandonner
            </button>
            <div className="text-right">
              <span className="text-sm text-neutral-500">
                {cardIndex + 1} / {sessionCards.length}
              </span>
              {mode === 'tier' && (
                <p className="text-[11px] text-eco font-medium">Tier {tierFilter} uniquement</p>
              )}
              {mode === 'due' && (
                <p className="text-[11px] text-neutral-400">Session du jour</p>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-eco rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <FlashCard key={current.id} card={current} onGrade={handleGrade} />
        </div>
      </div>
    )
  }

  // ── Flashcards tab — hub ─────────────────────────────────────────────────
  const totalCards = notions.reduce((sum, n) => sum + n.cards.length, 0)

  return (
    <div className="min-h-screen bg-cream">
      {tabBar}

      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
          Flashcards · Répétition espacée
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Chaque carte ratée revient vite. Chaque carte sue revient de plus en plus tard.
        </p>

        {/* Session du jour */}
        <div className="card p-5 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-bold text-neutral-900 text-base mb-1">Session du jour</h2>
              <p className="text-sm text-neutral-500">
                Algorithme SM-2 — seules les cartes dont la date de révision est atteinte sont proposées.
              </p>
            </div>
            {dueCards.length > 0 && (
              <span className="ml-3 flex-shrink-0 inline-flex items-center justify-center min-w-[2rem] h-7 px-2 rounded-full bg-eco text-white text-xs font-bold">
                {dueCards.length}
              </span>
            )}
          </div>

          {dueCards.length > 0 ? (
            <button onClick={startDue} className="btn-primary w-full">
              Commencer ({dueCards.length} carte{dueCards.length !== 1 ? 's' : ''})
            </button>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm font-medium text-green-600">Tout est à jour !</p>
              <p className="text-xs text-neutral-400 mt-1">Aucune carte à réviser aujourd'hui. Bravo !</p>
            </div>
          )}
        </div>

        {/* Tout réviser */}
        <div className="card p-5">
          <h2 className="font-bold text-neutral-900 text-base mb-1">Tout réviser</h2>
          <p className="text-sm text-neutral-500 mb-3">
            Parcours les {totalCards} cartes dans un ordre aléatoire. Idéal pour une révision générale.
          </p>
          <button onClick={startAll} className="btn-secondary w-full">
            Lancer une session complète
          </button>
        </div>
      </div>
    </div>
  )
}
