import { useState } from 'react'

const MATIERE_LABEL = { eco: 'Économie', droit: 'Droit', management: 'Management' }
const OPTION_LETTERS = ['A', 'B', 'C', 'D']

// Shuffle options on mount — correct answer appears at random position each question
function buildShuffled(options, correctIdx) {
  const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5)
  return {
    displayOptions: indices.map(i => options[i]),
    correctDisplay: indices.indexOf(correctIdx), // where the correct answer ended up
  }
}

export default function QCMQuestion({ question: q, onNext, questionIndex, total }) {
  // Shuffle ONCE on mount (useMemo not used — useState init fn runs once)
  const [{ displayOptions, correctDisplay }] = useState(() =>
    buildShuffled(q.options, q.correct)
  )

  const [selected, setSelected] = useState(null)
  const revealed = selected !== null

  function handleSelect(displayIdx) {
    if (revealed) return
    setSelected(displayIdx)
  }

  function getOptionStyle(displayIdx) {
    if (!revealed) {
      return selected === displayIdx
        ? 'border-2 border-eco bg-eco-light cursor-pointer'
        : 'border border-neutral-200 hover:border-neutral-400 cursor-pointer'
    }
    if (displayIdx === correctDisplay) return 'border-2 border-green-400 bg-green-50 cursor-default'
    if (displayIdx === selected) return 'border-2 border-red-400 bg-red-50 cursor-default'
    return 'border border-neutral-100 bg-neutral-50 opacity-50 cursor-default'
  }

  function getLetterStyle(displayIdx) {
    if (!revealed) {
      return selected === displayIdx
        ? 'bg-eco text-white'
        : 'bg-neutral-100 text-neutral-600'
    }
    if (displayIdx === correctDisplay) return 'bg-green-500 text-white'
    if (displayIdx === selected) return 'bg-red-500 text-white'
    return 'bg-neutral-100 text-neutral-400'
  }

  function getTextStyle(displayIdx) {
    if (!revealed) return 'text-sm leading-snug'
    if (displayIdx === correctDisplay) return 'text-sm leading-snug text-green-900 font-medium'
    if (displayIdx === selected) return 'text-sm leading-snug text-red-900'
    return 'text-sm leading-snug text-neutral-400'
  }

  function getTrailingIcon(displayIdx) {
    if (!revealed) return null
    if (displayIdx === correctDisplay) return <span className="ml-auto text-green-600 font-bold text-lg leading-none flex-shrink-0">✓</span>
    if (displayIdx === selected) return <span className="ml-auto text-red-500 font-bold text-base leading-none flex-shrink-0">✗</span>
    return null
  }

  const borderColorMap = { eco: 'border-eco', droit: 'border-droit', management: 'border-management' }
  const explanationBorder = borderColorMap[q.matiere] || 'border-neutral-300'

  const isLast = questionIndex + 1 === total
  const wasCorrect = selected === correctDisplay

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className={`badge-${q.matiere}`}>{MATIERE_LABEL[q.matiere] || q.matiere}</span>
          <span className="text-xs font-semibold" style={{ color: 'var(--text-subtle)' }}>Tier {q.tier}</span>
        </div>
        <span className="text-sm tabular-nums" style={{ color: 'var(--text-subtle)' }}>
          {questionIndex + 1} / {total}
        </span>
      </div>

      {/* Question */}
      <p className="font-display text-lg font-bold leading-snug mb-6" style={{ color: 'var(--text)' }}>
        {q.question}
      </p>

      {/* Options — shuffled order */}
      <div className="space-y-3 mb-6">
        {displayOptions.map((option, displayIdx) => (
          <button
            key={displayIdx}
            onClick={() => handleSelect(displayIdx)}
            disabled={revealed}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-150 ${getOptionStyle(displayIdx)}`}
            style={{ backgroundColor: revealed ? undefined : 'var(--surface)' }}
          >
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-150 ${getLetterStyle(displayIdx)}`}
            >
              {OPTION_LETTERS[displayIdx]}
            </span>
            <span className={`flex-1 ${getTextStyle(displayIdx)}`}>{option}</span>
            {getTrailingIcon(displayIdx)}
          </button>
        ))}
      </div>

      {/* Explanation — visible after answering */}
      {revealed && (
        <div className="mb-6">
          <div
            className={`border-l-4 ${explanationBorder} rounded-r-xl px-4 py-4`}
            style={{ backgroundColor: 'var(--surface-2)' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-subtle)' }}>
              {wasCorrect ? '✓ Bonne réponse — ' : '✗ Mauvaise réponse — '}Explication
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{q.explanation}</p>
          </div>
        </div>
      )}

      {/* Next button */}
      {revealed && (
        <button onClick={() => onNext(wasCorrect)} className="btn-primary w-full">
          {isLast ? 'Voir mon score →' : 'Question suivante →'}
        </button>
      )}
    </div>
  )
}
