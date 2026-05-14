import useDueCards from '../../hooks/useDueCards.js'
import notions from '../../data/content.js'
import casPratiques from '../../data/casPratiques.js'
import { getWeakPoints } from '../../utils/scoring.js'
import ProgressMap from './ProgressMap.jsx'
import WeakPoints from './WeakPoints.jsx'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 5) return 'Bonne nuit'
  if (hour < 12) return 'Bonjour'
  if (hour < 18) return 'Bon après-midi'
  return 'Bonsoir'
}

function getMotivation(score) {
  if (score === 0) return 'Lance ta première session pour démarrer ta progression.'
  if (score < 30) return 'Bon début — continue, chaque carte compte.'
  if (score < 60) return 'Tu avances bien. Garde le rythme quotidien.'
  if (score < 80) return 'Excellent niveau ! Affine les points difficiles.'
  return "Niveau expert. Tu es prêt pour l'examen !"
}

export default function DashboardView({ progress, navigate }) {
  const { state, masterScore, tiers } = progress
  const dueCards = useDueCards(state)
  const weakPoints = getWeakPoints(state, notions)

  const totalNotionsRead = notions.filter(n => state.notions?.[n.id]?.read).length
  const totalCasAttempted = casPratiques.filter(c => state.cas?.[c.id]?.attempts > 0).length
  const streak = state.streak?.current ?? 0

  const tier1Score = tiers?.[1]?.score ?? 0
  const tier2Score = tiers?.[2]?.score ?? 0
  const tier3Score = tiers?.[3]?.score ?? 0

  const score = masterScore ?? 0
  let scoreColor = '#dc2626'
  if (score >= 70) scoreColor = '#2D5A3D'
  else if (score >= 40) scoreColor = '#C4622D'

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
          {getGreeting()} 👋
        </h1>
        <p className="text-sm text-neutral-500">{getMotivation(score)}</p>
      </div>

      {/* Score section */}
      <div className="card p-4 mb-6 text-center">
        <div className="flex flex-col items-center py-4">
          <p className="font-display text-6xl font-bold leading-none mb-1" style={{ color: scoreColor }}>
            {score}
          </p>
          <p className="text-sm font-medium text-neutral-500 mb-1">Préparation au 10</p>
          <p className="text-xs text-neutral-400">Score global pondéré (SM-2 + cas pratiques)</p>
        </div>

        {/* Tier sub-scores */}
        <div className="grid grid-cols-3 gap-2 border-t border-neutral-100 pt-4">
          <div className="text-center">
            <p className="text-lg font-bold text-eco">{tier1Score}%</p>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Tier 1</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-droit">{tier2Score}%</p>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Tier 2</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-management">{tier3Score}%</p>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Tier 3</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="card p-3 text-center">
          <p className="font-bold text-xl text-neutral-900">{dueCards.length}</p>
          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">cartes à réviser aujourd'hui</p>
        </div>
        <div className="card p-3 text-center">
          <p className="font-bold text-xl text-neutral-900">
            {totalNotionsRead}
            <span className="text-sm font-normal text-neutral-400">/{notions.length}</span>
          </p>
          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">notions lues</p>
        </div>
        <div className="card p-3 text-center">
          <p className="font-bold text-xl text-neutral-900">
            {totalCasAttempted}
            <span className="text-sm font-normal text-neutral-400">/{casPratiques.length}</span>
          </p>
          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">cas tentés</p>
        </div>
      </div>

      {/* Streak */}
      {streak > 1 && (
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold">
            🔥 {streak} jour{streak !== 1 ? 's' : ''} consécutif{streak !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Due cards CTA */}
      {dueCards.length > 0 && (
        <div className="card p-4 mb-6 bg-eco bg-opacity-5 border border-eco border-opacity-30">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-neutral-900 text-sm mb-0.5">
                {dueCards.length} carte{dueCards.length !== 1 ? 's' : ''} à réviser aujourd'hui
              </p>
              <p className="text-xs text-neutral-500">Ne laisse pas la session s'accumuler !</p>
            </div>
            <button
              onClick={() => navigate('quizz')}
              className="btn-primary text-sm flex-shrink-0 ml-3"
            >
              Réviser →
            </button>
          </div>
        </div>
      )}

      {/* Progress map */}
      <ProgressMap tiers={tiers} masterScore={score} navigate={navigate} />

      {/* Weak points */}
      <WeakPoints weakPoints={weakPoints} navigate={navigate} />
    </div>
  )
}
