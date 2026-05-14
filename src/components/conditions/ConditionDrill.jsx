import { useState } from 'react'

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function ConditionDrill({ conditionSet, state, onComplete, onClose }) {
  const [phase, setPhase] = useState(1)
  const [score, setScore] = useState(0)
  const [orderList, setOrderList] = useState(() => shuffleArray(conditionSet.conditions))
  const [phaseResult, setPhaseResult] = useState(null) // null | { correct: bool[], points: number }
  const [finished, setFinished] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  // Phase 2
  const [missingIndex] = useState(() => Math.floor(Math.random() * conditionSet.conditions.length))
  const [phase2Answer, setPhase2Answer] = useState(null)
  const [phase2Options] = useState(() => shuffleArray(conditionSet.conditions))

  // Phase 3
  const [phase3Answer, setPhase3Answer] = useState(null)
  const [phase3Options] = useState(() => {
    const opts = conditionSet.conditions.map(c => c.texte)
    opts.push('Elle est entièrement valide')
    return shuffleArray(opts)
  })

  const hasPhase3 = Boolean(conditionSet.piegeAnnexe)

  // ── Phase 1 helpers ──────────────────────────────────────────
  function moveUp(index) {
    if (index === 0) return
    const next = [...orderList]
    ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
    setOrderList(next)
  }

  function moveDown(index) {
    if (index === orderList.length - 1) return
    const next = [...orderList]
    ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
    setOrderList(next)
  }

  function validateOrder() {
    const correct = orderList.map((c, i) => c.numero === conditionSet.conditions[i].numero)
    const correctCount = correct.filter(Boolean).length
    const points = Math.round((correctCount / conditionSet.conditions.length) * 33)
    setPhaseResult({ correct, points })
  }

  function goToPhase2() {
    const points = phaseResult ? phaseResult.points : 0
    setScore(prev => prev + points)
    setPhaseResult(null)
    setPhase(2)
  }

  // ── Phase 2 helpers ──────────────────────────────────────────
  const phase2Conditions = conditionSet.conditions.filter((_, i) => i !== missingIndex)
  const correctMissing = conditionSet.conditions[missingIndex]

  function answerPhase2(condition) {
    const isCorrect = condition.numero === correctMissing.numero
    const points = isCorrect ? 33 : 0
    setPhase2Answer({ selected: condition, isCorrect, points })
  }

  function goToPhase3() {
    const points = phase2Answer ? phase2Answer.points : 0
    setScore(prev => prev + points)
    setPhase2Answer(null)
    if (hasPhase3) {
      setPhase(3)
    } else {
      finishSession(score + points)
    }
  }

  // ── Phase 3 helpers ──────────────────────────────────────────
  // The "correct" problematic condition for the piegeAnnexe is the first one
  // with a piegeClassique, or failing that the first condition.
  const trapCondition = conditionSet.conditions.find(c => c.piegeClassique) || conditionSet.conditions[0]

  function answerPhase3(optionText) {
    const isCorrect = optionText === trapCondition.texte
    const points = isCorrect ? 34 : 0
    setPhase3Answer({ selected: optionText, isCorrect, points })
  }

  function finishSession(finalScore) {
    const clamped = Math.min(100, Math.max(0, finalScore))
    setTotalScore(clamped)
    setFinished(true)
    onComplete(clamped)
  }

  function finishAfterPhase3() {
    const points = phase3Answer ? phase3Answer.points : 0
    const final = score + points
    finishSession(final)
  }

  // ── Finished screen ──────────────────────────────────────────
  if (finished) {
    const isPerfect = totalScore >= 80
    return (
      <div className="card p-6 max-w-xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-1">Exercice terminé</h2>
        <p className="text-4xl font-bold mb-2 mt-4" style={{ color: totalScore >= 70 ? '#2D5A3D' : totalScore >= 40 ? '#C4622D' : '#dc2626' }}>
          {totalScore} <span className="text-lg font-normal text-neutral-400">/ 100</span>
        </p>
        <p className={`text-base font-semibold mb-6 ${isPerfect ? 'text-green-600' : 'text-orange-600'}`}>
          {isPerfect ? 'Bravo ! Maîtrise solide.' : 'À retravailler — relis les conditions.'}
        </p>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Rappel — Sanction</p>
          <p className="text-sm text-red-800">{conditionSet.sanction}</p>
        </div>

        <div className="space-y-2 mb-6">
          {conditionSet.conditions.map((c, i) => (
            <div key={c.numero} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-eco text-white text-xs flex items-center justify-center font-bold mt-0.5">
                {c.numero}
              </span>
              <p className="text-sm text-neutral-800">{c.texte}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={onClose} className="btn-secondary flex-1">Retour</button>
        </div>
      </div>
    )
  }

  // ── Phase 1 ──────────────────────────────────────────────────
  if (phase === 1) {
    return (
      <div className="card p-5 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Phase 1 / {hasPhase3 ? 3 : 2}</span>
          <button onClick={onClose} className="text-xs text-neutral-400 hover:text-neutral-700">✕ Fermer</button>
        </div>
        <h2 className="font-display text-lg font-bold text-neutral-900 mb-1">Reconstitue l'ordre</h2>
        <p className="text-sm text-neutral-500 mb-4">Remets les conditions dans le bon ordre à l'aide des boutons ↑ ↓.</p>

        <div className="space-y-2 mb-5">
          {orderList.map((condition, index) => {
            const isCorrect = phaseResult ? phaseResult.correct[index] : null
            return (
              <div
                key={condition.numero}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  phaseResult
                    ? isCorrect
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                    : 'bg-white border-neutral-200'
                }`}
              >
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={!!phaseResult || index === 0}
                    className="w-6 h-5 text-xs text-neutral-400 hover:text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={!!phaseResult || index === orderList.length - 1}
                    className="w-6 h-5 text-xs text-neutral-400 hover:text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ↓
                  </button>
                </div>
                <p className="flex-1 text-sm text-neutral-800">{condition.texte}</p>
                {phaseResult && (
                  <span className={`text-base flex-shrink-0 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {phaseResult ? (
          <div className="space-y-3">
            <p className="text-sm font-medium text-neutral-700">
              Score phase 1 : <span className="font-bold text-eco">{phaseResult.points} / 33</span>
            </p>
            <button onClick={goToPhase2} className="btn-primary w-full">Phase suivante →</button>
          </div>
        ) : (
          <button onClick={validateOrder} className="btn-primary w-full">Valider l'ordre</button>
        )}
      </div>
    )
  }

  // ── Phase 2 ──────────────────────────────────────────────────
  if (phase === 2) {
    return (
      <div className="card p-5 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Phase 2 / {hasPhase3 ? 3 : 2}</span>
          <button onClick={onClose} className="text-xs text-neutral-400 hover:text-neutral-700">✕ Fermer</button>
        </div>
        <h2 className="font-display text-lg font-bold text-neutral-900 mb-1">Quelle condition manque ?</h2>
        <p className="text-sm text-neutral-500 mb-4">Une condition a été retirée de la liste. Laquelle ?</p>

        <div className="space-y-1.5 mb-5">
          {phase2Conditions.map((c, i) => (
            <div key={c.numero} className="flex items-start gap-2 p-2.5 bg-neutral-50 rounded-lg">
              <span className="flex-shrink-0 text-xs text-neutral-400 font-mono mt-0.5">{i + 1}.</span>
              <p className="text-sm text-neutral-700">{c.texte}</p>
            </div>
          ))}
        </div>

        <p className="text-sm font-medium text-neutral-700 mb-3">La condition manquante est :</p>
        <div className="space-y-2 mb-4">
          {phase2Options.map(c => {
            let btnClass = 'w-full text-left p-3 rounded-lg border text-sm transition-colors '
            if (!phase2Answer) {
              btnClass += 'bg-white border-neutral-200 hover:border-eco hover:bg-eco-light'
            } else if (c.numero === correctMissing.numero) {
              btnClass += 'bg-green-50 border-green-400 text-green-800 font-medium'
            } else if (phase2Answer.selected.numero === c.numero) {
              btnClass += 'bg-red-50 border-red-300 text-red-700'
            } else {
              btnClass += 'bg-white border-neutral-200 text-neutral-400'
            }
            return (
              <button
                key={c.numero}
                onClick={() => !phase2Answer && answerPhase2(c)}
                className={btnClass}
              >
                {c.texte}
              </button>
            )
          })}
        </div>

        {phase2Answer && (
          <div className="space-y-3">
            <p className={`text-sm font-medium ${phase2Answer.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {phase2Answer.isCorrect ? '✓ Correct !' : `✗ La condition manquante était : ${correctMissing.texte}`}
              {' '}— <span className="font-bold">{phase2Answer.points} / 33</span>
            </p>
            <button onClick={goToPhase3} className="btn-primary w-full">
              {hasPhase3 ? 'Phase suivante →' : 'Voir les résultats →'}
            </button>
          </div>
        )}
      </div>
    )
  }

  // ── Phase 3 ──────────────────────────────────────────────────
  if (phase === 3 && hasPhase3) {
    return (
      <div className="card p-5 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Phase 3 / 3</span>
          <button onClick={onClose} className="text-xs text-neutral-400 hover:text-neutral-700">✕ Fermer</button>
        </div>
        <h2 className="font-display text-lg font-bold text-neutral-900 mb-1">La clause est-elle valide ?</h2>
        <p className="text-sm text-neutral-500 mb-4">Lis attentivement la clause ci-dessous.</p>

        <blockquote className="border-l-4 border-eco bg-cream rounded-r-lg p-4 mb-5">
          <p className="text-sm text-neutral-700 italic leading-relaxed">{conditionSet.piegeAnnexe}</p>
        </blockquote>

        <p className="text-sm font-medium text-neutral-700 mb-3">
          Cette clause contient une condition abusive. Laquelle ?
        </p>

        <div className="space-y-2 mb-4">
          {phase3Options.map(optionText => {
            const isEntierement = optionText === 'Elle est entièrement valide'
            let btnClass = 'w-full text-left p-3 rounded-lg border text-sm transition-colors '
            if (!phase3Answer) {
              btnClass += 'bg-white border-neutral-200 hover:border-eco hover:bg-eco-light'
            } else if (optionText === trapCondition.texte) {
              btnClass += 'bg-green-50 border-green-400 text-green-800 font-medium'
            } else if (phase3Answer.selected === optionText) {
              btnClass += 'bg-red-50 border-red-300 text-red-700'
            } else {
              btnClass += 'bg-white border-neutral-200 text-neutral-400'
            }
            return (
              <button
                key={optionText}
                onClick={() => !phase3Answer && answerPhase3(optionText)}
                className={btnClass}
              >
                {optionText}
              </button>
            )
          })}
        </div>

        {phase3Answer && (
          <div className="space-y-3">
            {phase3Answer.isCorrect ? (
              <p className="text-sm font-medium text-green-700">
                ✓ Exact ! La condition problématique est bien : {trapCondition.texte}
                {' '}— <span className="font-bold">34 / 34</span>
              </p>
            ) : (
              <div>
                <p className="text-sm font-medium text-red-700 mb-1">
                  ✗ Pas tout à fait. — <span className="font-bold">0 / 34</span>
                </p>
                <p className="text-xs text-neutral-600">
                  La condition problématique était : <span className="font-semibold">{trapCondition.texte}</span>
                  {trapCondition.piegeClassique && ` — ${trapCondition.piegeClassique}`}
                </p>
              </div>
            )}
            <button onClick={finishAfterPhase3} className="btn-primary w-full">Voir les résultats →</button>
          </div>
        )}
      </div>
    )
  }

  return null
}
