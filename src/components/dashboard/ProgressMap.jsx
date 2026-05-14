const STAGES = [
  {
    id: 1,
    label: 'Tier 1',
    sublabel: 'Méthodo, PESTEL, Stratégies',
    icon: '①',
    unlockAt: 0,
  },
  {
    id: 2,
    label: 'Tier 2',
    sublabel: 'Clauses, Financement, RH',
    icon: '②',
    unlockAt: 60,
  },
  {
    id: 3,
    label: 'Tier 3',
    sublabel: 'Droit avancé, PI, RGPD',
    icon: '③',
    unlockAt: 60,
  },
  {
    id: 'exam',
    label: 'Examen blanc',
    sublabel: 'Simulation 4h chronométrée',
    icon: '✦',
    unlockAt: 70,
  },
]

function getTierScore(tiers, id) {
  if (!tiers || !tiers[id]) return 0
  return tiers[id].score ?? 0
}

function isTierUnlocked(tiers, stage, masterScore) {
  if (stage.id === 1) return true
  if (stage.id === 'exam') {
    const t1 = getTierScore(tiers, 1)
    const t2 = getTierScore(tiers, 2)
    const t3 = getTierScore(tiers, 3)
    return t1 >= 70 && t2 >= 70 && t3 >= 70
  }
  if (!tiers) return false
  return tiers[stage.id]?.unlocked ?? false
}

export default function ProgressMap({ tiers, masterScore, navigate }) {
  return (
    <section className="mt-6">
      <h2 className="font-display text-lg font-bold text-neutral-900 mb-4">Carte de progression</h2>

      <div className="relative">
        {/* Vertical connector line */}
        <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-neutral-200 z-0" />

        <div className="space-y-4 relative z-10">
          {STAGES.map((stage, index) => {
            const unlocked = isTierUnlocked(tiers, stage, masterScore)
            const score = typeof stage.id === 'number' ? getTierScore(tiers, stage.id) : null

            let prevScore = 0
            if (stage.id === 2) prevScore = getTierScore(tiers, 1)
            else if (stage.id === 3) prevScore = getTierScore(tiers, 2)
            else if (stage.id === 'exam') {
              prevScore = Math.min(
                getTierScore(tiers, 1),
                getTierScore(tiers, 2),
                getTierScore(tiers, 3)
              )
            }

            const circleClass = unlocked
              ? stage.id === 'exam'
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-eco text-white shadow-md'
              : 'bg-neutral-200 text-neutral-400'

            return (
              <div key={stage.id} className="flex items-start gap-4">
                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-bold transition-all ${circleClass}`}
                >
                  {unlocked ? stage.icon : '🔒'}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 card p-4 transition-all ${
                    unlocked ? 'cursor-pointer hover:shadow-md' : 'opacity-60'
                  }`}
                  onClick={() => {
                    if (!unlocked) return
                    if (stage.id === 'exam') return // TODO: exam blanc
                    navigate('quizz', { tier: stage.id })
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-sm text-neutral-900">{stage.label}</p>
                      <p className="text-xs text-neutral-500">{stage.sublabel}</p>
                    </div>

                    {unlocked && score !== null && (
                      <span
                        className={`text-sm font-bold flex-shrink-0 ${
                          score >= 70 ? 'text-green-600' : score >= 40 ? 'text-orange-500' : 'text-red-500'
                        }`}
                      >
                        {score}%
                      </span>
                    )}

                    {!unlocked && (
                      <span className="text-xs text-neutral-400 flex-shrink-0">
                        Dès {stage.unlockAt}%
                      </span>
                    )}
                  </div>

                  {unlocked && score !== null && (
                    <div className="mt-3">
                      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${score}%`,
                            backgroundColor:
                              score >= 70 ? '#2D5A3D' : score >= 40 ? '#C4622D' : '#dc2626',
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-neutral-400">0%</span>
                        <span className="text-[10px] text-neutral-400">100%</span>
                      </div>
                    </div>
                  )}

                  {unlocked && stage.id !== 'exam' && (
                    <p className="text-xs text-eco font-medium mt-2">
                      Réviser ce tier →
                    </p>
                  )}

                  {unlocked && stage.id === 'exam' && (
                    <p className="text-xs text-amber-600 font-medium mt-2">
                      Débloqué — bientôt disponible
                    </p>
                  )}

                  {!unlocked && stage.id !== 'exam' && (
                    <div className="mt-2">
                      <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-300 rounded-full transition-all"
                          style={{ width: `${Math.min(100, (prevScore / stage.unlockAt) * 100)}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-neutral-400 mt-1">
                        {prevScore} / {stage.unlockAt}% requis
                      </p>
                    </div>
                  )}

                  {!unlocked && stage.id === 'exam' && (
                    <p className="text-xs text-neutral-400 mt-2">
                      Requiert 70% sur les 3 tiers
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
