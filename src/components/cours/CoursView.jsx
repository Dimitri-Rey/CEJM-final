import { useState, useEffect } from 'react'
import notions from '../../data/content.js'
import NotionReader from './NotionReader.jsx'

const MATIERE_BADGE = {
  eco: 'badge-eco',
  droit: 'badge-droit',
  management: 'badge-management',
}

const MATIERE_LABEL = {
  eco: 'Économie',
  droit: 'Droit',
  management: 'Management',
}

const MATIERE_BORDER = {
  eco: 'border-eco',
  droit: 'border-droit',
  management: 'border-management',
}

const TIER_LABELS = {
  all: 'Tout',
  1: 'Tier 1 ★',
  2: 'Tier 2',
  3: 'Tier 3',
}

function getNotionProgress(notionState) {
  if (!notionState) return 0
  if (notionState.selfExplained) return 100
  if (notionState.read) return 50
  return 0
}

function ProgressLabel({ progress }) {
  if (progress === 100) return <span className="text-xs font-medium text-management">Maîtrisé ✓✓</span>
  if (progress === 50) return <span className="text-xs font-medium text-eco">Lu ✓</span>
  return <span className="text-xs text-neutral-400">À lire</span>
}

function ProgressBar({ progress }) {
  const bgColor =
    progress === 100 ? 'bg-management' : progress === 50 ? 'bg-eco' : 'bg-neutral-200'

  return (
    <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2">
      <div
        className={`h-1.5 rounded-full transition-all duration-500 ${bgColor}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function CoursView({ progress, navigate, initialNotionId }) {
  const [tierFilter, setTierFilter] = useState('all')
  const [selectedNotion, setSelectedNotion] = useState(null)
  const { state, markNotion } = progress

  useEffect(() => {
    if (initialNotionId) {
      const notion = notions.find((n) => n.id === initialNotionId)
      if (notion) setSelectedNotion(notion)
    }
  }, [initialNotionId])

  if (selectedNotion) {
    return (
      <NotionReader
        notion={selectedNotion}
        state={state}
        onMarkRead={() => markNotion(selectedNotion.id, 'read')}
        onMarkSelfExplain={() => markNotion(selectedNotion.id, 'selfExplained')}
        onClose={() => setSelectedNotion(null)}
      />
    )
  }

  const filtered =
    tierFilter === 'all'
      ? notions
      : notions.filter((n) => n.tier === Number(tierFilter))

  // Counts for the filter tabs
  const countAll = notions.length
  const countByTier = (t) => notions.filter((n) => n.tier === t).length

  // Stats summary
  const totalRead = notions.filter((n) => {
    const ns = state.notions?.[n.id] || {}
    return ns.read || ns.selfExplained
  }).length
  const totalMastered = notions.filter((n) => {
    const ns = state.notions?.[n.id] || {}
    return ns.selfExplained
  }).length

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-neutral-900">Cours</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Lis chaque notion, puis explique-la avec tes mots.
        </p>

        {/* Progress summary */}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-eco" />
            <span className="text-xs text-neutral-600">
              {totalRead}/{notions.length} lues
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-management" />
            <span className="text-xs text-neutral-600">
              {totalMastered}/{notions.length} maîtrisées
            </span>
          </div>
        </div>
      </div>

      {/* Tier filter pills */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-5">
        {['all', 1, 2, 3].map((tier) => {
          const isActive = tierFilter === String(tier) || tierFilter === tier
          const count = tier === 'all' ? countAll : countByTier(tier)
          return (
            <button
              key={tier}
              onClick={() => setTierFilter(tier)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                isActive
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {TIER_LABELS[tier]}
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 ${
                  isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Notions grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((notion) => {
          const ns = state.notions?.[notion.id] || {}
          const prog = getNotionProgress(ns)

          return (
            <button
              key={notion.id}
              onClick={() => setSelectedNotion(notion)}
              className={`notion-card text-left border-l-4 ${MATIERE_BORDER[notion.matiere]}`}
            >
              {/* Top badges */}
              <div className="flex items-center gap-2 mb-2">
                <span className={MATIERE_BADGE[notion.matiere]}>
                  {MATIERE_LABEL[notion.matiere]}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-500">
                  T{notion.tier}
                  {notion.tier === 1 && ' ★'}
                </span>
                {prog === 100 && (
                  <span className="ml-auto text-management text-sm">✓✓</span>
                )}
                {prog === 50 && (
                  <span className="ml-auto text-eco text-sm">✓</span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-neutral-900 text-base leading-snug">
                {notion.titre}
              </h3>

              {/* Sous-titre */}
              {notion.sousTitre && (
                <p className="text-sm text-neutral-500 mt-0.5 leading-snug">
                  {notion.sousTitre}
                </p>
              )}

              {/* Progress */}
              <div className="mt-3 flex items-center justify-between">
                <ProgressLabel progress={prog} />
                <span className="text-xs text-neutral-300">{notion.cards?.length || 0} cartes</span>
              </div>
              <ProgressBar progress={prog} />
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-neutral-400">
          <p className="text-lg">Aucune notion pour ce filtre.</p>
        </div>
      )}
    </div>
  )
}
