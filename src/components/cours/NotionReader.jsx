import { useState } from 'react'

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

const MATIERE_BULLET = {
  eco: 'bg-eco',
  droit: 'bg-droit',
  management: 'bg-management',
}

const MATIERE_BORDER = {
  eco: 'border-l-eco',
  droit: 'border-l-droit',
  management: 'border-l-management',
}

export default function NotionReader({ notion, state, onMarkRead, onMarkSelfExplain, onClose }) {
  const [selfExplainText, setSelfExplainText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const ns = state?.notions?.[notion.id] || {}
  const isRead = ns.read || ns.selfExplained
  const isMastered = ns.selfExplained

  const handleMarkRead = () => {
    onMarkRead()
  }

  const handleSubmitExplanation = () => {
    if (selfExplainText.trim().length < 10) return
    onMarkSelfExplain()
    setSubmitted(true)
  }

  return (
    <article className="pb-16">
      {/* Back button */}
      <button
        onClick={onClose}
        className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 mb-5 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Retour aux notions
      </button>

      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={MATIERE_BADGE[notion.matiere]}>{MATIERE_LABEL[notion.matiere]}</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-500">
            Tier {notion.tier}{notion.tier === 1 && ' ★'}
          </span>
          {isMastered && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-management-light text-management-dark">
              Maîtrisé ✓✓
            </span>
          )}
          {isRead && !isMastered && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-eco-light text-eco-dark">
              Lu ✓
            </span>
          )}
        </div>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 leading-tight">
          {notion.titre}
        </h1>
        {notion.sousTitre && (
          <p className="text-neutral-500 mt-2 text-base leading-relaxed">{notion.sousTitre}</p>
        )}
      </header>

      {/* Le cours */}
      <section className="card p-5 md:p-7 mb-5">
        <h2 className="font-display font-bold text-lg text-neutral-800 mb-4">Le cours</h2>
        <p className="text-neutral-700 leading-relaxed text-[15px]" style={{ lineHeight: '1.75' }}>
          {notion.cours}
        </p>
      </section>

      {/* Points clés */}
      {notion.pointsCles && notion.pointsCles.length > 0 && (
        <section className="card p-5 md:p-7 mb-5">
          <h2 className="font-display font-bold text-lg text-neutral-800 mb-4">Points clés</h2>
          <ul className="flex flex-col gap-3">
            {notion.pointsCles.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${MATIERE_BULLET[notion.matiere]}`}
                />
                <span className="text-neutral-700 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Auteurs à citer */}
      {notion.auteurs && notion.auteurs.length > 0 && (
        <section className="mb-5">
          <h2 className="font-display font-bold text-lg text-neutral-800 mb-3">Auteurs à citer</h2>
          <div className="flex flex-col gap-3">
            {notion.auteurs.map((auteur, i) => (
              <div
                key={i}
                className={`card p-4 border-l-4 ${MATIERE_BORDER[notion.matiere]}`}
              >
                <p className="font-semibold text-neutral-900 text-sm">{auteur.nom}</p>
                {auteur.theorie && (
                  <p className="text-neutral-500 text-sm mt-0.5">{auteur.theorie}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Vu dans les sujets */}
      {notion.sujetsRef && notion.sujetsRef.length > 0 && (
        <section className="mb-6">
          <h2 className="font-display font-bold text-lg text-neutral-800 mb-3">Vu dans les sujets</h2>
          <div className="flex flex-wrap gap-2">
            {notion.sujetsRef.map((sujet, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200"
              >
                {sujet}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* --- MASTERED STATE --- */}
      {isMastered && (
        <div className="card p-5 md:p-7 border-management bg-management-light">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✓</span>
            <h2 className="font-display font-bold text-lg text-management-dark">
              Notion maîtrisée
            </h2>
          </div>
          <p className="text-management-dark text-sm mb-4 opacity-80">
            Tu as lu et expliqué cette notion. Voici les points essentiels à garder en tête :
          </p>
          <ul className="flex flex-col gap-2">
            {notion.pointsCles.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-management" />
                <span className="text-management-dark text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- MARK AS READ --- */}
      {!isRead && (
        <div className="card p-5 md:p-6 flex flex-col items-start gap-3">
          <p className="text-neutral-600 text-sm">
            Tu as fini de lire cette notion ? Marque-la comme lue pour continuer.
          </p>
          <button onClick={handleMarkRead} className="btn-primary gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            J&apos;ai lu cette notion ✓
          </button>
        </div>
      )}

      {/* --- SELF EXPLAIN (read but not mastered) --- */}
      {isRead && !isMastered && !submitted && (
        <div className="card p-5 md:p-7 mt-5">
          <h2 className="font-display font-bold text-lg text-neutral-800 mb-1">
            Maintenant, explique-le avec tes mots
          </h2>
          <p className="text-neutral-500 text-sm mb-4">
            Formule cette notion comme si tu l&apos;enseignais à quelqu&apos;un qui ne la connaît pas.
          </p>
          <textarea
            value={selfExplainText}
            onChange={(e) => setSelfExplainText(e.target.value)}
            placeholder="Explique cette notion comme si tu l'enseignais à quelqu'un qui ne la connaît pas..."
            rows={5}
            className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-eco focus:border-transparent resize-none leading-relaxed transition-shadow"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3">
            <button
              onClick={handleSubmitExplanation}
              disabled={selfExplainText.trim().length < 10}
              className="btn-primary gap-2"
            >
              Valider mon explication
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Tu n&apos;as pas besoin de tout écrire — l&apos;important c&apos;est de le formuler dans ta propre tête.
            </p>
          </div>
        </div>
      )}

      {/* Submitted but UI not yet reloaded (optimistic) */}
      {submitted && !isMastered && (
        <div className="card p-5 bg-management-light border-management mt-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">✓</span>
            <h3 className="font-display font-bold text-management-dark">
              Notion maîtrisée
            </h3>
          </div>
          <p className="text-management-dark text-sm opacity-80">
            Excellent travail ! Cette notion est maintenant marquée comme maîtrisée.
          </p>
        </div>
      )}
    </article>
  )
}
