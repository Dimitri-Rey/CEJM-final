import { useState } from 'react'
import conditions from '../../data/conditions.js'
import ConditionDrill from './ConditionDrill.jsx'

export default function ConditionsView({ progress }) {
  const { state, recordConditionAttempt } = progress
  const [selected, setSelected] = useState(null)

  function handleComplete(score) {
    recordConditionAttempt(selected.id, score)
  }

  function handleClose() {
    setSelected(null)
  }

  if (selected) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <button
          onClick={handleClose}
          className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors mb-4 inline-block"
        >
          ← Retour aux conditions
        </button>
        <ConditionDrill
          conditionSet={selected}
          state={state}
          onComplete={handleComplete}
          onClose={handleClose}
        />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
        Conditions juridiques
      </h1>
      <p className="text-sm text-neutral-500 mb-8">
        Apprends par cœur les listes cumulatives. Une seule condition manquante à l'examen = zéro.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conditions.map(conditionSet => {
          const condState = state.conditions?.[conditionSet.id]
          const bestScore = condState?.bestScore ?? null
          const attempts = condState?.attempts ?? 0

          let scoreColor = 'text-green-600'
          if (bestScore !== null) {
            if (bestScore < 40) scoreColor = 'text-red-600'
            else if (bestScore < 70) scoreColor = 'text-orange-600'
          }

          return (
            <div key={conditionSet.id} className="card p-5 flex flex-col justify-between">
              <div className="mb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="font-bold text-neutral-900 text-sm leading-snug">{conditionSet.titre}</h2>
                  {bestScore !== null && (
                    <span className={`flex-shrink-0 text-sm font-bold ${scoreColor}`}>
                      {bestScore}%
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-500 mb-2">
                  {conditionSet.conditions.length} condition{conditionSet.conditions.length !== 1 ? 's' : ''} cumulatives
                </p>

                {attempts > 0 && (
                  <p className="text-xs text-neutral-400 mb-2">
                    {attempts} tentative{attempts !== 1 ? 's' : ''}
                  </p>
                )}

                <p className="text-xs text-red-600 leading-snug">{conditionSet.sanction}</p>
              </div>

              <button
                onClick={() => setSelected(conditionSet)}
                className="btn-primary w-full text-sm"
              >
                S'entraîner
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
