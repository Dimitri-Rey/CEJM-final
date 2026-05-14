import notions from '../../data/content.js'

export default function WeakPoints({ weakPoints, navigate }) {
  if (!weakPoints || weakPoints.length === 0) return null

  return (
    <section className="mt-6">
      <h2 className="font-display text-lg font-bold text-neutral-900 mb-3">À retravailler en priorité</h2>
      <div className="space-y-2">
        {weakPoints.map(({ notionId, maturity }) => {
          const notion = notions.find(n => n.id === notionId)
          if (!notion) return null
          const pct = Math.round(maturity * 100)
          return (
            <div key={notionId} className="card p-3 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`badge-${notion.matiere} text-[10px]`}>{notion.matiere}</span>
                  <span className="text-xs text-neutral-400">Tier {notion.tier}</span>
                </div>
                <p className="font-medium text-sm text-neutral-900 truncate">{notion.titre}</p>
                <div className="mt-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <button
                onClick={() => navigate('cours', { notionId })}
                className="btn-secondary text-xs py-1.5 px-3 flex-shrink-0"
              >
                Réviser
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
