import { SM2_GRADES } from '../../utils/sm2.js'

export default function SessionSummary({ results, onDone }) {
  const total = results.length

  const counts = {
    again: results.filter(r => r.grade === SM2_GRADES.AGAIN).length,
    hard: results.filter(r => r.grade === SM2_GRADES.HARD).length,
    good: results.filter(r => r.grade === SM2_GRADES.GOOD).length,
    easy: results.filter(r => r.grade === SM2_GRADES.EASY).length,
  }

  const goodPct = total > 0 ? ((counts.good + counts.easy) / total) * 100 : 0

  let message
  let messageColor
  if (goodPct < 50) {
    message = 'Continue, ça vient !'
    messageColor = 'text-orange-600'
  } else if (goodPct < 80) {
    message = 'Bien joué !'
    messageColor = 'text-blue-600'
  } else {
    message = 'Excellent !'
    messageColor = 'text-green-600'
  }

  return (
    <div className="card p-6 max-w-lg mx-auto">
      <h2 className="font-display text-2xl font-bold text-neutral-900 mb-1">Session terminée</h2>
      <p className={`text-lg font-semibold mb-6 ${messageColor}`}>{message}</p>

      <div className="mb-6">
        <p className="text-sm text-neutral-500 mb-3">
          {total} carte{total !== 1 ? 's' : ''} révisée{total !== 1 ? 's' : ''}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-red-50">
            <div className="flex items-center gap-2">
              <span className="text-base">✗</span>
              <span className="text-sm font-medium text-red-700">À revoir</span>
            </div>
            <span className="text-sm font-bold text-red-700">{counts.again}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-orange-50">
            <div className="flex items-center gap-2">
              <span className="text-base">△</span>
              <span className="text-sm font-medium text-orange-700">Difficile</span>
            </div>
            <span className="text-sm font-bold text-orange-700">{counts.hard}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-blue-50">
            <div className="flex items-center gap-2">
              <span className="text-base">○</span>
              <span className="text-sm font-medium text-blue-700">Bien</span>
            </div>
            <span className="text-sm font-bold text-blue-700">{counts.good}</span>
          </div>

          <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-green-50">
            <div className="flex items-center gap-2">
              <span className="text-base">★</span>
              <span className="text-sm font-medium text-green-700">Facile</span>
            </div>
            <span className="text-sm font-bold text-green-700">{counts.easy}</span>
          </div>
        </div>
      </div>

      {total > 0 && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-neutral-400 mb-1">
            <span>Maîtrise</span>
            <span>{Math.round(goodPct)}%</span>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${goodPct}%`,
                backgroundColor: goodPct >= 80 ? '#16a34a' : goodPct >= 50 ? '#2563eb' : '#ea580c',
              }}
            />
          </div>
        </div>
      )}

      <button onClick={onDone} className="btn-primary w-full">
        Retour
      </button>
    </div>
  )
}
