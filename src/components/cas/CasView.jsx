import { useState } from 'react'
import casPratiques from '../../data/casPratiques.js'
import CasPlayer from './CasPlayer.jsx'

const TIER_LABELS = {
  1: 'Tier 1',
  2: 'Tier 2',
  3: 'Tier 3',
}

const TIER_BADGE = {
  1: 'bg-eco-light text-eco',
  2: 'bg-droit-light text-droit',
  3: 'bg-management-light text-management',
}

const OUTIL_LABEL = {
  'methodo-juridique': 'Méthodologie juridique',
  'pestel': 'PESTEL',
  'strategie': 'Stratégie',
  'financier': 'Financier',
}

export default function CasView({ progress, navigate }) {
  const { state } = progress
  const [selected, setSelected] = useState(null)
  const [tierFilter, setTierFilter] = useState(null)

  if (selected) {
    return (
      <CasPlayer
        cas={selected}
        progress={progress}
        onBack={() => setSelected(null)}
      />
    )
  }

  const filtered = tierFilter
    ? casPratiques.filter(c => c.tier === tierFilter)
    : casPratiques

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
        Cas pratiques
      </h1>
      <p className="text-sm text-neutral-500 mb-6">
        Entraîne-toi sur des sujets réels BTS SIO en 5 étapes guidées.
      </p>

      {/* Tier filter */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTierFilter(null)}
          className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
            tierFilter === null
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
          }`}
        >
          Tous
        </button>
        {[1, 2, 3].map(t => (
          <button
            key={t}
            onClick={() => setTierFilter(t)}
            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
              tierFilter === t
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
            }`}
          >
            Tier {t}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map(cas => {
          const casState = state.cas?.[cas.id]
          const bestScore = casState?.bestScore ?? null
          const attempts = casState?.attempts ?? 0

          let scoreColor = 'text-green-600'
          if (bestScore !== null) {
            if (bestScore < 40) scoreColor = 'text-red-600'
            else if (bestScore < 70) scoreColor = 'text-orange-600'
          }

          const tierBadge = TIER_BADGE[cas.tier] || 'bg-neutral-100 text-neutral-600'
          const outilLabel = OUTIL_LABEL[cas.outil] || cas.outil

          return (
            <div
              key={cas.id}
              className="card p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelected(cas)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                    {cas.entreprise}
                  </span>
                  <span className="text-xs text-neutral-400">{cas.annee}</span>
                </div>
                {bestScore !== null && (
                  <span className={`text-sm font-bold flex-shrink-0 ${scoreColor}`}>
                    {bestScore} / 100
                  </span>
                )}
              </div>

              <h2 className="font-display font-bold text-neutral-900 mb-3 leading-snug">
                {cas.titre}
              </h2>

              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tierBadge}`}>
                  {TIER_LABELS[cas.tier]}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">
                  {outilLabel}
                </span>
                {attempts > 0 && (
                  <span className="text-xs text-neutral-400 ml-auto">
                    {attempts} tentative{attempts !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <p className="text-sm text-neutral-400 text-center py-8">
            Aucun cas pratique pour ce tier.
          </p>
        )}
      </div>
    </div>
  )
}
