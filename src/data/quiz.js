// quiz.js — QCM dataset for CEJM BTS SIO exam prep app
// Format: { id, tier, matiere, notionId, question, options[4], correct (0-3), explanation }
// notionId references ids defined in content.js
// 55 questions across Tier 1 (méthodologie, PESTEL, stratégies),
//   Tier 2 (motivation RH, droit contrats) and Tier 3 (droit avancé, PI & numérique)

const quiz = [
  // ─────────────────────────────────────────────────────────
  // TIER 1 — MÉTHODOLOGIE JURIDIQUE (8 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-001',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question: "À l'examen CEJM, quelle est la 3ème étape de la méthodologie juridique ?",
    options: [
      "L'application aux faits ('En l'espèce...')",
      "La conclusion avec la sanction",
      "Le principe / la règle juridique applicable",
      "Le problème de droit formulé en question",
    ],
    correct: 2,
    explanation:
      "La 3ème étape est le Principe / règle : on énonce la règle applicable, les conditions cumulatives et les exceptions. C'est la partie 'cours'. L'application aux faits est la 4ème étape, la conclusion la 5ème, et le problème de droit la 2ème — pas la 3ème.",
  },
  {
    id: 'qcm-002',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question:
      "Gestion+ rompt les pourparlers avec Agricoopia juste avant la signature. Dans une réponse juridique, que couvrent les D&I accordés à Agricoopia ?",
    options: [
      "Le bénéfice que le contrat aurait généré sur 3 ans",
      "Le gain manqué + les frais engagés",
      "Les frais engagés uniquement (déplacements, investissements matériels)",
      "La totalité du préjudice commercial subi",
    ],
    correct: 2,
    explanation:
      "La responsabilité délictuelle (art. 1240 CC) pour rupture abusive des pourparlers couvre UNIQUEMENT les frais engagés pour négocier. Elle ne couvre jamais la perte de chance ni le bénéfice que le contrat aurait généré — c'est le piège classique. Options A et D sont séduisantes mais trop larges ; option B inclut le 'gain manqué' qui n'est pas indemnisable ici.",
  },
  {
    id: 'qcm-003',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question: "La nullité relative d'un contrat peut être invoquée par :",
    options: [
      "Le juge d'office, sans demande des parties",
      "N'importe quelle personne ayant un intérêt",
      "Toute personne (ordre public)",
      "Uniquement la personne dont les intérêts ont été lésés",
    ],
    correct: 3,
    explanation:
      "La nullité RELATIVE protège un intérêt privé — seule la personne lésée peut la demander (ex : vice du consentement). La nullité ABSOLUE (option C) peut être invoquée par toute personne car elle protège l'ordre public (ex : objet illicite). Le juge ne peut pas la prononcer d'office en matière contractuelle.",
  },
  {
    id: 'qcm-004',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question: "Comment doit commencer l'étape 'Application aux faits' dans un raisonnement juridique ?",
    options: [
      "'Or, en droit...'",
      "'En l'espèce...'",
      "'Ainsi, il convient de...'",
      "'Il résulte de ce qui précède que...'",
    ],
    correct: 1,
    explanation:
      "'En l'espèce...' est la formule clé pour passer du principe aux faits du cas. Elle signale au correcteur que vous confrontez chaque condition juridique aux éléments concrets de l'annexe. 'Or, en droit...' introduit le principe (étape 3). 'Il résulte de ce qui précède' appartient à la conclusion (étape 5).",
  },
  {
    id: 'qcm-005',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question: "Pourquoi ne faut-il JAMAIS sauter l'étape 'Principe' même si la règle paraît évidente ?",
    options: [
      "Pour faire plus long et montrer son travail",
      "Parce que le correcteur coche chaque étape sur une grille de notation",
      "C'est facultatif pour les questions simples",
      "Pour être exhaustif sans raison particulière",
    ],
    correct: 1,
    explanation:
      "Le correcteur CEJM dispose d'une grille et coche chaque étape indépendamment. La structure seule peut valoir la moitié des points, même avec une conclusion incorrecte. Sauter l'étape Principe = perdre des points assurément. Les options A et D sont vraies en apparence mais ne reflètent pas la raison réelle liée à la grille de notation.",
  },
  {
    id: 'qcm-006',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question:
      "OVHcloud stocke les backups dans le même datacenter que le serveur. Quel type de responsabilité civile peut être engagée ?",
    options: [
      "Responsabilité pénale pour mise en danger d'autrui",
      "Responsabilité civile délictuelle (hors contrat)",
      "Responsabilité civile contractuelle (manquement au contrat)",
      "Responsabilité administrative de l'hébergeur",
    ],
    correct: 2,
    explanation:
      "Il existe un contrat d'hébergement et de sauvegarde entre OVH et Bati Courtage. Stocker les backups dans le même datacenter constitue une mauvaise exécution de ce contrat (qui prévoyait l'isolation physique) → responsabilité CONTRACTUELLE. La responsabilité délictuelle (option B) s'applique en dehors de tout contrat — ce n'est pas le cas ici.",
  },
  {
    id: 'qcm-007',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question: "Quelle est la différence entre responsabilité civile et pénale ?",
    options: [
      "La civile punit, la pénale répare",
      "La civile répare le préjudice subi par la victime ; la pénale punit l'auteur de l'infraction",
      "Elles ont les mêmes effets mais des procédures différentes",
      "La pénale est pour les entreprises, la civile pour les particuliers",
    ],
    correct: 1,
    explanation:
      "La responsabilité civile vise à RÉPARER le préjudice de la victime (par D&I). La responsabilité pénale vise à PUNIR l'auteur d'une infraction (amende, emprisonnement). Option A inverse les deux. Un même fait peut engager les deux simultanément — ex : contrefaçon = délit pénal + réparation civile.",
  },
  {
    id: 'qcm-008',
    tier: 1,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question:
      "Dans un raisonnement juridique sur la clause de non-concurrence, que doit-on vérifier en priorité ?",
    options: [
      "Si le montant de la contrepartie est suffisant",
      "Si toutes les conditions sont présentes — une seule absente suffit à invalider la clause",
      "Si le salarié a bien signé le contrat",
      "Si la clause a été rédigée par un avocat",
    ],
    correct: 1,
    explanation:
      "Les conditions de validité de la clause de non-concurrence sont CUMULATIVES. Il faut les vérifier TOUTES — dès qu'une seule est absente ou excessive, la clause est nulle dans son intégralité. Le piège à l'examen est de conclure 'valide' après avoir vérifié seulement la contrepartie (option A) sans examiner durée, zone et activité.",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 1 — PESTEL & ENVIRONNEMENT (7 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-009',
    tier: 1,
    matiere: 'eco',
    notionId: 'diagnostic-pestel',
    question: "Dans PESTEL, comment doit être traité chaque facteur identifié ?",
    options: [
      "Comme une force ou une faiblesse de l'entreprise",
      "Comme une opportunité ou une menace pour l'entreprise",
      "Comme un risque ou un avantage concurrentiel",
      "Comme un facteur interne ou externe",
    ],
    correct: 1,
    explanation:
      "PESTEL analyse le MACRO-environnement — les facteurs extérieurs sur lesquels l'entreprise n'a aucune influence. Chaque facteur doit être qualifié d'OPPORTUNITÉ (favorable) ou de MENACE (risque). Forces/faiblesses (option A) concernent le diagnostic INTERNE de l'entreprise — c'est la partie 'S' et 'W' du SWOT.",
  },
  {
    id: 'qcm-010',
    tier: 1,
    matiere: 'eco',
    notionId: 'diagnostic-pestel',
    question:
      "La facturation électronique obligatoire B2B prévue pour 2026 est un facteur PESTEL de quelle dimension pour DIGIM ?",
    options: [
      "Économique — impact sur les coûts",
      "Technologique — innovation numérique",
      "Légal — obligation réglementaire et opportunité de marché",
      "Politique — décision gouvernementale",
    ],
    correct: 2,
    explanation:
      "C'est un facteur LÉGAL : la loi de finances rectificative 2022 crée une obligation légale de facturation électronique. C'est aussi une OPPORTUNITÉ majeure pour DIGIM/BILLFACT. Même si c'est une décision politique à l'origine, le facteur PESTEL pertinent est Légal (réglementation directement applicable aux entreprises).",
  },
  {
    id: 'qcm-011',
    tier: 1,
    matiere: 'eco',
    notionId: 'diagnostic-pestel',
    question: "Quelle est la différence entre l'analyse PESTEL et les 5 forces de Porter ?",
    options: [
      "PESTEL = micro-environnement ; Porter = macro-environnement",
      "PESTEL = macro-environnement (facteurs globaux) ; Porter = micro-environnement (secteur concurrentiel)",
      "PESTEL analyse la concurrence ; Porter analyse l'État et la société",
      "Les deux outils analysent le même environnement",
    ],
    correct: 1,
    explanation:
      "PESTEL = niveau MACRO (Politique, Économique, Socioculturel, Technologique, Environnemental, Légal) — facteurs globaux non contrôlables. Porter = niveau MICRO (5 forces du secteur) — concurrents, clients, fournisseurs, entrants potentiels, produits de substitution. Option A inverse les deux niveaux — erreur classique à l'examen.",
  },
  {
    id: 'qcm-012',
    tier: 1,
    matiere: 'eco',
    notionId: 'parties-prenantes',
    question:
      "Selon Freeman, OVHcloud est confrontée à un incendie qui détruit les données d'un client. Qui est une PP de 1er rang ici ?",
    options: [
      "Le gouvernement français",
      "Les associations de protection des consommateurs",
      "Le client Bati Courtage dont les données sont détruites",
      "Les ONG environnementales",
    ],
    correct: 2,
    explanation:
      "Les PP de 1er rang ont une influence DIRECTE sur l'entreprise et sont directement impactées par ses décisions. Bati Courtage est un client d'OVH lié par un contrat — impact direct et immédiat sur sa propre activité. Le gouvernement, les associations et les ONG (options A, B, D) sont des PP de 2nd rang : influence indirecte.",
  },
  {
    id: 'qcm-013',
    tier: 1,
    matiere: 'eco',
    notionId: 'parties-prenantes',
    question: "La CNIL sanctionne une entreprise pour violation du RGPD. La CNIL est une :",
    options: [
      "Partie prenante de 1er rang (influence directe)",
      "Partie prenante de 2nd rang (influence indirecte)",
      "Actionnaire de l'entreprise",
      "Partie prenante interne",
    ],
    correct: 1,
    explanation:
      "La CNIL est un régulateur public — elle n'est pas dans la relation commerciale directe de l'entreprise et n'a pas de contrat avec elle. C'est une PP de 2nd rang (influence indirecte via la réglementation). Attention au piège : même si la CNIL peut infliger de lourdes sanctions, son rôle est réglementaire (indirect), pas contractuel.",
  },
  {
    id: 'qcm-014',
    tier: 1,
    matiere: 'eco',
    notionId: 'analyse-marche',
    question: "Lequel de ces éléments N'est PAS dans une analyse de marché standard ?",
    options: [
      "La description de l'offre (acteurs, concentration, leaders)",
      "L'analyse SWOT de l'entreprise leader",
      "Les barrières à l'entrée sur le marché",
      "Les perspectives et tendances de croissance",
    ],
    correct: 1,
    explanation:
      "L'analyse SWOT est un outil de diagnostic INTERNE à l'entreprise (forces, faiblesses, opportunités, menaces). L'analyse de marché porte sur : l'offre, la demande, la structure concurrentielle, les perspectives et les barrières à l'entrée — tous des éléments externes au marché. Introduire une SWOT dans une analyse de marché hors-sujet.",
  },
  {
    id: 'qcm-015',
    tier: 1,
    matiere: 'eco',
    notionId: 'analyse-marche',
    question: "Le marché cloud en France est qualifié d'oligopole car :",
    options: [
      "Il y a trop d'acteurs pour se faire concurrence",
      "Quelques acteurs (AWS, Azure, Google) dominent avec 71% des parts de marché",
      "Les prix sont fixés librement par chaque acteur",
      "La demande est supérieure à l'offre",
    ],
    correct: 1,
    explanation:
      "Un oligopole = peu d'offreurs dominants. AWS (46%), Azure (17%) et Google Cloud (8%) captent à eux trois 71% du marché français en 2022. Les autres acteurs (OVHcloud, Scaleway...) se partagent les 29% restants. Option A décrit la concurrence pure et parfaite. Options C et D ne définissent pas un oligopole.",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 1 — STRATÉGIES (8 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-016',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-globales',
    question:
      "NOVEFI rachète ASthen (imagerie médicale) en 2021. Quelle stratégie applique-t-elle ?",
    options: [
      "Spécialisation — renforcement du cœur de métier informatique",
      "Diversification conglomérale — activités sans lien avec le cœur de métier",
      "Diversification concentrique — santé numérique proche de l'informatique",
      "Intégration verticale — contrôle de la chaîne de valeur",
    ],
    correct: 2,
    explanation:
      "NOVEFI est une ESN informatique. La santé numérique (imagerie médicale + data) est proche de son métier de base (IT, données, sécurité) → synergies possibles → diversification CONCENTRIQUE. Ce serait conglomérale (option B) si NOVEFI achetait une entreprise sans aucun lien avec l'IT, comme une chaîne de restaurants.",
  },
  {
    id: 'qcm-017',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-globales',
    question: "Quel est le principal RISQUE de la spécialisation ?",
    options: [
      "Dispersion des ressources sur trop de marchés",
      "Dépendance à un seul marché — sensibilité aux variations de la demande",
      "Difficultés de coordination entre les activités",
      "Perte de l'avantage concurrentiel par imitation",
    ],
    correct: 1,
    explanation:
      "La spécialisation concentre tout sur un seul métier. Avantage : expertise maximale. Risque majeur : dépendance totale à un seul marché — si ce marché décline (disruption technologique, crise sectorielle), l'entreprise n'a pas de repli. Options A et C sont des risques de la DIVERSIFICATION. Option D est un risque commun à toutes les stratégies.",
  },
  {
    id: 'qcm-018',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-perimetre',
    question:
      "Agricoopia envisage de confier son SI à Gestion+. Quelle stratégie de périmètre est-ce ?",
    options: [
      "Intégration amont",
      "Diversification concentrique",
      "Impartition / externalisation",
      "Intégration aval",
    ],
    correct: 2,
    explanation:
      "Confier une activité à un prestataire externe = impartition (ou externalisation). L'intégration consiste à INTERNALISER des activités pour les maîtriser soi-même (ex : OVHcloud fabrique ses propres serveurs). Agricoopia veut faire l'inverse — externaliser son SI plutôt que de le gérer en interne.",
  },
  {
    id: 'qcm-019',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-perimetre',
    question:
      "OVHcloud fabrique ses propres serveurs et exploite ses propres datacenters. Quel est le principal AVANTAGE de cette intégration ?",
    options: [
      "Flexibilité maximale et réactivité accrue aux demandes du marché",
      "Réduction des investissements initiaux",
      "Contrôle total de la qualité, des coûts et de la sécurité physique des données",
      "Accès facilité à des compétences externes spécialisées",
    ],
    correct: 2,
    explanation:
      "L'intégration verticale d'OVH lui donne le contrôle total : fabrication des serveurs, construction des datacenters, exploitation des réseaux → maîtrise des coûts, de la qualité, de la sécurité physique (argument clé face aux GAFAM) et de l'innovation (watercooling breveté). La flexibilité (option A) et l'accès à des compétences externes (option D) sont des avantages de l'EXTERNALISATION.",
  },
  {
    id: 'qcm-020',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-domaine',
    question:
      "REF+ s'engage contractuellement sur un résultat précis (site en 1ère page de Google sous 3 mois). Quelle stratégie de domaine Porter cela illustre-t-il ?",
    options: [
      "Domination par les coûts — prix les plus bas du marché",
      "Focalisation — ciblage d'un segment précis",
      "Différenciation — se distinguer par la qualité et l'engagement fort",
      "Intégration — maîtrise de toute la chaîne SEO",
    ],
    correct: 2,
    explanation:
      "REF+ se différencie de ses concurrents par son obligation de résultat contractuelle — engagement unique sur le marché. C'est une stratégie de DIFFÉRENCIATION selon Porter : se distinguer par la qualité et l'image, pas par le prix. La focalisation (option B) ciblerait un segment de marché très étroit, sans nécessairement proposer quelque chose de différent.",
  },
  {
    id: 'qcm-021',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-domaine',
    question: "Selon Porter, quelles sont les 3 stratégies de domaine (DAS) ?",
    options: [
      "Spécialisation, diversification, internationalisation",
      "Domination par les coûts, différenciation, focalisation",
      "Intégration, impartition, hybride",
      "Prix bas, qualité haute, niche de masse",
    ],
    correct: 1,
    explanation:
      "Porter identifie 3 stratégies concurrentielles sur un DAS : 1) Domination par les coûts (prix le plus bas du marché) 2) Différenciation (qualité, innovation, image) 3) Focalisation (niche de marché précise). Options A et C sont des stratégies GLOBALES ou de périmètre — ne pas confondre les deux niveaux d'analyse.",
  },
  {
    id: 'qcm-022',
    tier: 1,
    matiere: 'management',
    notionId: 'strategies-globales',
    question:
      "Selon Chandler, si PURECONTROL décide de s'internationaliser, que doit-elle faire ?",
    options: [
      "Maintenir sa structure actuelle pour rester agile",
      "Adapter sa structure organisationnelle à sa nouvelle stratégie",
      "Changer de stratégie pour coller à sa structure existante",
      "Externaliser sa structure pour gagner en flexibilité",
    ],
    correct: 1,
    explanation:
      "Chandler : 'La structure doit s'adapter à la stratégie.' Si PURECONTROL change de stratégie (internationalisation), elle DOIT réorganiser sa structure (créer des filiales, recruter des profils internationaux, adapter la gouvernance). Option C inverse le principe de Chandler — c'est l'erreur classique.",
  },
  {
    id: 'qcm-023',
    tier: 1,
    matiere: 'eco',
    notionId: 'entrepreneur-schumpeter',
    question:
      "Schumpeter appelle 'destruction créatrice' le processus par lequel :",
    options: [
      "Les entreprises fusionnent pour réduire la concurrence",
      "L'État détruit des entreprises non rentables pour assainir le marché",
      "Les innovations rendent obsolètes les produits et entreprises existants",
      "Les crises économiques détruisent des emplois durablement",
    ],
    correct: 2,
    explanation:
      "La 'destruction créatrice' chez Schumpeter = les innovations détruisent les solutions existantes et créent de nouvelles entreprises plus performantes. Ex : PURECONTROL (IA énergétique) remplace les méthodes traditionnelles de gestion énergétique. C'est le moteur de la croissance économique à long terme. Options A, B et D décrivent d'autres phénomènes économiques réels mais sans lien avec Schumpeter.",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 2 — MOTIVATION & RH (8 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-024',
    tier: 2,
    matiere: 'management',
    notionId: 'motivation-herzberg',
    question:
      "Selon Herzberg, augmenter le salaire d'un développeur IT insatisfait va :",
    options: [
      "Créer une motivation durable et un engagement fort",
      "Réduire son insatisfaction sans créer de motivation",
      "N'avoir aucun effet car le salaire est secondaire",
      "Entraîner une démission si le montant est jugé insuffisant",
    ],
    correct: 1,
    explanation:
      "Le salaire est un FACTEUR D'HYGIÈNE selon Herzberg : son absence crée de l'insatisfaction, mais sa présence (même généreuse) n'engendre pas de motivation durable. Pour motiver durablement, il faut activer les FACTEURS MOTEURS : responsabilités, autonomie, reconnaissance, évolution de carrière. Option A est l'erreur la plus courante à l'examen.",
  },
  {
    id: 'qcm-025',
    tier: 2,
    matiere: 'management',
    notionId: 'motivation-maslow',
    question: "La GPEC/GEPP répond principalement à quel niveau de la pyramide de Maslow ?",
    options: [
      "Niveau 1 — besoins physiologiques (salaire de base)",
      "Niveau 2 — sécurité (emploi stable et prévisible)",
      "Niveau 5 — réalisation de soi (développement des compétences et évolution de carrière)",
      "Niveau 3 — appartenance (cohésion d'équipe)",
    ],
    correct: 2,
    explanation:
      "La GEPP permet aux salariés d'anticiper et de développer leurs compétences futures, de se projeter dans une évolution de carrière → besoin de RÉALISATION DE SOI (niveau 5). Elle contribue aussi à la sécurité (niveau 2) en anticipant les mutations, mais c'est principalement le niveau 5 qui est visé par le dispositif.",
  },
  {
    id: 'qcm-026',
    tier: 2,
    matiere: 'management',
    notionId: 'motivation-herzberg',
    question:
      "REF+ offre à ses salariés SEO des missions variées, une autonomie forte et la possibilité de proposer des stratégies créatives. Selon Herzberg, c'est :",
    options: [
      "Un facteur d'hygiène — réduit l'insatisfaction",
      "Un facteur moteur — crée une motivation intrinsèque durable",
      "Un facteur neutre sans impact sur la motivation",
      "Un levier de rémunération indirect",
    ],
    correct: 1,
    explanation:
      "La variété des missions, l'autonomie et la créativité sont des FACTEURS MOTEURS selon Herzberg : intérêt du travail, responsabilité, accomplissement. Ils créent une motivation intrinsèque durable. Les facteurs d'hygiène (option A) — salaire, conditions physiques — réduisent seulement l'insatisfaction sans générer de motivation positive.",
  },
  {
    id: 'qcm-027',
    tier: 2,
    matiere: 'management',
    notionId: 'marche-travail-numerique',
    question:
      "Pourquoi le turn-over est-il particulièrement élevé dans le secteur informatique ?",
    options: [
      "Les profils IT préfèrent les missions courtes par goût du changement",
      "La pénurie de talents crée un marché où changer d'employeur génère des augmentations de salaire significatives",
      "Les entreprises IT licencient fréquemment leurs salariés pour rester compétitives",
      "Les formations IT sont trop courtes pour créer un sentiment d'appartenance",
    ],
    correct: 1,
    explanation:
      "Le déséquilibre offre/demande (pénurie d'environ 10 000 ingénieurs/an selon Numeum) donne un énorme pouvoir de négociation aux profils IT. Changer d'employeur est le levier le plus efficace pour augmenter son salaire (+5 à 10% à chaque changement). Les entreprises doivent donc travailler leur marque employeur et leurs outils de fidélisation.",
  },
  {
    id: 'qcm-028',
    tier: 2,
    matiere: 'management',
    notionId: 'formation-gpec',
    question: "Le CPF (Compte Personnel de Formation) est un dispositif de formation à l'initiative de :",
    options: [
      "L'employeur uniquement",
      "Les deux parties d'un commun accord",
      "Le salarié",
      "La branche professionnelle",
    ],
    correct: 2,
    explanation:
      "Le CPF est à l'initiative du SALARIÉ — c'est lui qui choisit sa formation et actionne son compte auprès de la Mon Compte Formation. À l'initiative de l'EMPLOYEUR : le plan de développement des compétences. Cette distinction est souvent testée car elle détermine qui décide et qui finance la formation.",
  },
  {
    id: 'qcm-029',
    tier: 2,
    matiere: 'management',
    notionId: 'motivation-maslow',
    question: "Quel besoin Maslow place-t-il entre 'appartenance' et 'réalisation de soi' ?",
    options: [
      "Sécurité",
      "Physiologique",
      "Estime",
      "Accomplissement professionnel",
    ],
    correct: 2,
    explanation:
      "La pyramide de Maslow dans l'ordre : 1-Physiologiques 2-Sécurité 3-Appartenance 4-ESTIME 5-Réalisation de soi. L'estime inclut la reconnaissance par les collègues, la hiérarchie, le sentiment d'être compétent et valorisé. 'Accomplissement professionnel' (option D) est un synonyme approximatif du niveau 5, pas du niveau 4.",
  },
  {
    id: 'qcm-030',
    tier: 2,
    matiere: 'management',
    notionId: 'formation-gpec',
    question:
      "Une clause de dédit-formation peut-elle s'appliquer si l'employeur licencie le salarié sans faute grave ?",
    options: [
      "Oui, toujours — la clause prime sur les circonstances de la rupture",
      "Oui, si la clause le prévoit explicitement dans le contrat",
      "Non — la clause ne joue qu'en cas de démission du salarié",
      "Cela dépend uniquement de la convention collective applicable",
    ],
    correct: 2,
    explanation:
      "La clause de dédit-formation ne joue QU'EN CAS DE DÉMISSION du salarié. En cas de licenciement sans faute grave (l'employeur est à l'initiative de la rupture), il ne peut pas réclamer le remboursement. Exception : licenciement pour FAUTE GRAVE ou LOURDE du salarié.",
  },
  {
    id: 'qcm-031',
    tier: 2,
    matiere: 'management',
    notionId: 'formation-gpec',
    question: "La GEPP (ancienne GPEC) vise principalement à :",
    options: [
      "Réduire la masse salariale de l'entreprise à court terme",
      "Anticiper les besoins futurs en compétences et adapter les effectifs en conséquence",
      "Gérer les conflits sociaux dans l'entreprise",
      "Optimiser les formations obligatoires légales et réglementaires",
    ],
    correct: 1,
    explanation:
      "GEPP = Gestion des Emplois et des Parcours Professionnels. Objectif : ANTICIPER les besoins futurs en compétences (évolution des métiers, technologies, stratégie) et adapter les effectifs par des actions internes (formation, mobilité) ou externes (recrutement, sous-traitance). C'est un outil stratégique RH, pas de réduction des coûts (option A).",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 2 — DROIT CONTRATS (7 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-032',
    tier: 2,
    matiere: 'droit',
    notionId: 'clause-non-concurrence',
    question: "La clause de non-concurrence d'Agricoopia 2022 est nulle car :",
    options: [
      "Elle ne précise pas l'activité interdite",
      "La contrepartie financière (30% du salaire brut) est insuffisante",
      "La durée de 4 ans est jugée excessive par la jurisprudence",
      "La zone géographique (Sud-Ouest) est trop large",
    ],
    correct: 2,
    explanation:
      "La jurisprudence considère qu'une durée de 4 ans est excessive — 1 à 2 ans est généralement acceptable. La zone Sud-Ouest (2 régions) est acceptable, la contrepartie à 30% est convenable, et l'activité est clairement définie. La durée est la seule condition défaillante → clause nulle car les conditions sont CUMULATIVES.",
  },
  {
    id: 'qcm-033',
    tier: 2,
    matiere: 'droit',
    notionId: 'clause-non-concurrence',
    question:
      "La clause de non-concurrence de M. Casares (OVHcloud 2025) prévoit : 1 an, région Hauts-de-France, développeur logiciels, indemnité 2 mois de salaire par année d'ancienneté plafonnée à 6 mois. Elle est :",
    options: [
      "Nulle — la contrepartie plafonnée à 6 mois est insuffisante",
      "Nulle — 1 an est une durée trop courte pour être juridiquement efficace",
      "Valide — toutes les 5 conditions cumulatives sont réunies",
      "Nulle — elle ne précise pas assez l'activité interdite",
    ],
    correct: 2,
    explanation:
      "Vérifions les 5 conditions : 1) Durée 1 an ✓ (raisonnable) 2) Zone : région Hauts-de-France ✓ (définie) 3) Activité : développeur logiciels ✓ (précise) 4) Intérêts légitimes de l'entreprise ✓ (fonctions de confiance) 5) Contrepartie financière réelle ✓. Toutes les conditions sont réunies → clause VALIDE.",
  },
  {
    id: 'qcm-034',
    tier: 2,
    matiere: 'droit',
    notionId: 'clause-dedit-formation',
    question:
      "La clause de dédit-formation DIGIM 2025 prévoit 8 ans d'engagement pour une formation de 2 mois à 4 000€. Elle est nulle car :",
    options: [
      "La formation n'est pas suffisamment décrite dans la clause",
      "La durée d'engagement est disproportionnée par rapport à la durée et au coût de la formation",
      "Le salarié n'a pas signé la clause avant le début de la formation",
      "Le montant de remboursement dépasse le coût réel de la formation",
    ],
    correct: 1,
    explanation:
      "La jurisprudence admet 2 à 5 ans d'engagement pour des formations significatives. 8 ans pour une formation de 2 mois à 4 000€ est clairement disproportionné → condition de proportionnalité non remplie. La clause est nulle même si les autres conditions (description, signature préalable, montant) sont correctes.",
  },
  {
    id: 'qcm-035',
    tier: 2,
    matiere: 'droit',
    notionId: 'clause-dedit-formation',
    question:
      "La clause de dédit-formation IDEMIA prévoit un remboursement DÉGRESSIF. Cela signifie que :",
    options: [
      "Le montant à rembourser augmente avec le temps passé dans l'entreprise",
      "Plus le salarié reste longtemps, moins il rembourse en cas de départ",
      "Le remboursement est fixe quelle que soit la date de départ",
      "Le salarié ne rembourse que s'il part dans les 6 premiers mois suivant la formation",
    ],
    correct: 1,
    explanation:
      "Un remboursement dégressif signifie que plus le salarié reste longtemps après sa formation, moins il doit rembourser en cas de départ. Ex : 500€ par mois restant — s'il part à 23 mois sur 24, il ne rembourse que 500€. C'est une exigence de la jurisprudence : l'indemnité doit être proportionnée au préjudice réel subi par l'employeur.",
  },
  {
    id: 'qcm-036',
    tier: 2,
    matiere: 'droit',
    notionId: 'structures-juridiques',
    question:
      "Une start-up cherche à lever 2 millions d'euros auprès d'investisseurs extérieurs. Quelle structure juridique est la plus adaptée ?",
    options: [
      "Entreprise individuelle — création simple et rapide",
      "EURL — responsabilité limitée avec un seul associé",
      "SARL — structure rassurante et bien connue des banques",
      "SAS — grande souplesse statutaire pour accueillir des investisseurs",
    ],
    correct: 3,
    explanation:
      "La SAS est la forme privilégiée des start-up pour lever des fonds : souplesse statutaire totale (droits de vote multiples, pactes d'actionnaires, clauses d'agrément), pas de capital minimum, dirigeant assimilé salarié. La SARL (option C) est trop rigide — les droits des associés sont encadrés par la loi, ce qui freine les investisseurs professionnels.",
  },
  {
    id: 'qcm-037',
    tier: 2,
    matiere: 'droit',
    notionId: 'structures-juridiques',
    question:
      "REF+ veut passer de SARL à SAS pour accéder à de nouveaux financements. Quel est l'avantage décisif de la SAS sur la SARL ?",
    options: [
      "Capital minimum plus faible dans une SAS",
      "Responsabilité illimitée des associés dans une SAS",
      "Grande souplesse statutaire et meilleure crédibilité pour attirer des investisseurs",
      "Régime fiscal automatiquement plus avantageux dans une SAS",
    ],
    correct: 2,
    explanation:
      "La SAS permet d'organiser librement la gouvernance par les statuts (accords d'associés, clauses de préférence, droits de vote différenciés) — c'est ce qui la rend attractive pour les investisseurs. Option B est fausse : SARL et SAS ont toutes deux une responsabilité LIMITÉE. Option D est fausse : le régime fiscal (IS) est identique par défaut.",
  },
  {
    id: 'qcm-038',
    tier: 2,
    matiere: 'eco',
    notionId: 'financement-entreprise',
    question:
      "Quand les taux directeurs de la BCE augmentent, quel est l'impact sur l'investissement des entreprises ?",
    options: [
      "L'investissement augmente car les entreprises cherchent à profiter des taux élevés",
      "L'investissement diminue car le crédit devient plus cher",
      "L'investissement est inchangé car les taux directeurs n'affectent que les ménages",
      "L'investissement augmente uniquement pour les grandes entreprises cotées en bourse",
    ],
    correct: 1,
    explanation:
      "Mécanisme de transmission de la politique monétaire : taux BCE ↑ → taux bancaires ↑ → crédit plus cher → les entreprises empruntent moins → moins d'investissement → ralentissement économique. Cela concerne TOUTES les entreprises qui ont besoin de financement externe, quelle que soit leur taille (option D est fausse).",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 3 — DROIT AVANCÉ (8 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-039',
    tier: 3,
    matiere: 'droit',
    notionId: 'abus-position-dominante',
    question:
      "WEBREFY pratique des prix anormalement bas pour éliminer REF+ du marché. Qui peut sanctionner cette pratique ?",
    options: [
      "Le tribunal de commerce de Paris",
      "L'Autorité de la concurrence",
      "La DGCCRF uniquement",
      "Le juge civil saisi directement par REF+",
    ],
    correct: 1,
    explanation:
      "L'abus de position dominante (prix prédateurs) est du ressort de l'AUTORITÉ DE LA CONCURRENCE. Elle peut ordonner la cessation des pratiques et infliger une amende jusqu'à 10% du CA mondial. La DGCCRF (option C) protège les consommateurs, pas les concurrents. Le tribunal de commerce traite les litiges commerciaux, pas les pratiques anticoncurrentielles.",
  },
  {
    id: 'qcm-040',
    tier: 3,
    matiere: 'droit',
    notionId: 'abus-position-dominante',
    question: "Avoir une position dominante sur un marché est :",
    options: [
      "Interdit par le Code de commerce en toute circonstance",
      "Autorisé uniquement si la part de marché est inférieure à 50%",
      "Légal — c'est l'ABUS de cette position qui est interdit",
      "Autorisé si l'entreprise est de nationalité française",
    ],
    correct: 2,
    explanation:
      "La position dominante ELLE-MÊME n'est pas illicite. Une entreprise peut légitimement dominer son marché grâce à sa qualité, son innovation, ses économies d'échelle. C'est l'EXPLOITATION ABUSIVE de cette position (prix prédateurs, refus de vente, conditions discriminatoires) qui est sanctionnée par le droit de la concurrence.",
  },
  {
    id: 'qcm-041',
    tier: 3,
    matiere: 'droit',
    notionId: 'contrefacon-concurrence-deloyale',
    question:
      "Quelle est la différence fondamentale entre contrefaçon et concurrence déloyale ?",
    options: [
      "La contrefaçon est civile, la concurrence déloyale est pénale",
      "La contrefaçon exige un droit de PI enregistré ; la concurrence déloyale est fondée sur des pratiques abusives sans nécessiter de droit de PI",
      "La contrefaçon ne s'applique qu'aux produits physiques manufacturés",
      "Ce sont deux termes juridiques différents pour désigner la même infraction",
    ],
    correct: 1,
    explanation:
      "Contrefaçon = atteinte à un DROIT DE PI ENREGISTRÉ (marque INPI, brevet, œuvre protégée) → délit pénal (3 ans + 300 000€). Concurrence déloyale = pratiques abusives SANS nécessairement un droit de PI enregistré (dénigrement, parasitisme, désorganisation, imitation) → responsabilité civile délictuelle. Les deux actions peuvent être cumulées.",
  },
  {
    id: 'qcm-042',
    tier: 3,
    matiere: 'droit',
    notionId: 'contrefacon-concurrence-deloyale',
    question:
      "Befor copie la technologie brevetée de Gobert. Quelle action juridique est prioritaire ?",
    options: [
      "Concurrence déloyale — Gobert n'a pas à prouver un droit enregistré",
      "Contrefaçon de brevet — Gobert dispose d'un droit de PI enregistré à l'INPI",
      "Responsabilité contractuelle — il existe forcément un contrat entre Gobert et Befor",
      "Abus de position dominante — Befor est en situation de force économique",
    ],
    correct: 1,
    explanation:
      "Gobert dispose d'un BREVET enregistré à l'INPI → l'utilisation sans autorisation par Befor = CONTREFAÇON (délit pénal). C'est l'action la plus forte car l'atteinte au droit suffit — pas besoin de prouver un préjudice particulier. Option A (concurrence déloyale) est possible en complément mais moins puissante. Option C est fausse car il n'y a pas de contrat.",
  },
  {
    id: 'qcm-043',
    tier: 3,
    matiere: 'droit',
    notionId: 'rgpd-donnees-sensibles',
    question:
      "MASTEL installe MorphoWave (empreintes 3D) pour sécuriser l'accès à son site. Elle utilise ensuite ces données pour contrôler les horaires de pointage d'un salarié. C'est :",
    options: [
      "Légal — l'employeur peut utiliser les données qu'il collecte à toutes fins légitimes",
      "Un détournement de finalité interdit par le RGPD",
      "Légal si le salarié a accepté les CGU du dispositif biométrique",
      "Légal uniquement si un avocat spécialisé RGPD valide l'usage secondaire",
    ],
    correct: 1,
    explanation:
      "Le RGPD impose que les données ne soient utilisées QUE pour la finalité déclarée lors de la collecte. MorphoWave a été installé pour la SÉCURITÉ DES ACCÈS au site. Utiliser ces données pour contrôler les HORAIRES = changement de finalité non autorisé → violation du RGPD. Les données obtenues ainsi sont irrecevables comme preuve en justice.",
  },
  {
    id: 'qcm-044',
    tier: 3,
    matiere: 'droit',
    notionId: 'rgpd-donnees-sensibles',
    question: "Les données biométriques sont qualifiées de 'données sensibles' car :",
    options: [
      "Elles contiennent des informations bancaires confidentielles",
      "Leur traitement est interdit sauf exceptions strictes — elles identifient une personne de manière unique et immuable",
      "Elles nécessitent un stockage physique sécurisé obligatoirement sur le territoire français",
      "Elles sont uniquement collectées par les grandes entreprises soumises à audit CNIL",
    ],
    correct: 1,
    explanation:
      "Les données biométriques (empreintes, reconnaissance faciale, iris) identifient une personne de façon UNIQUE et IMMUABLE — contrairement à un mot de passe, on ne peut pas les modifier. Leur traitement est interdit par principe (art. 9 RGPD) sauf exceptions strictes : consentement exprès, nécessité vitale, intérêt public autorisé par la CNIL.",
  },
  {
    id: 'qcm-045',
    tier: 3,
    matiere: 'droit',
    notionId: 'rupture-pourparlers',
    question:
      "Les Glaces Gérômoises rompent les négociations avec PURECONTROL après une semaine, invoquant des difficultés financières. C'est :",
    options: [
      "Une rupture abusive — toute rupture brutale de pourparlers engage automatiquement la responsabilité",
      "Une rupture licite — les difficultés financières constituent un motif légitime",
      "Une rupture abusive — elles auraient dû continuer les négociations jusqu'à la conclusion",
      "Indéterminé — il faudrait analyser les investissements engagés par PURECONTROL",
    ],
    correct: 1,
    explanation:
      "La rupture est LICITE car : 1) Les négociations n'en étaient qu'à une semaine (pas avancées) 2) Le motif est légitime (difficultés financières réelles) 3) Il n'y avait pas de croyance légitime dans la conclusion imminente du contrat. La liberté de rompre les pourparlers s'applique. Seule une rupture ABUSIVE (brutalité + mauvaise foi + négociations très avancées) engagerait la responsabilité.",
  },
  {
    id: 'qcm-046',
    tier: 3,
    matiere: 'droit',
    notionId: 'responsabilite-civile-contractuelle',
    question:
      "Une agence SEO a souscrit une 'obligation de résultat' de positionner le site de son client en 1ère page sous 3 mois. Le site reste en 4ème page. La charge de la preuve repose sur :",
    options: [
      "L'agence SEO — qui doit prouver qu'elle n'est pas fautive (force majeure, faute du client)",
      "Le client — qui doit prouver que l'agence n'a pas travaillé sérieusement",
      "Les deux parties à égalité devant le tribunal",
      "Le juge qui ordonne d'office une expertise technique indépendante",
    ],
    correct: 0,
    explanation:
      "Avec une obligation de RÉSULTAT, la faute est PRÉSUMÉE si l'objectif n'est pas atteint. L'agence SEO doit donc prouver qu'elle n'est pas fautive (cas de force majeure, faute imputable au client...). C'est l'inverse d'une obligation de MOYENS où le client doit prouver que le prestataire n'a pas mis les moyens nécessaires.",
  },

  // ─────────────────────────────────────────────────────────
  // TIER 3 — PI & NUMÉRIQUE (5 questions)
  // ─────────────────────────────────────────────────────────
  {
    id: 'qcm-047',
    tier: 3,
    matiere: 'droit',
    notionId: 'propriete-intellectuelle',
    question:
      "Un développeur crée un logiciel dans le cadre de ses fonctions chez XTCcloud. À qui appartiennent les droits patrimoniaux ?",
    options: [
      "Au développeur — toute création intellectuelle appartient à son auteur",
      "À l'employeur — les droits patrimoniaux sur les logiciels créés dans l'exercice des fonctions reviennent à l'entreprise",
      "Au développeur et à l'employeur à parts égales",
      "À l'État — les logiciels professionnels tombent dans le domaine public",
    ],
    correct: 1,
    explanation:
      "Art. L113-9 du Code de la propriété intellectuelle : les droits PATRIMONIAUX sur les logiciels créés par un salarié dans l'exercice de ses fonctions (ou sur instructions de l'employeur) sont dévolus à l'EMPLOYEUR. Exception : si le logiciel a été créé entièrement hors du temps de travail et sans lien avec les fonctions (cas de Sébastien Casares, OVHcloud 2025).",
  },
  {
    id: 'qcm-048',
    tier: 3,
    matiere: 'droit',
    notionId: 'propriete-intellectuelle',
    question: "Un brevet déposé à l'INPI confère :",
    options: [
      "Un monopole d'exploitation de 20 ans non renouvelable",
      "Une protection perpétuelle tant que les taxes annuelles sont payées",
      "Un monopole de 10 ans renouvelable indéfiniment",
      "Une protection de 70 ans après la mort de l'inventeur",
    ],
    correct: 0,
    explanation:
      "Le brevet protège une invention industrielle pour 20 ans NON RENOUVELABLES à compter du dépôt. Après 20 ans, l'invention tombe dans le domaine public. La marque (option C) est protégée 10 ans renouvelable. Le droit d'auteur (option D) dure 70 ans après la mort. OVHcloud détient 137 familles de brevets actives.",
  },
  {
    id: 'qcm-049',
    tier: 3,
    matiere: 'eco',
    notionId: 'plateformes-effets-reseau',
    question:
      "Ferme.agri attire 100 000 agriculteurs supplémentaires. L'effet de réseau observé est :",
    options: [
      "Négatif — plus d'utilisateurs signifie plus de concurrence entre agriculteurs",
      "Direct — chaque nouvel agriculteur augmente la valeur de la plateforme pour tous les autres",
      "Indirect — les nouveaux agriculteurs profitent aux fournisseurs uniquement",
      "Nul — la plateforme est déjà arrivée à saturation",
    ],
    correct: 1,
    explanation:
      "Effet de réseau DIRECT : quand les utilisateurs du MÊME groupe augmentent, la valeur augmente pour chacun d'eux. Plus d'agriculteurs = plus d'offre, plus de demande, meilleures cotations, plus de diversité de produits → la plateforme devient plus utile pour chaque agriculteur. L'effet INDIRECT jouerait entre deux groupes différents (ex : agriculteurs ↔ fournisseurs).",
  },
  {
    id: 'qcm-050',
    tier: 3,
    matiere: 'eco',
    notionId: 'entrepreneur-schumpeter',
    question:
      "Selon Schumpeter, pourquoi l'entrepreneur obtient-il un monopole 'temporaire' après son innovation ?",
    options: [
      "L'État lui accorde une protection légale de 20 ans via un brevet",
      "Il dépose systématiquement un brevet à l'INPI pour protéger son innovation",
      "Son avance technologique lui donne un avantage de fait jusqu'à ce que les concurrents imitent et rattrapent",
      "Il signe des contrats d'exclusivité avec ses principaux distributeurs",
    ],
    correct: 2,
    explanation:
      "Le monopole temporaire schumpétérien n'est pas juridique — c'est un monopole DE FAIT lié à l'avance technologique. Tant qu'il est le seul à proposer l'innovation, il fixe ses prix et capture le marché. Progressivement, les imitateurs arrivent, la concurrence revient → il doit innover à nouveau. C'est le cycle de la 'destruction créatrice'.",
  },
  {
    id: 'qcm-051',
    tier: 3,
    matiere: 'management',
    notionId: 'rse-finalites',
    question:
      "Selon Drucker, les finalités économique et sociétale d'une entreprise sont :",
    options: [
      "Opposées — profitabilité et RSE sont structurellement incompatibles",
      "Complémentaires — la RSE renforce la performance économique à long terme",
      "Indépendantes — l'entreprise choisit l'une ou l'autre selon ses valeurs",
      "Hiérarchisées — l'économique prime toujours sur le sociétal",
    ],
    correct: 1,
    explanation:
      "Drucker : les finalités économique (profit, pérennité) et sociétale/RSE (parties prenantes, environnement) sont COMPLÉMENTAIRES et non opposées. La RSE améliore l'image, attire des talents (génération Z), fidélise des clients, ouvre des marchés publics → bénéfices économiques indirects. IDEMIA, DIGIM et OVHcloud illustrent ce principe dans les sujets CEJM.",
  },
  {
    id: 'qcm-052',
    tier: 3,
    matiere: 'management',
    notionId: 'strategies-domaine',
    question:
      "PURECONTROL se positionne sur un marché de niche (optimisation énergétique industrielle par IA). Quelle stratégie de Porter applique-t-elle principalement ?",
    options: [
      "Domination par les coûts — sa solution est moins chère que les concurrents",
      "Différenciation — sa solution est unique et reconnue par les clients industriels",
      "Focalisation — ciblage précis du segment industriel-énergétique",
      "Diversification — extension progressive vers de nouveaux marchés",
    ],
    correct: 2,
    explanation:
      "La FOCALISATION consiste à cibler un segment de marché très précis pour en devenir le spécialiste incontesté. PURECONTROL cible l'industrie + optimisation énergétique par IA — segment très étroit. La différenciation (option B) est plus générale (se distinguer sur un marché large). Focalisation et différenciation ne sont pas incompatibles mais la focalisation est la stratégie principale ici.",
  },
  {
    id: 'qcm-053',
    tier: 3,
    matiere: 'droit',
    notionId: 'methodologie-juridique',
    question:
      "La validité d'un contrat nécessite 4 conditions. Laquelle de ces options N'en fait PAS partie ?",
    options: [
      "La capacité des parties à contracter",
      "Le consentement libre et éclairé",
      "La signature devant notaire",
      "Un objet licite et certain",
    ],
    correct: 2,
    explanation:
      "Les 4 conditions de validité du contrat : 1) Capacité 2) Consentement libre et éclairé 3) Objet licite 4) Cause licite. La signature devant notaire est requise uniquement pour certains actes solennels (vente immobilière, mariage) — pas pour tous les contrats. Un contrat commercial peut être oral ou écrit sans intervention d'un notaire.",
  },
  {
    id: 'qcm-054',
    tier: 3,
    matiere: 'eco',
    notionId: 'financement-entreprise',
    question:
      "PURECONTROL choisit le crowdlending pour financer son développement. Cela signifie :",
    options: [
      "Des particuliers font un don sans attendre de contrepartie financière",
      "Des particuliers prêtent de l'argent avec remboursement + intérêts",
      "Des particuliers prennent des participations au capital de l'entreprise",
      "L'État subventionne le projet via une plateforme en ligne agréée",
    ],
    correct: 1,
    explanation:
      "Le crowdfunding se décline en 3 formes : 1) Don (avec ou sans contrepartie non financière) 2) Prêt / CROWDLENDING (remboursement + intérêts, comme un prêt bancaire mais par des particuliers) 3) Titres / Equity crowdfunding (prise de participation au capital). Option C décrit l'equity crowdfunding, pas le crowdlending.",
  },
  {
    id: 'qcm-055',
    tier: 3,
    matiere: 'management',
    notionId: 'strategies-perimetre',
    question:
      "Quels sont les 3 principaux RISQUES de l'externalisation (impartition) ?",
    options: [
      "Économies d'échelle impossibles, investissements lourds, perte de la clientèle",
      "Dépendance au prestataire, perte de compétences internes, contrôle plus difficile",
      "Complexité managériale, turn-over élevé, intégration culturelle difficile",
      "Baisse du chiffre d'affaires, marges réduites, difficultés de coordination interne",
    ],
    correct: 1,
    explanation:
      "Risques de l'impartition : 1) DÉPENDANCE au prestataire (si Gestion+ fait défaut, Agricoopia est bloquée) 2) PERTE DE COMPÉTENCES internes (on ne sait plus faire ce qu'on a externalisé) 3) CONTRÔLE DIFFICILE (qualité, délais, confidentialité). Les investissements lourds et la complexité managériale (options A, C) sont des risques de l'INTÉGRATION verticale.",
  },
];

export default quiz;
