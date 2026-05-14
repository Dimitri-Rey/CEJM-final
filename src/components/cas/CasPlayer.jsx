import { useState } from 'react'
import CasCorrection from './CasCorrection.jsx'

const STEPS = [
  {
    key: 'faits',
    label: '01 · Les faits',
    hint: 'Résume la situation en 3-5 lignes. Garde uniquement ce qui est juridiquement utile.',
    placeholder: 'Les faits : ...',
  },
  {
    key: 'problemeDeDroit',
    label: '02 · Problème de droit',
    hint: 'Formule en question juridique générale.',
    placeholder: 'La question juridique est : ...',
  },
  {
    key: 'principe',
    label: '03 · Principe / règle',
    hint: "Énonce la règle, les conditions cumulatives et les exceptions.",
    placeholder: 'Selon [la règle / la jurisprudence]...',
  },
  {
    key: 'application',
    label: '04 · Application aux faits',
    hint: "Commence par « En l'espèce… » et confronte chaque condition aux faits.",
    placeholder: "En l'espèce...",
  },
  {
    key: 'conclusion',
    label: '05 · Conclusion',
    hint: 'Tranche + indique la sanction applicable.',
    placeholder: 'En conclusion...',
  },
]

const MATIERE_COLORS = {
  eco: 'bg-eco text-white',
  droit: 'bg-droit text-white',
  management: 'bg-management text-white',
}

export default function CasPlayer({ cas, progress, onBack }) {
  const { recordCasScore } = progress
  const [answers, setAnswers] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const [showCorrection, setShowCorrection] = useState(false)

  const step = STEPS[currentStep]
  const isLast = currentStep === STEPS.length - 1

  function handleNext() {
    if (isLast) {
      setShowCorrection(true)
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  function handlePrev() {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  function handleScore(totalScore, stepsCompleted) {
    recordCasScore(cas.id, totalScore, stepsCompleted)
  }

  if (showCorrection) {
    return (
      <CasCorrection
        cas={cas}
        userAnswers={answers}
        onScore={handleScore}
        onBack={onBack}
      />
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Back */}
      <button
        onClick={onBack}
        className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors mb-4 inline-block"
      >
        ← Retour
      </button>

      {/* Cas header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
            {cas.entreprise}
          </span>
          <span className="text-xs text-neutral-400">{cas.annee}</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 ml-auto">
            Tier {cas.tier}
          </span>
        </div>
        <h1 className="font-display text-xl font-bold text-neutral-900 leading-snug">{cas.titre}</h1>
      </div>

      {/* Contexte */}
      <div className="bg-cream border-l-4 border-eco rounded-r-lg p-4 mb-4">
        <p className="text-xs font-bold text-eco uppercase tracking-wide mb-1">Contexte</p>
        <p className="text-sm text-neutral-700 leading-relaxed">{cas.contexte}</p>
      </div>

      {/* Question */}
      <div className="card p-4 mb-6 bg-droit bg-opacity-5 border border-droit border-opacity-20">
        <p className="text-xs font-bold text-droit uppercase tracking-wide mb-1">Question</p>
        <p className="text-sm font-medium text-neutral-900 leading-relaxed">{cas.question}</p>
      </div>

      {/* Step progress */}
      <div className="flex gap-1 mb-6">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setCurrentStep(i)}
            className={`flex-1 text-center transition-all ${
              i === currentStep
                ? 'font-bold'
                : 'opacity-40 hover:opacity-70'
            }`}
          >
            <div
              className={`h-1.5 rounded-full mb-1 transition-all ${
                i < currentStep
                  ? 'bg-eco'
                  : i === currentStep
                  ? 'bg-eco'
                  : 'bg-neutral-200'
              }`}
            />
            <span className="text-[10px] text-neutral-500 hidden sm:block">{s.label.split(' · ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Current step panel */}
      <div className="card p-5 mb-4">
        <h2 className="font-bold text-neutral-900 text-base mb-1">{step.label}</h2>
        <p className="text-sm italic text-neutral-500 mb-4">{step.hint}</p>
        <textarea
          className="w-full border border-neutral-200 rounded-lg p-3 text-sm text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-eco transition-colors resize-y"
          style={{ minHeight: '8rem' }}
          placeholder={step.placeholder}
          value={answers[step.key] || ''}
          onChange={e => setAnswers(prev => ({ ...prev, [step.key]: e.target.value }))}
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        {currentStep > 0 && (
          <button onClick={handlePrev} className="btn-secondary">
            ← Précédent
          </button>
        )}
        <button
          onClick={handleNext}
          className="btn-primary flex-1"
        >
          {isLast ? 'Valider →' : 'Étape suivante →'}
        </button>
      </div>
    </div>
  )
}
