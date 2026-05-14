import { useState, useMemo } from 'react'
import quiz from '../../data/quiz.js'
import QCMQuestion from './QCMQuestion.jsx'

const TIER_META = {
  all: {
    label: 'Tous les tiers',
    desc: 'Toutes les questions sur l\'ensemble du programme. Ordre aléatoire.',
    color: 'text-neutral-700',
    border: 'border-neutral-200',
    badge: null,
  },
  tier1: {
    label: 'Tier 1 — Les fondamentaux',
    desc: 'Méthodo juridique, PESTEL, Stratégies — priorité absolue.',
    color: 'text-eco',
    border: 'border-eco',
    badge: 'bg-eco-light text-eco-dark',
  },
  tier2: {
    label: 'Tier 2 — Droit & RH',
    desc: 'Clauses de contrat, Motivation, Formation, Financement.',
    color: 'text-droit',
    border: 'border-droit',
    badge: 'bg-droit-light text-droit-dark',
  },
  tier3: {
    label: 'Tier 3 — Droit avancé',
    desc: 'Abus de position dominante, PI, RGPD, Contrefaçon.',
    color: 'text-management',
    border: 'border-management',
    badge: 'bg-management-light text-management-dark',
  },
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function QCMView({ navigate }) {
  const [mode, setMode] = useState(null)
  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone] = useState(false)

  const totalByTier = useMemo(() => ({
    all: quiz.length,
    tier1: quiz.filter(q => q.tier === 1).length,
    tier2: quiz.filter(q => q.tier === 2).length,
    tier3: quiz.filter(q => q.tier === 3).length,
  }), [])

  function startSession(selectedMode) {
    let filtered = quiz
    if (selectedMode === 'tier1') filtered = quiz.filter(q => q.tier === 1)
    else if (selectedMode === 'tier2') filtered = quiz.filter(q => q.tier === 2)
    else if (selectedMode === 'tier3') filtered = quiz.filter(q => q.tier === 3)

    const shuffled = shuffle(filtered)
    setQuestions(shuffled)
    setMode(selectedMode)
    setQuestionIndex(0)
    setResults([])
    setDone(false)
  }

  function handleNext(wasCorrect) {
    const newResults = [...results, wasCorrect]
    setResults(newResults)
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setDone(true)
    }
  }

  function resetToHub() {
    setMode(null)
    setQuestions([])
    setQuestionIndex(0)
    setResults([])
    setDone(false)
  }

  // Results screen
  if (done) {
    const correctCount = results.filter(Boolean).length
    const total = results.length
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0

    let message, msgColor
    if (pct < 40) {
      message = 'Continue à réviser — refais ce QCM dans quelques jours.'
      msgColor = 'text-red-600'
    } else if (pct <= 70) {
      message = 'Bon travail ! Identifie les points à retravailler ci-dessous.'
      msgColor = 'text-eco'
    } else {
      message = 'Excellent ! Tu maîtrises bien ce programme.'
      msgColor = 'text-green-600'
    }

    const progressColor = pct >= 70 ? '#16a34a' : pct >= 40 ? '#C4622D' : '#ef4444'

    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="card p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            {TIER_META[mode]?.label || 'Résultats'}
          </p>
          <p className="font-display text-6xl font-bold text-neutral-900 leading-none mb-2">
            {correctCount} <span className="text-3xl text-neutral-400 font-normal">/ {total}</span>
          </p>
          <p className="text-base text-neutral-500 mb-2">bonnes réponses</p>
          <p className="text-3xl font-bold mb-6" style={{ color: progressColor }}>
            {pct}%
          </p>

          {/* Progress bar */}
          <div className="h-3 bg-neutral-100 rounded-full overflow-hidden mb-6">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, backgroundColor: progressColor }}
            />
          </div>

          <p className={`text-sm font-medium leading-relaxed mb-8 ${msgColor}`}>
            {message}
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => startSession(mode)}
              className="btn-primary w-full"
            >
              Recommencer ce QCM
            </button>
            <button
              onClick={resetToHub}
              className="btn-secondary w-full"
            >
              Retour au menu QCM
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Session in progress
  if (mode !== null && questions.length > 0) {
    const correctSoFar = results.filter(Boolean).length
    const progressPct = Math.round((questionIndex / questions.length) * 100)

    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={resetToHub}
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            ← Abandonner
          </button>
          <span className="text-xs text-neutral-400">
            {correctSoFar} bonne{correctSoFar !== 1 ? 's' : ''} réponse{correctSoFar !== 1 ? 's' : ''} sur {results.length} question{results.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-eco rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <QCMQuestion
          key={questions[questionIndex].id}
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          total={questions.length}
          onNext={handleNext}
        />
      </div>
    )
  }

  // Empty state guard (no quiz data)
  if (quiz.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-neutral-500 text-sm">Aucune question disponible pour l'instant.</p>
      </div>
    )
  }

  // Hub
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
        QCM · Questions à choix multiples
      </h1>
      <p className="text-sm text-neutral-500 mb-8">
        4 propositions, une seule correcte. Explication après chaque réponse.
      </p>

      <div className="space-y-4">
        {/* Tous les tiers */}
        <div className="card p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-bold text-neutral-900 text-base mb-1">
                Tous les tiers
              </h2>
              <p className="text-sm text-neutral-500">
                {totalByTier.all} questions sur l'ensemble du programme. Ordre aléatoire.
              </p>
            </div>
            <span className="ml-3 flex-shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-full bg-neutral-100 text-neutral-600 text-xs font-bold">
              {totalByTier.all}
            </span>
          </div>
          <button onClick={() => startSession('all')} className="btn-primary w-full">
            Lancer
          </button>
        </div>

        {/* Tier 1 */}
        <div className="card p-5 border-l-4 border-eco">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-bold text-neutral-900 text-base mb-1">
                Tier 1 — Les fondamentaux
              </h2>
              <p className="text-sm text-neutral-500">
                Méthodo juridique, PESTEL, Stratégies — priorité absolue.
              </p>
            </div>
            <span className="ml-3 flex-shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-full bg-eco-light text-eco-dark text-xs font-bold">
              {totalByTier.tier1}
            </span>
          </div>
          <button onClick={() => startSession('tier1')} className="btn-primary w-full">
            Commencer
          </button>
        </div>

        {/* Tier 2 */}
        <div className="card p-5 border-l-4 border-droit">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-bold text-neutral-900 text-base mb-1">
                Tier 2 — Droit & RH
              </h2>
              <p className="text-sm text-neutral-500">
                Clauses de contrat, Motivation, Formation, Financement.
              </p>
            </div>
            <span className="ml-3 flex-shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-full bg-droit-light text-droit-dark text-xs font-bold">
              {totalByTier.tier2}
            </span>
          </div>
          <button onClick={() => startSession('tier2')} className="btn-secondary w-full">
            Commencer
          </button>
        </div>

        {/* Tier 3 */}
        <div className="card p-5 border-l-4 border-management">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-bold text-neutral-900 text-base mb-1">
                Tier 3 — Droit avancé
              </h2>
              <p className="text-sm text-neutral-500">
                Abus de position dominante, PI, RGPD, Contrefaçon.
              </p>
            </div>
            <span className="ml-3 flex-shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-full bg-management-light text-management-dark text-xs font-bold">
              {totalByTier.tier3}
            </span>
          </div>
          <button onClick={() => startSession('tier3')} className="btn-secondary w-full">
            Commencer
          </button>
        </div>
      </div>
    </div>
  )
}
