import { useEffect, useMemo } from 'react'

const STEP_KEYS = ['faits', 'problemeDeDroit', 'principe', 'application', 'conclusion']
const STEP_LABELS = {
  faits: '01 · Les faits',
  problemeDeDroit: '02 · Problème de droit',
  principe: '03 · Principe / règle',
  application: '04 · Application aux faits',
  conclusion: '05 · Conclusion',
}

function getKeywords(text) {
  if (!text) return []
  return text
    .split(/\s+/)
    .map(w => w.replace(/[^a-zA-ZÀ-ÿ]/g, '').toLowerCase())
    .filter(w => w.length > 4)
}

function scoreStep(userText, corrigeText) {
  if (!userText || userText.trim().length < 20) return 0
  const keywords = getKeywords(corrigeText)
  if (keywords.length === 0) return 20
  const userLower = userText.toLowerCase()
  const matched = keywords.filter(kw => userLower.includes(kw))
  const ratio = matched.length / keywords.length
  if (ratio >= 0.25) return 20
  if (ratio >= 0.1) return 10
  return 0
}

function getMatchedAndMissed(userText, corrigeText) {
  const keywords = getKeywords(corrigeText)
  const unique = [...new Set(keywords)]
  const userLower = (userText || '').toLowerCase()
  const matched = unique.filter(kw => userLower.includes(kw))
  const missed = unique.filter(kw => !userLower.includes(kw)).slice(0, 8)
  return { matched: matched.slice(0, 8), missed }
}

export default function CasCorrection({ cas, userAnswers, onScore, onBack }) {
  const stepScores = useMemo(() => {
    return STEP_KEYS.map(key => ({
      key,
      points: scoreStep(userAnswers[key], cas.corrige[key]),
    }))
  }, [cas, userAnswers])

  const totalScore = useMemo(() => stepScores.reduce((s, st) => s + st.points, 0), [stepScores])
  const stepsCompleted = useMemo(() => stepScores.filter(s => s.points > 0).length, [stepScores])

  useEffect(() => {
    onScore(totalScore, stepsCompleted)
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-neutral-900">Correction</h2>
          <p className="text-sm text-neutral-500">{cas.titre}</p>
        </div>
        <div className="ml-auto text-right">
          <p
            className="text-3xl font-bold"
            style={{
              color: totalScore >= 70 ? '#2D5A3D' : totalScore >= 40 ? '#C4622D' : '#dc2626',
            }}
          >
            {totalScore}
          </p>
          <p className="text-xs text-neutral-400">/ 100</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {STEP_KEYS.map(key => {
          const stepScore = stepScores.find(s => s.key === key)
          const points = stepScore?.points ?? 0
          const corrigeText = cas.corrige[key] || ''
          const userText = userAnswers[key] || ''
          const { matched, missed } = getMatchedAndMissed(userText, corrigeText)

          let badgeClass = 'bg-green-100 text-green-700'
          if (points === 0) badgeClass = 'bg-red-100 text-red-700'
          else if (points < 20) badgeClass = 'bg-orange-100 text-orange-700'

          return (
            <div key={key} className="card p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm text-neutral-900">{STEP_LABELS[key]}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeClass}`}>
                  {points} / 20
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-1">Ta réponse</p>
                  <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 rounded p-2 min-h-[60px]">
                    {userText || <span className="italic text-neutral-300">Non renseigné</span>}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-1">Corrigé</p>
                  <p className="text-xs text-neutral-700 leading-relaxed bg-cream rounded p-2 min-h-[60px]">
                    {corrigeText}
                  </p>
                </div>
              </div>

              {(matched.length > 0 || missed.length > 0) && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {matched.map(kw => (
                    <span key={kw} className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-700 font-mono">
                      ✓ {kw}
                    </span>
                  ))}
                  {missed.map(kw => (
                    <span key={kw} className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-500 font-mono">
                      ✗ {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {cas.pointsCles && cas.pointsCles.length > 0 && (
        <div className="card p-4 mb-6 border-l-4 border-eco">
          <h3 className="font-bold text-sm text-neutral-900 mb-3">Points clés à ne pas oublier</h3>
          <ul className="space-y-1.5">
            {cas.pointsCles.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="flex-shrink-0 text-eco font-bold mt-0.5">→</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onBack} className="btn-secondary flex-1">
          Retenter
        </button>
        <button onClick={onBack} className="btn-primary flex-1">
          Retour aux cas
        </button>
      </div>
    </div>
  )
}
