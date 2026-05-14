import { useState, useEffect } from 'react'
import useDueCards from '../../hooks/useDueCards.js'
import notions from '../../data/content.js'
import FlashCard from './FlashCard.jsx'
import SessionSummary from './SessionSummary.jsx'

export default function QuizzView({ progress, navigate, tierFilter }) {
  const { state, reviewCard } = progress
  const [mode, setMode] = useState(null) // null | 'due' | 'all' | 'tier'
  const [sessionCards, setSessionCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone] = useState(false)

  const dueCards = useDueCards(state)

  // Auto-launch if a tierFilter is provided
  useEffect(() => {
    if (tierFilter && mode === null) {
      const tierNotions = notions.filter(n => n.tier === tierFilter)
      const tierCards = tierNotions.flatMap(n =>
        n.cards.map(c => ({ ...c, notionId: n.id, notionTitre: n.titre, tier: n.tier, matiere: n.matiere }))
      )
      setSessionCards(tierCards)
      setMode('tier')
    }
  }, [tierFilter])

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
    // Shuffle
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

  function handleSessionDone() {
    setMode(null)
    setDone(false)
    setResults([])
    setCardIndex(0)
    setSessionCards([])
  }

  // Session done — show summary
  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <SessionSummary results={results} onDone={handleSessionDone} />
      </div>
    )
  }

  // Session in progress
  if (mode !== null && sessionCards.length > 0) {
    const current = sessionCards[cardIndex]
    const progress_pct = Math.round((cardIndex / sessionCards.length) * 100)

    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleSessionDone}
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
            style={{ width: `${progress_pct}%` }}
          />
        </div>

        <FlashCard card={current} onGrade={handleGrade} />
      </div>
    )
  }

  // Hub — no session active
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
        Quizz · Répétition espacée
      </h1>
      <p className="text-sm text-neutral-500 mb-8">
        Chaque carte ratée revient vite. Chaque carte sue revient de plus en plus tard.
      </p>

      {/* Session du jour */}
      <div className="card p-5 mb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h2 className="font-bold text-neutral-900 text-base mb-1">Session du jour</h2>
            <p className="text-sm text-neutral-500 mb-3">
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
          Parcours les 167 cartes dans un ordre aléatoire. Idéal pour une révision générale.
        </p>
        <button onClick={startAll} className="btn-secondary w-full">
          Lancer une session complète
        </button>
      </div>
    </div>
  )
}
