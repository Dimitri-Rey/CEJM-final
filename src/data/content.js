// content.js — Données complètes pour l'application CEJM BTS SIO
// 25 notions couvrant Économie, Droit et Management
// Sujets référencés : packitoo-2022, agricoopia-nc-2022, novefi-2023, idemia-nc-2023,
//                    ref-2024, purecontrol-s-2024, digim-2025, ovhcloud-nc-2025

const notions = [
  // ─────────────────────────────────────────────
  // TIER 1
  // ─────────────────────────────────────────────
  {
    id: 'methodologie-juridique',
    tier: 1,
    matiere: 'droit',
    titre: 'La méthodologie du raisonnement juridique',
    sousTitre: '5 étapes obligatoires — le squelette qui rapporte des points',
    cours: 'La méthodologie juridique est la structure obligatoire de toute réponse à une question de droit. Elle se déroule en 5 étapes visuellement séparées : faits, problème de droit, principe/règle, application aux faits, conclusion. Le correcteur coche chaque étape sur sa grille — la structure seule peut valoir la moitié des points, même avec une conclusion imparfaite. Ne jamais sauter l\'étape « Principe », même si la règle paraît évidente.',
    pointsCles: [
      '01 Faits : résumer la situation en 3-5 lignes, sans interprétation, garder uniquement ce qui est juridiquement utile',
      '02 Problème de droit : reformuler en question générale (« Le contrat est-il valable ? », « La responsabilité peut-elle être engagée ? »)',
      '03 Principe / règle : énoncer la règle, les conditions cumulatives et les exceptions — c\'est la partie cours',
      '04 Application aux faits : « En l\'espèce… » → confronter CHAQUE condition aux faits, point par point',
      '05 Conclusion : trancher — conditions réunies → oui ; sinon → non + sanction (nullité, D&I, responsabilité…)',
      'Réflexe : dès que la question dit « apprécier », « vérifier », « à l\'aide d\'un raisonnement juridique » → dérouler les 5 étapes'
    ],
    auteurs: [],
    sujetsRef: [
      'packitoo-2022',
      'agricoopia-nc-2022',
      'novefi-2023',
      'idemia-nc-2023',
      'ref-2024',
      'purecontrol-s-2024',
      'digim-2025',
      'ovhcloud-nc-2025'
    ],
    cards: [
      {
        id: 'methodologie-juridique-q1',
        question: 'Quelles sont les 5 étapes de la méthodologie juridique ?',
        reponse: '1. Faits 2. Problème de droit 3. Principe/règle 4. Application aux faits 5. Conclusion'
      },
      {
        id: 'methodologie-juridique-q2',
        question: 'Quelle est la différence entre nullité relative et nullité absolue ?',
        reponse: 'Nullité relative : demandée uniquement par la personne lésée. Nullité absolue : demandée par toute personne (violation de l\'ordre public).'
      },
      {
        id: 'methodologie-juridique-q3',
        question: 'Que signifie D&I ?',
        reponse: 'Dommages et intérêts — réparation financière du préjudice subi.'
      },
      {
        id: 'methodologie-juridique-q4',
        question: 'Quelle est la différence entre responsabilité civile et pénale ?',
        reponse: 'Civile : réparer le préjudice d\'une victime. Pénale : punir l\'auteur d\'une infraction.'
      },
      {
        id: 'methodologie-juridique-q5',
        question: 'Pourquoi ne jamais sauter l\'étape \'Principe\' ?',
        reponse: 'Le correcteur a une grille et coche chaque étape. La structure seule peut valoir la moitié des points.'
      },
      {
        id: 'methodologie-juridique-q6',
        question: 'Qu\'est-ce qu\'une cause réelle et sérieuse ?',
        reponse: 'Motif suffisamment important pour justifier un licenciement. Exigée pour tout licenciement personnel.'
      },
      {
        id: 'methodologie-juridique-q7',
        question: 'Comment formuler le problème de droit ?',
        reponse: 'En question juridique générale : \'Le contrat est-il valable ?\', \'La responsabilité de X peut-elle être engagée ?\', \'La clause est-elle licite ?\''
      },
      {
        id: 'methodologie-juridique-q8',
        question: 'Comment commencer l\'application aux faits ?',
        reponse: 'Par la formule \'En l\'espèce...\' puis confronter chaque condition aux faits du cas, point par point.'
      }
    ]
  },

  {
    id: 'diagnostic-pestel',
    tier: 1,
    matiere: 'eco',
    titre: 'Le diagnostic PESTEL',
    sousTitre: 'Analyser le macro-environnement — opportunités et menaces',
    cours: 'PESTEL est l\'outil d\'analyse du macro-environnement d\'une entreprise. Il identifie les facteurs Politiques, Économiques, Socioculturels, Technologiques, Environnementaux et Légaux qui influencent l\'entreprise sans qu\'elle puisse les contrôler directement. Chaque facteur doit être classé en opportunité ou en menace. ATTENTION : ne jamais réciter PESTEL hors-sol — chaque dimension doit être illustrée par un élément concret des annexes du sujet, sinon 0 point.',
    pointsCles: [
      'P — Politique : aides publiques, subventions, labels (French Tech, Greentech)',
      'E — Économique : taux d\'intérêt BCE, croissance, inflation, pouvoir d\'achat',
      'S — Socioculturel : évolution des modes de consommation, attentes génération Z, RSE',
      'T — Technologique : IA, cloud, digitalisation, Big Data, 5G',
      'E — Environnemental : transition écologique, empreinte carbone, réglementation',
      'L — Légal : RGPD, facturation électronique obligatoire 2026, droit du travail',
      'Méthode : annoncer le niveau d\'analyse demandé (macro/méso/micro) PUIS dérouler l\'outil'
    ],
    auteurs: [],
    sujetsRef: ['ref-2024', 'digim-2025', 'novefi-2023'],
    cards: [
      {
        id: 'diagnostic-pestel-q1',
        question: 'Que signifie PESTEL ?',
        reponse: 'Politique, Économique, Socioculturel, Technologique, Environnemental, Légal.'
      },
      {
        id: 'diagnostic-pestel-q2',
        question: 'Comment classer chaque facteur PESTEL ?',
        reponse: 'En opportunité (favorable à l\'entreprise) ou en menace (risque pour l\'entreprise).'
      },
      {
        id: 'diagnostic-pestel-q3',
        question: 'Quel est le piège classique avec PESTEL ?',
        reponse: 'Réciter les dimensions sans les illustrer avec le sujet = 0 point. Chaque facteur doit être rattaché à un fait concret des annexes.'
      },
      {
        id: 'diagnostic-pestel-q4',
        question: 'PESTEL analyse quel niveau d\'environnement ?',
        reponse: 'Le macro-environnement : facteurs sur lesquels l\'entreprise n\'a aucune influence directe.'
      },
      {
        id: 'diagnostic-pestel-q5',
        question: 'Donne un exemple de facteur Légal PESTEL pour une ESN en 2025.',
        reponse: 'La facturation électronique obligatoire B2B dès 2026 (loi de finances rectificative 2022) est une opportunité pour DIGIM / contrainte pour ses clients.'
      },
      {
        id: 'diagnostic-pestel-q6',
        question: 'Donne un exemple de facteur Économique PESTEL.',
        reponse: 'La hausse des taux directeurs de la BCE renchérit le crédit → moins d\'investissements → menace pour les entreprises qui ont besoin d\'emprunter (REF+ 2024).'
      },
      {
        id: 'diagnostic-pestel-q7',
        question: 'Comment annoncer une réponse PESTEL à l\'examen ?',
        reponse: 'Annoncer le niveau d\'analyse (macro-environnement), puis traiter chaque dimension avec un exemple tiré des annexes du sujet.'
      }
    ]
  },

  {
    id: 'forces-porter',
    tier: 1,
    matiere: 'eco',
    titre: 'Les 5 forces de Porter',
    sousTitre: 'Analyser le micro-environnement concurrentiel',
    cours: 'Le modèle des 5 forces de Porter analyse le micro-environnement concurrentiel d\'une entreprise. Il identifie les forces qui déterminent l\'intensité de la concurrence et la rentabilité d\'un secteur. Plus ces forces sont intenses, plus la rentabilité est faible. Porter est également l\'auteur du concept d\'avantage concurrentiel (domination par les coûts ou différenciation).',
    pointsCles: [
      '1. Intensité concurrentielle : nombre et force des concurrents directs',
      '2. Pouvoir de négociation des clients : capacité à imposer des prix bas ou des conditions',
      '3. Pouvoir de négociation des fournisseurs : capacité à imposer leurs prix ou délais',
      '4. Menace de nouveaux entrants : barrières à l\'entrée (capital, technologie, brevets, réglementation)',
      '5. Menace de produits de substitution : produits différents qui répondent au même besoin',
      'Citer Porter pour les 5 forces ET pour l\'avantage concurrentiel'
    ],
    auteurs: [
      { nom: 'Porter', theorie: '5 forces concurrentielles + avantage concurrentiel (domination coûts / différenciation)' }
    ],
    sujetsRef: ['packitoo-2022', 'ref-2024', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'forces-porter-q1',
        question: 'Quelles sont les 5 forces de Porter ?',
        reponse: '1. Intensité concurrentielle 2. Pouvoir de négociation des clients 3. Pouvoir de négociation des fournisseurs 4. Menace de nouveaux entrants 5. Menace de produits de substitution'
      },
      {
        id: 'forces-porter-q2',
        question: 'À quoi servent les 5 forces de Porter ?',
        reponse: 'À analyser le micro-environnement concurrentiel d\'une entreprise et à évaluer l\'intensité de la concurrence dans un secteur.'
      },
      {
        id: 'forces-porter-q3',
        question: 'Comment citer Porter à l\'examen ?',
        reponse: 'Pour les 5 forces ET pour l\'avantage concurrentiel (Porter, 1985). Distinguer : domination par les coûts vs différenciation.'
      },
      {
        id: 'forces-porter-q4',
        question: 'Qu\'est-ce qu\'une barrière à l\'entrée ?',
        reponse: 'Obstacle qui rend difficile l\'arrivée de nouveaux concurrents : capital élevé, technologie complexe, brevets, réglementation, fidélité des clients.'
      },
      {
        id: 'forces-porter-q5',
        question: 'Quel est le lien entre les 5 forces et la rentabilité ?',
        reponse: 'Plus les 5 forces sont intenses (concurrence forte, clients puissants...), plus la rentabilité du secteur diminue.'
      },
      {
        id: 'forces-porter-q6',
        question: 'Donne un exemple de fort pouvoir de négociation des clients.',
        reponse: 'Dans le secteur du cloud, AWS, Azure et Google Cloud captent 71% du marché français — les clients TPE/PME ont peu de pouvoir face aux GAFAM (OVHcloud 2025).'
      },
      {
        id: 'forces-porter-q7',
        question: 'Quel outil analyse le méso-environnement (parties prenantes) ?',
        reponse: 'Le modèle de Freeman — PP de 1er rang (influence directe) vs PP de 2nd rang (influence indirecte).'
      }
    ]
  },

  {
    id: 'analyse-marche',
    tier: 1,
    matiere: 'eco',
    titre: 'L\'analyse de marché',
    sousTitre: 'Offre · Demande · Structure · Perspectives · Barrières',
    cours: 'L\'analyse de marché décrit et évalue un marché selon 5 dimensions : l\'offre (acteurs, concentration, leaders), la demande (volume, évolution, comportements), la structure (type de marché : monopole, oligopole, CPP), les perspectives (tendances futures), et les barrières à l\'entrée (freins à l\'arrivée de nouveaux concurrents). C\'est la question systématique de Mission 1 dans presque tous les sujets.',
    pointsCles: [
      'Offre : acteurs présents, concentration du marché (oligopole si peu d\'acteurs), leaders',
      'Demande : volume total, taux de croissance, profil des clients, évolution',
      'Structure : concurrence pure et parfaite / oligopole / monopole',
      'Perspectives : tendances de croissance ou de déclin, facteurs d\'évolution',
      'Barrières à l\'entrée : capital requis, technologie, brevets, réglementation, fidélité clients',
      'Méthode : toujours s\'appuyer sur les chiffres des annexes pour chaque dimension'
    ],
    auteurs: [],
    sujetsRef: ['novefi-2023', 'idemia-nc-2023', 'ref-2024', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'analyse-marche-q1',
        question: 'Quelles sont les 5 dimensions d\'une analyse de marché ?',
        reponse: 'Offre, Demande, Structure, Perspectives, Barrières à l\'entrée.'
      },
      {
        id: 'analyse-marche-q2',
        question: 'Comment décrire l\'offre dans une analyse de marché ?',
        reponse: 'Identifier les acteurs présents, le niveau de concentration (oligopole, monopole), les leaders et leurs parts de marché.'
      },
      {
        id: 'analyse-marche-q3',
        question: 'Qu\'est-ce qu\'une barrière à l\'entrée ?',
        reponse: 'Obstacle limitant l\'arrivée de nouveaux concurrents : capital élevé, technologie complexe, brevets, réglementation stricte (ex: immatriculation PDP pour DIGIM).'
      },
      {
        id: 'analyse-marche-q4',
        question: 'Comment décrire la structure d\'un marché ?',
        reponse: 'Préciser si c\'est un oligopole (peu d\'acteurs dominants), un monopole, ou un marché concurrentiel. Donner les parts de marché si disponibles.'
      },
      {
        id: 'analyse-marche-q5',
        question: 'Quelle est la différence entre offre et demande sur le marché du cloud ?',
        reponse: 'Offre : dominée par AWS (46%), Azure (17%), Google Cloud (8%) + alternatives dont OVHcloud. Demande : entreprises de toutes tailles, croissance forte (~35%/an).'
      },
      {
        id: 'analyse-marche-q6',
        question: 'Que signifie \'marché en oligopole\' ?',
        reponse: 'Peu d\'entreprises (offreurs) dominent le marché. Exemple : cloud dominé par 3 acteurs américains qui captent 71% du marché français.'
      }
    ]
  },

  {
    id: 'parties-prenantes',
    tier: 1,
    matiere: 'eco',
    titre: 'Les parties prenantes',
    sousTitre: 'Freeman — influence directe et indirecte',
    cours: 'Les parties prenantes (PP) sont tous les acteurs qui ont un intérêt dans les décisions de l\'entreprise ou qui sont affectés par elles. Freeman distingue les PP de 1er rang (influence directe : actionnaires, salariés, clients, fournisseurs, banques, concurrents) des PP de 2nd rang (influence indirecte : État, collectivités, ONG, syndicats, associations). Crozier ajoute que les structures doivent devenir flexibles (en réseau) pour répondre aux attentes de toutes les parties prenantes.',
    pointsCles: [
      'PP de 1er rang (influence DIRECTE) : actionnaires, salariés, clients, fournisseurs, distributeurs, banques, concurrents',
      'PP de 2nd rang (influence INDIRECTE) : État, collectivités, ONG, syndicats, associations, médias',
      'Le méso-environnement = acteurs sur lesquels l\'entreprise N\'A PAS d\'influence (sinon c\'est micro)',
      'Citer Freeman pour les parties prenantes + Crozier pour les structures flexibles',
      'Réflexe : toujours identifier le rang (1er ou 2nd) de chaque PP identifiée'
    ],
    auteurs: [
      { nom: 'Freeman', theorie: 'Théorie des parties prenantes — PP 1er rang (directe) vs 2nd rang (indirecte)' },
      { nom: 'Crozier', theorie: 'Les structures doivent devenir flexibles et en réseau pour répondre aux parties prenantes' }
    ],
    sujetsRef: ['packitoo-2022', 'agricoopia-nc-2022', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'parties-prenantes-q1',
        question: 'Qui sont les PP de 1er rang selon Freeman ?',
        reponse: 'Acteurs à influence DIRECTE sur l\'entreprise : actionnaires/dirigeants, salariés, clients, fournisseurs, distributeurs, banques, concurrents.'
      },
      {
        id: 'parties-prenantes-q2',
        question: 'Qui sont les PP de 2nd rang selon Freeman ?',
        reponse: 'Acteurs à influence INDIRECTE : État, collectivités, ONG, syndicats, associations, médias, organisations professionnelles.'
      },
      {
        id: 'parties-prenantes-q3',
        question: 'Quelle est la différence entre méso et micro-environnement ?',
        reponse: 'Méso = acteurs sans influence directe de l\'entreprise (syndicats, État, ONG). Micro = acteurs en relation directe (fournisseurs, clients, concurrents) — Porter.'
      },
      {
        id: 'parties-prenantes-q4',
        question: 'Pourquoi citer Freeman à l\'examen ?',
        reponse: 'Freeman théorise la distinction PP 1er/2nd rang. Sa citation valide le barème sur les questions \'identifier les parties prenantes\'.'
      },
      {
        id: 'parties-prenantes-q5',
        question: 'Donne un exemple de PP dans le sujet OVHcloud 2025.',
        reponse: 'PP 1er rang : clients (entreprises hébergées), salariés (2800), actionnaires. PP 2nd rang : CNIL (régulation), État (politique cloud souverain), ONG environnementales.'
      },
      {
        id: 'parties-prenantes-q6',
        question: 'Que dit Crozier sur les structures ?',
        reponse: 'Crozier préconise des structures flexibles, en réseau et par projet, pour répondre aux attentes des parties prenantes dans un environnement incertain.'
      }
    ]
  },

  {
    id: 'strategies-globales',
    tier: 1,
    matiere: 'management',
    titre: 'Les stratégies globales',
    sousTitre: 'Spécialisation vs Diversification — Ansoff · Chandler',
    cours: 'La stratégie globale définit le périmètre d\'activité de l\'entreprise. Selon Ansoff et Chandler, l\'entreprise choisit entre la spécialisation (se concentrer sur un seul métier pour développer l\'expertise) et la diversification (se déployer sur plusieurs métiers pour répartir les risques). La question demande TOUJOURS d\'analyser les avantages ET les risques. Chandler : « la structure doit s\'adapter à la stratégie ».',
    pointsCles: [
      'Spécialisation ++ : économies d\'échelle, maîtrise du métier, position de leader, avantage concurrentiel',
      'Spécialisation -- : offre limitée, dépendance à un seul marché, sensible aux variations de la demande',
      'Diversification concentrique : autour de l\'activité existante (synergies)',
      'Diversification conglomérale : activités indépendantes (répartition maximale des risques)',
      'Diversification ++ : répartition des risques, compétitivité, innovation, limitation du déclin',
      'Diversification -- : risques financiers et humains, dispersion, difficultés de coordination',
      'Citer Ansoff pour la matrice stratégique + Chandler pour structure = stratégie'
    ],
    auteurs: [
      { nom: 'Ansoff', theorie: '2 stratégies globales : spécialisation et diversification (concentrique/conglomérale)' },
      { nom: 'Chandler', theorie: 'La structure doit s\'adapter à la stratégie — pas l\'inverse' }
    ],
    sujetsRef: [
      'packitoo-2022',
      'agricoopia-nc-2022',
      'novefi-2023',
      'idemia-nc-2023',
      'ref-2024',
      'purecontrol-s-2024',
      'digim-2025',
      'ovhcloud-nc-2025'
    ],
    cards: [
      {
        id: 'strategies-globales-q1',
        question: 'Qu\'est-ce que la spécialisation ?',
        reponse: 'Stratégie consistant à se concentrer sur un seul métier pour en développer l\'expertise et l\'avantage concurrentiel. Avantages : économies d\'échelle, maîtrise. Risque : dépendance à un seul marché.'
      },
      {
        id: 'strategies-globales-q2',
        question: 'Qu\'est-ce que la diversification ?',
        reponse: 'Stratégie consistant à se déployer sur plusieurs domaines d\'activité. Concentrique (autour du métier de base) ou conglomérale (activités totalement indépendantes).'
      },
      {
        id: 'strategies-globales-q3',
        question: 'Quelle est la différence entre diversification concentrique et conglomérale ?',
        reponse: 'Concentrique : diversification autour du métier existant (synergies). Conglomérale : activités totalement indépendantes (NOVEFI rachète des éditeurs médicaux).'
      },
      {
        id: 'strategies-globales-q4',
        question: 'Pourquoi NOVEFI choisit-elle la diversification en 2021 ?',
        reponse: 'En rachetant ASthen (imagerie médicale), NOVEFI se diversifie de façon concentrique : le secteur santé est stratégique, la donnée de santé très sensible.'
      },
      {
        id: 'strategies-globales-q5',
        question: 'Quels sont les avantages de la spécialisation ?',
        reponse: 'Économies d\'échelle, limitation des coûts, position de leader, avantage concurrentiel fort, expertise reconnue.'
      },
      {
        id: 'strategies-globales-q6',
        question: 'Quels sont les risques de la diversification ?',
        reponse: 'Risques financiers et humains importants, dispersion des ressources, difficultés de coordination, risque de perdre le cœur de métier.'
      },
      {
        id: 'strategies-globales-q7',
        question: 'Que dit Chandler sur stratégie et structure ?',
        reponse: 'Chandler : \'La structure doit s\'adapter à la stratégie.\' Si l\'entreprise change de stratégie, elle doit réorganiser sa structure en conséquence.'
      },
      {
        id: 'strategies-globales-q8',
        question: 'Quels auteurs citer pour les stratégies globales ?',
        reponse: 'Ansoff pour les stratégies (spécialisation/diversification) et Chandler pour la relation structure-stratégie.'
      }
    ]
  },

  {
    id: 'strategies-perimetre',
    tier: 1,
    matiere: 'management',
    titre: 'Stratégie de périmètre d\'activité',
    sousTitre: 'Intégration vs Impartition / Externalisation',
    cours: 'La stratégie de périmètre définit les activités que l\'entreprise réalise elle-même (intégration) ou confie à des prestataires (impartition/externalisation). L\'intégration consiste à internaliser une activité de la chaîne de valeur pour en maîtriser le processus et les marges. L\'impartition consiste à faire-faire une activité non stratégique par un prestataire spécialisé. Le choix dépend de la nature de l\'activité, des coûts et des compétences disponibles.',
    pointsCles: [
      'Intégration ++ : contrôle total, maîtrise des marges, qualité maîtrisée, CA plus élevé',
      'Intégration -- : moins de flexibilité et réactivité, investissements lourds, maîtriser de nouveaux métiers',
      'Impartition/Externalisation ++ : focus sur le cœur de métier, flexibilité, souplesse, économies',
      'Impartition -- : dépendance au prestataire, perte de compétences, contrôle plus difficile, coûts sociaux',
      'Formes d\'externalisation : sous-traitance, franchise, concession, joint-venture, GIE',
      'OVHcloud pratique l\'intégration verticale (fabrique ses propres serveurs et datacenters)'
    ],
    auteurs: [],
    sujetsRef: ['agricoopia-nc-2022', 'novefi-2023', 'ovhcloud-nc-2025', 'ref-2024'],
    cards: [
      {
        id: 'strategies-perimetre-q1',
        question: 'Qu\'est-ce que l\'intégration ?',
        reponse: 'Internaliser une activité de la chaîne de valeur pour la maîtriser soi-même. Avantages : contrôle, marges, qualité. Risques : investissements lourds, moins de flexibilité.'
      },
      {
        id: 'strategies-perimetre-q2',
        question: 'Qu\'est-ce que l\'impartition / externalisation ?',
        reponse: 'Confier une activité non stratégique à un prestataire spécialisé. Avantages : souplesse, focus cœur de métier. Risques : dépendance, perte de compétences.'
      },
      {
        id: 'strategies-perimetre-q3',
        question: 'Pourquoi OVHcloud choisit l\'intégration verticale ?',
        reponse: 'OVHcloud fabrique ses propres serveurs, datacenters et réseaux. Cela lui donne contrôle total, meilleure sécurité, économies d\'échelle et agilité opérationnelle.'
      },
      {
        id: 'strategies-perimetre-q4',
        question: 'Quelles sont les formes d\'externalisation ?',
        reponse: 'Sous-traitance, franchise, concession, joint-venture (co-entreprise), GIE (groupement d\'intérêt économique).'
      },
      {
        id: 'strategies-perimetre-q5',
        question: 'Pourquoi Agricoopia envisage l\'impartition pour son SI ?',
        reponse: 'Son SI n\'est pas assez performant pour intégrer la plateforme Ferme.agri — faire appel à Gestion+ (prestataire) permet d\'accéder à des compétences spécifiques sans les développer en interne.'
      },
      {
        id: 'strategies-perimetre-q6',
        question: 'Quels sont les risques de l\'impartition ?',
        reponse: 'Dépendance au prestataire, perte de compétences internes, contrôle difficile, coûts sociaux si transfert de personnel, risque de rupture abusive des pourparlers.'
      },
      {
        id: 'strategies-perimetre-q7',
        question: 'Comment choisir entre intégration et impartition ?',
        reponse: 'Intégration si l\'activité est stratégique et génératrice d\'avantage concurrentiel. Impartition si l\'activité est non stratégique, coûteuse à maîtriser ou si un prestataire fait mieux.'
      }
    ]
  },

  {
    id: 'strategies-domaine',
    tier: 1,
    matiere: 'management',
    titre: 'Stratégies de domaine (DAS)',
    sousTitre: 'Domination par les coûts · Différenciation · Focalisation — Porter',
    cours: 'La stratégie de domaine (ou stratégie concurrentielle) définit comment l\'entreprise se positionne face à ses concurrents sur un domaine d\'activité stratégique (DAS). Porter identifie 3 stratégies : la domination par les coûts (prix le plus bas du marché), la différenciation (se distinguer par la qualité, l\'innovation ou l\'image) et la focalisation (cibler un segment précis du marché). Chaque stratégie vise à créer un avantage concurrentiel durable.',
    pointsCles: [
      'Domination par les coûts ++ : rentabilité, barrière à l\'entrée, réduit la concurrence. -- : guerre des prix, investissements lourds',
      'Différenciation ++ : évite la concurrence directe, crée des barrières, fidélisation. -- : imitation, coût élevé de maintien',
      'Focalisation ++ : peu de concurrence, fidélisation, connaissance fine du client. -- : dépendance au segment, risque féroce si concurrent entre sur la niche',
      'Porter : domination coûts vs différenciation = deux sources d\'avantage concurrentiel',
      'DAS = domaine d\'activité stratégique = un couple produit/marché homogène',
      'REF+ pratique la différenciation (expertise SEO pointue, obligation de résultat)'
    ],
    auteurs: [
      { nom: 'Porter', theorie: 'Avantage concurrentiel : domination par les coûts / différenciation / focalisation (DAS)' }
    ],
    sujetsRef: ['ref-2024', 'packitoo-2022', 'idemia-nc-2023', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'strategies-domaine-q1',
        question: 'Quelles sont les 3 stratégies de domaine selon Porter ?',
        reponse: '1. Domination par les coûts (prix le plus bas) 2. Différenciation (qualité, innovation, image) 3. Focalisation (niche de marché).'
      },
      {
        id: 'strategies-domaine-q2',
        question: 'Qu\'est-ce qu\'un DAS ?',
        reponse: 'Domaine d\'Activité Stratégique : couple produit/marché homogène, qui fait face à un même ensemble de concurrents.'
      },
      {
        id: 'strategies-domaine-q3',
        question: 'Comment REF+ se différencie-t-elle de ses concurrents ?',
        reponse: 'REF+ pratique la différenciation : expertise pointue en référencement naturel, obligation de résultat contractuelle, formations régulières de ses salariés.'
      },
      {
        id: 'strategies-domaine-q4',
        question: 'Quels sont les risques de la domination par les coûts ?',
        reponse: 'Guerre des prix avec les concurrents, investissements lourds pour maintenir les coûts bas, marges comprimées, peu de différenciation.'
      },
      {
        id: 'strategies-domaine-q5',
        question: 'Pourquoi IDEMIA choisit-elle la différenciation ?',
        reponse: 'IDEMIA se distingue par l\'innovation technologique (63 demandes de brevets en 2019, 1500 familles de brevets actives) et l\'expertise biométrique unique.'
      },
      {
        id: 'strategies-domaine-q6',
        question: 'Que signifie la focalisation ?',
        reponse: 'Cibler un segment de marché précis (niche) pour en devenir le spécialiste incontesté. Peu de concurrence directe mais forte dépendance au segment.'
      },
      {
        id: 'strategies-domaine-q7',
        question: 'Quelle est la différence entre stratégie globale et stratégie de domaine ?',
        reponse: 'Stratégie globale = périmètre d\'activité de l\'entreprise (quels domaines ?). Stratégie de domaine = comment être compétitif SUR un domaine donné.'
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TIER 2
  // ─────────────────────────────────────────────
  {
    id: 'motivation-maslow',
    tier: 2,
    matiere: 'management',
    titre: 'La pyramide de Maslow',
    sousTitre: '5 besoins hiérarchisés — de la survie à l\'accomplissement',
    cours: 'Abraham Maslow théorise que la motivation humaine repose sur une hiérarchie de 5 besoins. Un besoin d\'ordre supérieur n\'est motivant que si les besoins inférieurs sont satisfaits. L\'employeur qui veut fidéliser ses salariés doit progressivement satisfaire chaque niveau. À l\'examen, utiliser Maslow pour analyser les leviers de motivation mis en œuvre par une entreprise, en les rattachant à un niveau précis de la pyramide.',
    pointsCles: [
      '1. Physiologiques : salaire suffisant pour vivre (besoins primaires)',
      '2. Sécurité : emploi stable, bonnes conditions de travail, environnement sécurisé, mutuelle',
      '3. Appartenance : intégration à l\'équipe, cohésion, culture d\'entreprise, sentiment d\'appartenir',
      '4. Estime : reconnaissance, poste valorisant, responsabilités, feedback positif',
      '5. Réalisation de soi : autonomie, développement des compétences, progression de carrière',
      'Réflexe examen : identifier quel levier répond à quel niveau de la pyramide'
    ],
    auteurs: [
      { nom: 'Maslow', theorie: 'Pyramide des besoins — 5 niveaux hiérarchisés (physiologiques → réalisation de soi)' }
    ],
    sujetsRef: ['agricoopia-nc-2022', 'idemia-nc-2023', 'ref-2024'],
    cards: [
      {
        id: 'motivation-maslow-q1',
        question: 'Quels sont les 5 niveaux de la pyramide de Maslow ?',
        reponse: '1. Physiologiques (salaire) 2. Sécurité (emploi stable) 3. Appartenance (équipe, culture) 4. Estime (reconnaissance) 5. Réalisation de soi (autonomie, évolution).'
      },
      {
        id: 'motivation-maslow-q2',
        question: 'Selon Maslow, à quelle condition un besoin supérieur devient-il motivant ?',
        reponse: 'Uniquement si les besoins inférieurs sont satisfaits. On ne peut pas motiver par la réalisation de soi si les besoins physiologiques ne sont pas couverts.'
      },
      {
        id: 'motivation-maslow-q3',
        question: 'Comment IDEMIA répond-elle aux besoins de niveau 3 (appartenance) ?',
        reponse: 'IDEMIA met en avant les valeurs collectives, les séminaires de motivation, l\'esprit d\'équipe et la culture d\'entreprise axée sur l\'autonomie et la solidarité.'
      },
      {
        id: 'motivation-maslow-q4',
        question: 'À quel niveau de Maslow correspond le salaire ?',
        reponse: 'Niveau 1 (besoins physiologiques) : le salaire permet de couvrir les besoins vitaux. Mais il peut aussi contribuer au niveau 2 (sécurité) si stable.'
      },
      {
        id: 'motivation-maslow-q5',
        question: 'Comment la GPEC répond-elle au niveau 5 de Maslow ?',
        reponse: 'La GPEC permet aux salariés d\'évoluer en compétences et de se projeter vers des postes à responsabilités → besoin de réalisation de soi.'
      },
      {
        id: 'motivation-maslow-q6',
        question: 'Quelle est la limite de la théorie de Maslow ?',
        reponse: 'Elle est trop rigide : dans la réalité, plusieurs besoins coexistent simultanément. La hiérarchie n\'est pas toujours respectée (un artiste peut chercher la réalisation de soi avant la sécurité).'
      },
      {
        id: 'motivation-maslow-q7',
        question: 'Comment citer Maslow à l\'examen ?',
        reponse: '« Selon Maslow, les salariés sont motivés par la satisfaction progressive de 5 besoins hiérarchisés. Le levier X répond au besoin de [niveau] car... »'
      }
    ]
  },

  {
    id: 'motivation-herzberg',
    tier: 2,
    matiere: 'management',
    titre: 'La théorie bi-factorielle d\'Herzberg',
    sousTitre: 'Facteurs d\'hygiène vs facteurs moteurs',
    cours: 'Frederick Herzberg distingue deux types de facteurs qui influencent la satisfaction au travail. Les facteurs d\'hygiène (salaire, conditions de travail, relations avec la hiérarchie) évitent l\'insatisfaction mais ne créent pas la motivation. Les facteurs moteurs (reconnaissance, responsabilité, accomplissement, évolution de carrière) créent véritablement la motivation et la satisfaction. À l\'examen, ne pas confondre les deux catégories — le salaire seul n\'est pas un facteur de motivation !',
    pointsCles: [
      'Facteurs d\'hygiène (évitent l\'insatisfaction) : salaire, conditions de travail, sécurité, relations avec collègues et hiérarchie, politique de l\'entreprise',
      'Facteurs moteurs (créent la motivation) : reconnaissance, responsabilité donnée, intérêt pour le travail, accomplissement de soi, avancement',
      'Piège : augmenter le salaire n\'est pas un levier de motivation selon Herzberg — c\'est un facteur d\'hygiène',
      'REF+ : le salaire est cité comme 1ère motivation des SEO → Herzberg dirait que c\'est un facteur d\'hygiène, les facteurs moteurs sont les responsabilités et l\'intérêt des missions',
      'Citer Herzberg pour les questions sur la fidélisation et l\'attractivité'
    ],
    auteurs: [
      { nom: 'Herzberg', theorie: 'Théorie bi-factorielle : facteurs d\'hygiène (évitent l\'insatisfaction) vs facteurs moteurs (créent la motivation)' }
    ],
    sujetsRef: ['agricoopia-nc-2022', 'idemia-nc-2023', 'ref-2024'],
    cards: [
      {
        id: 'motivation-herzberg-q1',
        question: 'Quelle est la distinction centrale de la théorie d\'Herzberg ?',
        reponse: 'Facteurs d\'hygiène (évitent l\'insatisfaction) vs facteurs moteurs (créent la motivation). Les deux catégories sont distinctes et indépendantes.'
      },
      {
        id: 'motivation-herzberg-q2',
        question: 'Donnez 3 exemples de facteurs d\'hygiène selon Herzberg.',
        reponse: 'Salaire, conditions de travail, sécurité de l\'emploi, relations avec les collègues, politique de l\'entreprise.'
      },
      {
        id: 'motivation-herzberg-q3',
        question: 'Donnez 3 exemples de facteurs moteurs selon Herzberg.',
        reponse: 'Reconnaissance du travail, responsabilités données, intérêt des missions, accomplissement, évolution de carrière.'
      },
      {
        id: 'motivation-herzberg-q4',
        question: 'Pourquoi le salaire seul ne suffit-il pas à motiver selon Herzberg ?',
        reponse: 'Le salaire est un facteur d\'hygiène : son absence crée de l\'insatisfaction, mais sa présence n\'engendre pas de motivation. Seuls les facteurs moteurs créent la motivation.'
      },
      {
        id: 'motivation-herzberg-q5',
        question: 'Comment utiliser Herzberg pour conseiller REF+ sur ses leviers de motivation ?',
        reponse: 'Assurer d\'abord les facteurs d\'hygiène (salaire compétitif, bonnes conditions), puis activer les facteurs moteurs : autonomie dans les missions, responsabilités stratégiques, télétravail, évolution de carrière.'
      },
      {
        id: 'motivation-herzberg-q6',
        question: 'Quelle est la différence entre Maslow et Herzberg ?',
        reponse: 'Maslow : hiérarchie de besoins (satisfaire du bas vers le haut). Herzberg : deux catégories distinctes indépendantes (hygiène ≠ motivation). Herzberg est plus utile pour les leviers RH.'
      },
      {
        id: 'motivation-herzberg-q7',
        question: 'Comment citer Herzberg dans un cas pratique de motivation ?',
        reponse: '« Selon Herzberg, X est un facteur d\'hygiène (évite l\'insatisfaction) / un facteur moteur (crée la motivation). Pour fidéliser ses salariés, l\'entreprise devrait prioritairement... »'
      }
    ]
  },

  {
    id: 'marche-travail-numerique',
    tier: 2,
    matiere: 'eco',
    titre: 'Le marché du travail du secteur numérique',
    sousTitre: 'Pénurie, fort turn-over, leviers d\'attractivité',
    cours: 'Le secteur informatique et numérique connaît un fort déséquilibre entre offre et demande de main-d\'œuvre qualifiée. La demande explose (transformation digitale, cloud, IA, cybersécurité) mais l\'offre est insuffisante : il manque chaque année 10 000 ingénieurs en France selon Numeum. Ce déséquilibre se traduit par une forte hausse des salaires et un turn-over élevé. Les entreprises doivent multiplier les leviers pour attirer et fidéliser les talents.',
    pointsCles: [
      'Pénurie de compétences : 75 000 postes non pourvus en 2018, 230 000 postes d\'ici 2025 selon Numeum',
      'Fort turn-over : les profils IT changent d\'employeur fréquemment (+5-10% de salaire à chaque changement)',
      'Leviers d\'attractivité : rémunération compétitive, télétravail, formation, marque employeur, QVT, RSE',
      'Leviers de fidélisation : GPEC, évolutions internes, intéressement, participation, communication interne',
      'Réflexe : rattacher les leviers à Maslow (niveau concerné) et Herzberg (hygiène ou moteur)',
      'Métiers très demandés : développeurs, cybersécurité, data scientists, chefs de projet IT'
    ],
    auteurs: [
      { nom: 'Maslow', theorie: 'Pyramide des besoins — identifier le niveau auquel répond chaque levier RH' },
      { nom: 'Herzberg', theorie: 'Facteurs d\'hygiène vs moteurs pour fidéliser les talents IT' }
    ],
    sujetsRef: ['agricoopia-nc-2022', 'novefi-2023', 'idemia-nc-2023', 'ref-2024'],
    cards: [
      {
        id: 'marche-travail-numerique-q1',
        question: 'Pourquoi le marché du travail IT est-il déséquilibré ?',
        reponse: 'La demande explose (transformation digitale, cloud, IA, cybersécurité) mais l\'offre de profils qualifiés est insuffisante. Il manque ~10 000 ingénieurs/an en France (Numeum).'
      },
      {
        id: 'marche-travail-numerique-q2',
        question: 'Quels sont les leviers pour attirer des talents IT ?',
        reponse: 'Rémunération compétitive, télétravail flexible, formation continue, marque employeur, qualité de vie au travail (QVT), démarche RSE.'
      },
      {
        id: 'marche-travail-numerique-q3',
        question: 'Quels sont les leviers pour fidéliser des salariés IT ?',
        reponse: 'GPEC/GEPP (évolution de carrière), évolutions internes, intéressement et participation, communication interne, prime de performance, reconnaissance.'
      },
      {
        id: 'marche-travail-numerique-q4',
        question: 'Pourquoi le turn-over est-il élevé dans le secteur IT ?',
        reponse: 'Les profils sont très demandés et multiplement sollicités. Changer d\'employeur permet d\'obtenir +5-10% de salaire. Les entreprises doivent travailler leur attractivité.'
      },
      {
        id: 'marche-travail-numerique-q5',
        question: 'Comment une entreprise peut-elle réduire son turn-over IT ?',
        reponse: 'Activer les facteurs moteurs d\'Herzberg : responsabilités, autonomie, intérêt des missions, évolution de carrière. Et les besoins d\'estime et réalisation de Maslow.'
      },
      {
        id: 'marche-travail-numerique-q6',
        question: 'Quelle question type ce sujet génère-t-il à l\'examen ?',
        reponse: 'Expliquer les difficultés de recrutement d\'une ESN/DSI puis proposer des leviers de motivation (Maslow + Herzberg) pour attirer et fidéliser.'
      }
    ]
  },

  {
    id: 'formation-gpec',
    tier: 2,
    matiere: 'management',
    titre: 'Formation professionnelle & GEPP',
    sousTitre: 'Obligation légale · CPF · VAE · Plan de développement des compétences',
    cours: 'L\'employeur a une obligation légale de former régulièrement ses salariés pour deux finalités : l\'adaptation au poste de travail et le maintien de l\'employabilité. La GEPP (Gestion des Emplois et des Parcours Professionnels, ancienne GPEC) est une démarche prévisionnelle pour anticiper les besoins futurs en compétences et adapter les effectifs. Elle comprend 3 étapes : analyser les besoins/ressources, mettre en évidence les écarts, mettre en œuvre des actions.',
    pointsCles: [
      'Obligation légale : adaptation au poste + maintien de l\'employabilité (Code du travail)',
      'À l\'initiative du SALARIÉ : CPF, CPF de transition pro, bilan de compétences, VAE',
      'À l\'initiative de l\'EMPLOYEUR : plan de développement des compétences',
      'GEPP/GPEC : anticipation des besoins → réduction des écarts → actions internes (mobilité, formation) ou externes (recrutements)',
      'Lien avec clause de dédit-formation : l\'employeur finance une formation spécifique → le salarié s\'engage à rester',
      'Citer la GEPP comme outil de fidélisation et de maintien de la compétitivité'
    ],
    auteurs: [],
    sujetsRef: ['agricoopia-nc-2022', 'idemia-nc-2023', 'digim-2025', 'novefi-2023'],
    cards: [
      {
        id: 'formation-gpec-q1',
        question: 'Quelle est l\'obligation légale de l\'employeur en matière de formation ?',
        reponse: 'L\'employeur doit former régulièrement ses salariés pour l\'adaptation au poste ET le maintien de l\'employabilité. C\'est une obligation légale (Code du travail).'
      },
      {
        id: 'formation-gpec-q2',
        question: 'Citez 4 dispositifs de formation à l\'initiative du salarié.',
        reponse: 'CPF (Compte Personnel de Formation), CPF de transition professionnelle, bilan de compétences, VAE (Validation des Acquis de l\'Expérience).'
      },
      {
        id: 'formation-gpec-q3',
        question: 'Quel est le dispositif de formation à l\'initiative de l\'employeur ?',
        reponse: 'Le plan de développement des compétences (anciennement plan de formation). L\'employeur définit les formations nécessaires pour l\'entreprise.'
      },
      {
        id: 'formation-gpec-q4',
        question: 'Qu\'est-ce que la GEPP ?',
        reponse: 'Gestion des Emplois et des Parcours Professionnels (ancienne GPEC). Démarche en 3 étapes : analyser besoins/ressources → identifier les écarts → mettre en œuvre des actions (formation, mobilité, recrutement).'
      },
      {
        id: 'formation-gpec-q5',
        question: 'Quel est le lien entre GEPP et clause de dédit-formation ?',
        reponse: 'La GEPP identifie les besoins en compétences spécifiques. Pour les financer, l\'employeur peut insérer une clause de dédit-formation qui oblige le salarié formé à rester un certain temps.'
      },
      {
        id: 'formation-gpec-q6',
        question: 'Comment la GEPP est-elle un outil de fidélisation ?',
        reponse: 'En anticipant les évolutions de carrière des salariés et en leur proposant des formations, la GEPP répond aux besoins de réalisation de soi (Maslow niveau 5) et aux facteurs moteurs d\'Herzberg.'
      }
    ]
  },

  {
    id: 'clause-non-concurrence',
    tier: 2,
    matiere: 'droit',
    titre: 'La clause de non-concurrence',
    sousTitre: '5 conditions CUMULATIVES — une seule manquante = clause nulle',
    cours: 'La clause de non-concurrence est une clause insérée dans le contrat de travail qui interdit au salarié, après la rupture du contrat, d\'exercer une activité concurrente. Pour être valide, elle doit respecter 5 conditions cumulatives définies par la jurisprudence. Si une seule condition est absente, la clause est nulle et le salarié peut ignorer l\'interdiction.',
    pointsCles: [
      '1. Limitée dans le TEMPS (durée raisonnable — 4 ans = trop long selon la jurisprudence)',
      '2. Limitée dans l\'ESPACE (zone géographique définie — le monde entier = nulle selon Cour de cassation 2021)',
      '3. Limitée à une ACTIVITÉ PRÉCISE (pas de termes généraux)',
      '4. INDISPENSABLE à la protection des intérêts légitimes de l\'entreprise',
      '5. Assortie d\'une CONTREPARTIE FINANCIÈRE versée au salarié après la rupture',
      'Toutes les conditions sont CUMULATIVES : une seule absente = clause nulle'
    ],
    auteurs: [],
    sujetsRef: ['agricoopia-nc-2022', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'clause-non-concurrence-q1',
        question: 'Quelles sont les 5 conditions cumulatives de la clause de non-concurrence ?',
        reponse: '1. Limitée dans le temps 2. Limitée dans l\'espace 3. Limitée à une activité précise 4. Indispensable aux intérêts légitimes de l\'entreprise 5. Assortie d\'une contrepartie financière.'
      },
      {
        id: 'clause-non-concurrence-q2',
        question: 'Que se passe-t-il si une condition est absente ?',
        reponse: 'La clause est nulle. Toutes les conditions sont cumulatives : une seule manquante suffit à invalider la clause entière.'
      },
      {
        id: 'clause-non-concurrence-q3',
        question: 'Quel est le piège classique de la clause Agricoopia 2022 ?',
        reponse: 'La durée est de 4 ans — trop longue selon la jurisprudence. La zone est le Sud-Ouest de la France (acceptable). La contrepartie est 30% du salaire mensuel (acceptable). Problème : durée excessive → clause nulle.'
      },
      {
        id: 'clause-non-concurrence-q4',
        question: 'La clause non-concurrence d\'OVHcloud 2025 est-elle valide ?',
        reponse: 'La clause de M. Casares : 1 an (OK), région Hauts-de-France (OK), développeur logiciels (activité précise OK), intérêts légitimes (OK), indemnité 2 mois/année de présence plafonnée à 6 mois (OK) → clause valide.'
      },
      {
        id: 'clause-non-concurrence-q5',
        question: 'L\'absence de contrepartie financière rend-elle la clause nulle ?',
        reponse: 'Oui. La contrepartie financière est obligatoire. Une clause sans contrepartie est nulle même si les autres conditions sont réunies (arrêt Cour de cassation).'
      },
      {
        id: 'clause-non-concurrence-q6',
        question: 'Comment vérifier la validité d\'une clause de non-concurrence ?',
        reponse: 'Dérouler les 5 étapes de la méthodologie juridique : Faits → Problème de droit → Principe (lister les 5 conditions) → Application (vérifier chaque condition) → Conclusion.'
      },
      {
        id: 'clause-non-concurrence-q7',
        question: 'Que dit la Cour de cassation du 8 avril 2021 sur les clauses sans limite géographique ?',
        reponse: 'Une clause de non-concurrence non délimitée dans l\'espace (ex: \'le monde entier\') est nulle car elle ne remplit pas la condition de limitation géographique.'
      },
      {
        id: 'clause-non-concurrence-q8',
        question: 'La clause de non-concurrence joue-t-elle en cas de licenciement ?',
        reponse: 'Oui, elle joue en cas de rupture quelle qu\'en soit la cause (démission, licenciement, rupture conventionnelle), sauf si l\'employeur décide de la lever (et renonce à la contrepartie).'
      }
    ]
  },

  {
    id: 'clause-dedit-formation',
    tier: 2,
    matiere: 'droit',
    titre: 'La clause de dédit-formation',
    sousTitre: '6 conditions de validité — piège : durée excessive ou remboursement du salaire',
    cours: 'La clause de dédit-formation est une convention signée avant une formation spécifique, par laquelle le salarié s\'engage à rester dans l\'entreprise pendant une durée déterminée après la formation. En cas de démission avant ce terme, le salarié doit rembourser les frais de formation. Pour être valide, elle doit respecter 6 conditions. Le piège classique à l\'examen : une clause qui prévoit le remboursement du salaire perçu (interdit) ou une durée d\'engagement excessive (8 ans = nulle).',
    pointsCles: [
      '1. Écrite, par convention signée AVANT la formation',
      '2. Vise une formation PRÉCISE (pas de termes généraux)',
      '3. Formation AU-DELÀ de l\'obligation légale, financée par l\'employeur (reste à charge)',
      '4. Montant du remboursement = frais RÉELS engagés, jamais davantage (pas le salaire !)',
      '5. Durée d\'engagement PROPORTIONNÉE (jurisprudence : 2 à 5 ans maximum)',
      '6. Ne joue QU\'EN CAS DE DÉMISSION (pas rupture conventionnelle, pas licenciement — sauf faute grave/lourde)'
    ],
    auteurs: [],
    sujetsRef: ['idemia-nc-2023', 'digim-2025'],
    cards: [
      {
        id: 'clause-dedit-formation-q1',
        question: 'Quelles sont les 6 conditions de validité de la clause de dédit-formation ?',
        reponse: '1. Écrite, signée AVANT la formation 2. Vise une formation précise 3. Au-delà de l\'obligation légale, financement employeur 4. Remboursement = frais réels uniquement 5. Durée proportionnée (2-5 ans) 6. Ne joue qu\'en cas de démission.'
      },
      {
        id: 'clause-dedit-formation-q2',
        question: 'Quel est le piège classique de la clause de dédit-formation à l\'examen ?',
        reponse: 'Deux pièges récurrents : 1) Durée d\'engagement de 8 ans → excessive → clause nulle. 2) Remboursement incluant le salaire perçu → interdit → clause nulle.'
      },
      {
        id: 'clause-dedit-formation-q3',
        question: 'La clause de dédit-formation s\'applique-t-elle en cas de licenciement ?',
        reponse: 'Non, sauf licenciement pour faute grave ou lourde. En cas de licenciement sans faute grave, l\'employeur ne peut pas réclamer le remboursement.'
      },
      {
        id: 'clause-dedit-formation-q4',
        question: 'La clause de dédit-formation s\'applique-t-elle en cas de rupture conventionnelle ?',
        reponse: 'Non. La rupture conventionnelle est à l\'initiative commune des deux parties — l\'employeur souhaitant aussi mettre fin au contrat, il ne peut pas réclamer le remboursement.'
      },
      {
        id: 'clause-dedit-formation-q5',
        question: 'Analysez la clause DIGIM 2025 : 8 ans, remboursement des frais réels, formation 2 mois.',
        reponse: 'La durée de 8 ans est disproportionnée par rapport à une formation de 2 mois (jurisprudence : 2-5 ans). La clause est nulle sur ce point, même si le montant est correct.'
      },
      {
        id: 'clause-dedit-formation-q6',
        question: 'Analysez la clause IDEMIA : 2 ans d\'engagement, remboursement dégressif des frais réels.',
        reponse: '2 ans pour une formation d\'un mois = proportionné. Remboursement des frais réels seulement = conforme. Signée avant la formation = conforme. La clause est valide.'
      },
      {
        id: 'clause-dedit-formation-q7',
        question: 'La formation doit-elle être au-delà de l\'obligation légale ?',
        reponse: 'Oui. Si la formation fait partie de l\'obligation légale de formation (adaptation au poste), l\'employeur ne peut pas insérer de clause de dédit-formation.'
      },
      {
        id: 'clause-dedit-formation-q8',
        question: 'Quelle est la différence entre clause de non-concurrence et clause de dédit-formation ?',
        reponse: 'Non-concurrence : interdit de travailler pour un concurrent APRÈS rupture. Dédit-formation : oblige à rester une durée APRÈS formation sinon rembourser. Les deux jouent après la rupture mais sur des bases différentes.'
      }
    ]
  },

  {
    id: 'structures-juridiques',
    tier: 2,
    matiere: 'droit',
    titre: 'Le choix de la structure juridique',
    sousTitre: 'EI · EURL/SARL · SASU/SAS · SA — critères de choix',
    cours: 'Le choix de la structure juridique conditionne la responsabilité du dirigeant, le régime fiscal et social, la crédibilité et la capacité à lever des fonds. Il n\'existe pas de meilleure structure universelle — le choix dépend des besoins du créateur (seul ou associés, protection du patrimoine, entrée d\'investisseurs). La méthode à l\'examen : « tout dépend » — confronter les besoins aux caractéristiques de chaque forme, recommander et justifier.',
    pointsCles: [
      'EI/micro-entreprise : simple, peu de formalités. Patrimoine pro/perso séparés depuis 2022. Peu adapté à la levée de fonds',
      'EURL/SARL : responsabilité limitée aux apports, cadre rigide. 1 associé (EURL) ou 2-100 (SARL). Impôt sur les sociétés (IS) ou IR',
      'SASU/SAS : responsabilité limitée, grande souplesse statutaire, dirigeant assimilé salarié. Forme privilégiée des start-up et investisseurs',
      'SA : 2+ actionnaires minimum 37 000€ de capital. Appel public à l\'épargne possible. Cotation en Bourse',
      'Critères de comparaison : nombre d\'associés, responsabilité, capital minimum, régime fiscal, régime social, transmission, crédibilité',
      'Réflexe : REF+ SARL souhaitant passer en SAS → souplesse statutaire + crédibilité bancaire + accès investisseurs'
    ],
    auteurs: [],
    sujetsRef: ['ref-2024', 'purecontrol-s-2024'],
    cards: [
      {
        id: 'structures-juridiques-q1',
        question: 'Quels sont les critères de choix d\'une structure juridique ?',
        reponse: 'Nombre d\'associés, responsabilité (limitée ou non), capital minimum, régime fiscal (IS ou IR), régime social du dirigeant, facilité de transmission, crédibilité.'
      },
      {
        id: 'structures-juridiques-q2',
        question: 'Quelle structure convient à un créateur seul qui veut protéger son patrimoine ?',
        reponse: 'EURL (impôt sur le revenu) ou SASU (assimilé salarié, IS). La SAS/SASU est plus souple statutairement. Éviter l\'EI si risques financiers importants.'
      },
      {
        id: 'structures-juridiques-q3',
        question: 'Pourquoi les start-up préfèrent-elles la SAS/SASU ?',
        reponse: 'Grande souplesse statutaire pour organiser la gouvernance, le dirigeant est assimilé salarié (meilleure protection sociale), facilite l\'entrée d\'investisseurs.'
      },
      {
        id: 'structures-juridiques-q4',
        question: 'Quelle est la différence entre SARL et SAS ?',
        reponse: 'SARL : cadre rigide (fonctionnement encadré par la loi), 2-100 associés. SAS : très libre (statuts sur mesure), 2+ associés, forme préférée des start-up et investisseurs.'
      },
      {
        id: 'structures-juridiques-q5',
        question: 'Pourquoi REF+ envisage de passer de SARL à SAS ?',
        reponse: 'Pour bénéficier d\'une meilleure crédibilité bancaire, accéder à des sources de financement externe et attirer des investisseurs grâce à la souplesse statutaire de la SAS.'
      },
      {
        id: 'structures-juridiques-q6',
        question: 'Quelle est la responsabilité dans une SARL/SAS ?',
        reponse: 'Responsabilité limitée aux apports : le dirigeant ne risque que ce qu\'il a apporté à la société, son patrimoine personnel est protégé.'
      },
      {
        id: 'structures-juridiques-q7',
        question: 'Qu\'est-ce que le statut d\'assimilé salarié ?',
        reponse: 'Le dirigeant d\'une SAS/SASU est rattaché au régime général de la Sécurité sociale (comme un salarié) : meilleure couverture sociale mais cotisations plus élevées.'
      }
    ]
  },

  {
    id: 'financement-entreprise',
    tier: 2,
    matiere: 'eco',
    titre: 'Le financement de l\'entreprise',
    sousTitre: 'BFR · Développement · Taux d\'intérêt · Crowdfunding',
    cours: 'Le financement de l\'entreprise dépend du besoin : financer l\'exploitation courante (BFR) ou financer le développement et la croissance. Le besoin en fonds de roulement (BFR) représente le décalage entre encaissements et décaissements dans le cycle d\'exploitation. Les taux directeurs de la BCE influencent directement le coût du crédit et donc les décisions d\'investissement des entreprises.',
    pointsCles: [
      'Financer le BFR : découvert bancaire, apport en capital, emprunt bancaire, affacturage',
      'Leviers BFR : raccourcir délais clients, allonger délais fournisseurs, réduire le stock',
      'Financer le développement : auto-financement, augmentation de capital, emprunt, crédit-bail, crowdfunding',
      'Crowdfunding : don, prêt (crowdlending), titres (equity crowdfunding)',
      'Taux directeurs BCE ↑ → crédit plus cher → moins d\'investissement → ralentissement économique',
      'Taux BCE ↓ → crédit moins cher → davantage d\'investissement → stimulation de la croissance'
    ],
    auteurs: [],
    sujetsRef: ['ref-2024', 'purecontrol-s-2024'],
    cards: [
      {
        id: 'financement-entreprise-q1',
        question: 'Comment financer le BFR d\'exploitation ?',
        reponse: 'Découvert bancaire, apport en capital supplémentaire, emprunt bancaire à court terme, affacturage (céder ses créances à un factor). Leviers : raccourcir délais clients, allonger délais fournisseurs, réduire stock.'
      },
      {
        id: 'financement-entreprise-q2',
        question: 'Comment financer le développement de l\'entreprise ?',
        reponse: 'Auto-financement (CAF), augmentation de capital, emprunt bancaire à long terme, crédit-bail, externalisation, crowdfunding (don, prêt, titres).'
      },
      {
        id: 'financement-entreprise-q3',
        question: 'Qu\'est-ce que le crowdfunding ?',
        reponse: 'Financement participatif par internet. 3 formes : don (avec ou sans contrepartie), prêt/crowdlending (avec intérêts), titres/equity crowdfunding (prise de participation).'
      },
      {
        id: 'financement-entreprise-q4',
        question: 'Quel est l\'impact d\'une hausse des taux directeurs de la BCE ?',
        reponse: 'Taux BCE ↑ → taux bancaires ↑ → crédit plus cher → les entreprises et ménages empruntent moins → moins d\'investissement et de consommation → ralentissement économique.'
      },
      {
        id: 'financement-entreprise-q5',
        question: 'Quel est l\'impact d\'une baisse des taux directeurs ?',
        reponse: 'Taux BCE ↓ → crédit moins cher → davantage d\'emprunts → plus d\'investissement et de consommation → stimulation de la croissance.'
      },
      {
        id: 'financement-entreprise-q6',
        question: 'Qu\'est-ce que l\'affacturage ?',
        reponse: 'Cession des créances clients à un \'factor\' (organisme financier spécialisé) qui avance les fonds immédiatement. Permet d\'améliorer la trésorerie sans attendre le paiement des clients.'
      }
    ]
  },

  {
    id: 'rse-finalites',
    tier: 2,
    matiere: 'management',
    titre: 'RSE et finalités de l\'entreprise',
    sousTitre: 'Drucker — finalité économique et sociétale complémentaires',
    cours: 'Selon Drucker, l\'entreprise poursuit deux finalités complémentaires et non opposées : la finalité économique (profit, pérennité, croissance) et la finalité sociétale/RSE (responsabilité envers les parties prenantes et l\'environnement). La RSE est devenue un levier d\'attractivité, de fidélisation et de différenciation. Elle répond aux attentes de la génération Z qui choisit ses employeurs sur leurs valeurs.',
    pointsCles: [
      'Finalité économique : profit, pérennité, croissance du chiffre d\'affaires (Drucker)',
      'Finalité sociétale/RSE : responsabilité environnementale, sociale et sociétale',
      'Les deux finalités sont COMPLÉMENTAIRES : la RSE améliore l\'image, attire les talents, fidélise les clients',
      'RSE comme levier RH : attirer la génération Z (87% des étudiants regardent les valeurs de l\'entreprise)',
      'Labels RSE : Greentech Innovation, certification EcoVadis, ISO 26000',
      'DIGIM 2025 : RSE = 24 tonnes CO2/an, actions lycées lyonnais, QVT, management participatif'
    ],
    auteurs: [
      { nom: 'Drucker', theorie: 'Théorie des finalités — économique (profit) + sociétale/RSE (parties prenantes)' }
    ],
    sujetsRef: ['idemia-nc-2023', 'digim-2025', 'ovhcloud-nc-2025', 'purecontrol-s-2024'],
    cards: [
      {
        id: 'rse-finalites-q1',
        question: 'Quelles sont les deux finalités de l\'entreprise selon Drucker ?',
        reponse: 'Finalité économique (profit, pérennité, croissance) et finalité sociétale/RSE (responsabilité envers parties prenantes et environnement). Elles sont complémentaires.'
      },
      {
        id: 'rse-finalites-q2',
        question: 'Pourquoi la RSE est-elle un levier d\'attractivité ?',
        reponse: 'La génération Z (87% des étudiants) choisit ses employeurs sur leurs valeurs et leur impact. La RSE améliore la marque employeur et attire des talents sensibles aux enjeux sociaux et environnementaux.'
      },
      {
        id: 'rse-finalites-q3',
        question: 'Comment DIGIM utilise-t-elle la RSE pour fidéliser ses jeunes salariés ?',
        reponse: 'DIGIM : faible empreinte carbone (24T CO2/an), actions lycées lyonnais, management participatif, autonomie, salle de détente, égalité salariale, rémunérations supérieures au secteur.'
      },
      {
        id: 'rse-finalites-q4',
        question: 'La RSE et la finalité économique sont-elles opposées ?',
        reponse: 'Non, elles sont complémentaires selon Drucker. La RSE génère des bénéfices économiques : meilleure image, accès à des marchés (appels d\'offres publics), fidélisation clients et salariés.'
      },
      {
        id: 'rse-finalites-q5',
        question: 'Qu\'est-ce qu\'un label RSE ?',
        reponse: 'Certification attestant des performances RSE d\'une entreprise. Exemples : Greentech Innovation (transition écologique), EcoVadis (performances RSE tous secteurs), ISO 26000.'
      },
      {
        id: 'rse-finalites-q6',
        question: 'Quelle est la finalité d\'OVHcloud selon sa charte éthique 2025 ?',
        reponse: 'OVHcloud vise 3 finalités : clients (souveraineté des données, performance), collaborateurs (épanouissement), société civile & environnement (innovation, réduction de l\'impact carbone).'
      }
    ]
  },

  {
    id: 'plateformes-effets-reseau',
    tier: 2,
    matiere: 'eco',
    titre: 'Les plateformes numériques et les effets de réseau',
    sousTitre: 'Intermédiation · Effets réseau directs/indirects',
    cours: 'Une plateforme numérique est un intermédiaire qui met en relation deux ou plusieurs groupes d\'utilisateurs interdépendants. Sa valeur croît avec le nombre d\'utilisateurs grâce aux effets de réseau. L\'effet de réseau direct signifie que la valeur pour un utilisateur augmente quand d\'autres utilisateurs du MÊME groupe rejoignent la plateforme. L\'effet de réseau indirect signifie que la valeur pour un groupe augmente quand l\'autre groupe croît.',
    pointsCles: [
      'Plateforme = intermédiaire entre 2+ groupes d\'utilisateurs (acheteurs/vendeurs, marques/fabricants)',
      'Effet de réseau DIRECT : plus il y a d\'utilisateurs du même côté, plus la plateforme est utile (réseau social)',
      'Effet de réseau INDIRECT : plus il y a de fabricants → plus c\'est utile pour les marques (et vice versa)',
      'Ferme.agri : 16 000 utilisateurs → objectif 100 000 → plus d\'agriculteurs = plus de valeur pour tous',
      'Packitoo : plus de fabricants référencés → plus d\'offres pour les marques → plus de marques → plus de fabricants',
      'Avantage des plateformes : abaissement des barrières à l\'entrée, suppression d\'intermédiaires, économies d\'échelle'
    ],
    auteurs: [],
    sujetsRef: ['packitoo-2022', 'agricoopia-nc-2022', 'digim-2025'],
    cards: [
      {
        id: 'plateformes-effets-reseau-q1',
        question: 'Qu\'est-ce qu\'un effet de réseau ?',
        reponse: 'La valeur de la plateforme croît avec le nombre d\'utilisateurs. Plus les utilisateurs sont nombreux, plus la plateforme est utile pour chacun d\'eux.'
      },
      {
        id: 'plateformes-effets-reseau-q2',
        question: 'Quelle est la différence entre effet de réseau direct et indirect ?',
        reponse: 'Direct : la valeur augmente quand les utilisateurs du MÊME groupe augmentent (ex: réseau social — plus d\'amis = plus utile). Indirect : la valeur pour un groupe augmente quand l\'AUTRE groupe grandit (ex: Packitoo — plus de fabricants = plus utile pour les marques).'
      },
      {
        id: 'plateformes-effets-reseau-q3',
        question: 'Montrez que Ferme.agri bénéficie d\'effets de réseau.',
        reponse: 'Ferme.agri a 16 000 utilisateurs agriculteurs. En atteignant 100 000, chaque agriculteur bénéficie de plus d\'offres, de meilleures cotations et d\'un catalogue plus large → effet de réseau positif.'
      },
      {
        id: 'plateformes-effets-reseau-q4',
        question: 'Qu\'est-ce que la désintermédiation ?',
        reponse: 'Suppression d\'intermédiaires traditionnels. Les plateformes permettent aux producteurs de vendre directement aux consommateurs → réduction des coûts mais aussi hausse du pouvoir des clients.'
      },
      {
        id: 'plateformes-effets-reseau-q5',
        question: 'Qu\'est-ce que la réintermédiation ?',
        reponse: 'Apparition de nouveaux intermédiaires numériques (les plateformes elles-mêmes) qui remplacent les anciens. Les plateformes comme Amazon réintermédient en devenant des acteurs incontournables.'
      },
      {
        id: 'plateformes-effets-reseau-q6',
        question: 'Quels sont les 3 critères qui définissent une plateforme ?',
        reponse: '1. Intermédiaire entre 2+ groupes d\'utilisateurs 2. Sociale et mobile (consultation permanente) 3. Abaisse les barrières à l\'entrée pour de nouveaux acteurs.'
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TIER 3
  // ─────────────────────────────────────────────
  {
    id: 'abus-position-dominante',
    tier: 3,
    matiere: 'droit',
    titre: 'L\'abus de position dominante',
    sousTitre: '3 conditions cumulatives — sanction Autorité de la concurrence',
    cours: 'L\'abus de position dominante est une pratique anticoncurrentielle sanctionnée par le droit de la concurrence. Une entreprise peut avoir une position dominante sans que ce soit interdit — c\'est l\'ABUS qui est sanctionné. La sanction est prononcée par l\'Autorité de la concurrence : injonction de cesser + sanction pécuniaire (jusqu\'à 10% du CA mondial).',
    pointsCles: [
      '1. L\'entreprise est en position DOMINANTE sur le marché (part de marché très élevée)',
      '2. Elle exploite cette position de manière ABUSIVE : prix prédateurs/abusivement bas, refus de vente, ventes liées, conditions discriminatoires',
      '3. L\'effet est d\'ÉLIMINER un concurrent ou d\'empêcher l\'accès au marché',
      'Sanction : Autorité de la concurrence → injonction de cesser + amende jusqu\'à 10% du CA mondial',
      'WEBREFY (REF+ 2024) : pratique des prix abusivement bas → élimine REF+ du marché → abus potentiel',
      'Citer le Code de commerce (articles L420-5 et L464-2)'
    ],
    auteurs: [],
    sujetsRef: ['ref-2024'],
    cards: [
      {
        id: 'abus-position-dominante-q1',
        question: 'Quelles sont les 3 conditions de l\'abus de position dominante ?',
        reponse: '1. Entreprise en position dominante sur le marché 2. Exploitation abusive (prix prédateurs, refus de vente, ventes liées, discriminations) 3. Effet d\'éliminer un concurrent ou d\'empêcher l\'accès au marché.'
      },
      {
        id: 'abus-position-dominante-q2',
        question: 'Quelle est la sanction de l\'abus de position dominante ?',
        reponse: 'L\'Autorité de la concurrence peut : 1. Ordonner de cesser les pratiques 2. Infliger une sanction pécuniaire jusqu\'à 10% du CA mondial. Distinction : injonction + amende.'
      },
      {
        id: 'abus-position-dominante-q3',
        question: 'Avoir une position dominante est-il interdit ?',
        reponse: 'Non ! C\'est l\'ABUS de cette position qui est interdit. Une entreprise peut légitimement dominer son marché si elle n\'en abuse pas.'
      },
      {
        id: 'abus-position-dominante-q4',
        question: 'Appliquez la règle à WEBREFY (REF+ 2024).',
        reponse: 'WEBREFY est leader du référencement naturel en France → position dominante. Elle pratique des prix anormalement bas → prix prédateurs. REF+ ne peut s\'aligner → effet d\'élimination d\'un concurrent. Les 3 conditions semblent réunies → abus potentiel.'
      },
      {
        id: 'abus-position-dominante-q5',
        question: 'Citez 4 comportements constitutifs d\'abus de position dominante.',
        reponse: '1. Prix prédateurs (en-dessous des coûts pour éliminer un concurrent) 2. Refus de vente 3. Ventes liées (forcer l\'achat d\'un produit avec un autre) 4. Conditions commerciales discriminatoires.'
      },
      {
        id: 'abus-position-dominante-q6',
        question: 'Quelle est la différence entre l\'Autorité de la concurrence et la DGCCRF ?',
        reponse: 'Autorité de la concurrence : sanctionne les pratiques anticoncurrentielles (abus position dominante, ententes). DGCCRF : protège les consommateurs et veille à la transparence de l\'information.'
      }
    ]
  },

  {
    id: 'rupture-pourparlers',
    tier: 3,
    matiere: 'droit',
    titre: 'La rupture abusive des pourparlers',
    sousTitre: 'Liberté de rompre MAIS responsabilité si abus — D&I frais engagés',
    cours: 'Les pourparlers (négociations précontractuelles) sont libres : chacun peut rompre à tout moment. Mais la rupture peut devenir abusive et engager la responsabilité civile délictuelle de son auteur sur le fondement de l\'article 1240 du Code civil. La sanction ne couvre que les frais engagés (jamais la perte de chance de conclure le contrat).',
    pointsCles: [
      'Principe : liberté de rompre les pourparlers (liberté contractuelle)',
      'Rupture ABUSIVE si : 1) rupture brutale et unilatérale 2) après des négociations avancées ayant créé une croyance légitime 3) sans motif légitime / de mauvaise foi',
      'Sanction : responsabilité civile DÉLICTUELLE (art. 1240 CC) → D&I = frais engagés uniquement (PAS le gain manqué)',
      'Agricoopia 2022 : Gestion+ rompt brutalement après plusieurs mois de négociation, investissements matériels engagés → conditions potentiellement réunies',
      'PURECONTROL 2024 : les Glaces Gérômoises rompent pour raisons financières → motif légitime → PAS d\'abus',
      'Citer article 1112 du Code civil (obligation de bonne foi dans les négociations)'
    ],
    auteurs: [],
    sujetsRef: ['agricoopia-nc-2022', 'purecontrol-s-2024'],
    cards: [
      {
        id: 'rupture-pourparlers-q1',
        question: 'Quelles sont les 3 conditions d\'une rupture abusive des pourparlers ?',
        reponse: '1. Rupture brutale et unilatérale 2. Après des négociations avancées ayant créé une croyance légitime dans la conclusion du contrat 3. Sans motif légitime / de mauvaise foi.'
      },
      {
        id: 'rupture-pourparlers-q2',
        question: 'Quelle est la sanction d\'une rupture abusive des pourparlers ?',
        reponse: 'Responsabilité civile délictuelle (article 1240 CC). D&I couvrant les frais engagés pour négocier (JAMAIS la perte de chance ou le gain manqué si le contrat avait été conclu).'
      },
      {
        id: 'rupture-pourparlers-q3',
        question: 'La rupture des pourparlers est-elle toujours abusive ?',
        reponse: 'Non. En principe, les pourparlers peuvent être rompus librement. L\'abus n\'est caractérisé que si les 3 conditions sont réunies (brutalité + croyance légitime + mauvaise foi).'
      },
      {
        id: 'rupture-pourparlers-q4',
        question: 'Appliquez la règle à Gestion+ vs Agricoopia (2022).',
        reponse: '1. Rupture brutale par appel téléphonique ✓ 2. Négociations de plusieurs mois, investissements engagés, quasi-signature ✓ 3. Motif : contrat plus lucratif → mauvaise foi ✓ → Rupture abusive, Gestion+ engage sa responsabilité délictuelle.'
      },
      {
        id: 'rupture-pourparlers-q5',
        question: 'Appliquez la règle aux Glaces Gérômoises vs PURECONTROL (2024).',
        reponse: '1. Les Glaces Gérômoises rompent après une semaine 2. Négociations peu avancées 3. Motif légitime : coût trop élevé pour les capacités financières de la SARL → rupture licite, pas d\'abus.'
      },
      {
        id: 'rupture-pourparlers-q6',
        question: 'Quelle est la différence entre responsabilité délictuelle et contractuelle ?',
        reponse: 'Délictuelle : avant la conclusion d\'un contrat (pourparlers, art. 1240). Contractuelle : en cas d\'inexécution d\'un contrat existant (3 conditions : fait générateur + préjudice + lien causalité).'
      }
    ]
  },

  {
    id: 'responsabilite-civile-contractuelle',
    tier: 3,
    matiere: 'droit',
    titre: 'La responsabilité civile contractuelle',
    sousTitre: '3 conditions cumulatives · Obligation de moyens vs résultat',
    cours: 'La responsabilité civile contractuelle est engagée lorsqu\'un cocontractant n\'exécute pas ou mal exécute ses obligations contractuelles. Elle nécessite 3 conditions cumulatives. La distinction obligation de moyens / obligation de résultat détermine qui supporte la preuve de la faute : avec une obligation de moyens, le client doit prouver la faute ; avec une obligation de résultat, la faute est présumée.',
    pointsCles: [
      '3 conditions cumulatives : 1) fait générateur (inexécution ou mauvaise exécution) 2) préjudice subi par le créancier 3) lien de causalité entre les deux',
      'Obligation de MOYENS : client prouve la faute du prestataire (ex: médecin, avocat)',
      'Obligation de RÉSULTAT : faute présumée — le prestataire doit prouver qu\'il n\'est pas fautif (ex: transports, résultat précis contractuellement défini)',
      'OVHcloud 2025 : incendie datacenter → perte irréversible des données → faute contractuelle → responsabilité engagée',
      'REF+ 2024 : obligation de résultat contractuelle → si site pas en 1ère page → faute présumée',
      'Art. 1231-1 Code civil : fondement de la responsabilité contractuelle'
    ],
    auteurs: [],
    sujetsRef: ['ovhcloud-nc-2025', 'ref-2024'],
    cards: [
      {
        id: 'responsabilite-civile-contractuelle-q1',
        question: 'Quelles sont les 3 conditions de la responsabilité civile contractuelle ?',
        reponse: '1. Un fait générateur (inexécution ou mauvaise exécution du contrat) 2. Un préjudice subi par le créancier 3. Un lien de causalité entre le fait et le préjudice.'
      },
      {
        id: 'responsabilite-civile-contractuelle-q2',
        question: 'Quelle est la différence entre obligation de moyens et de résultat ?',
        reponse: 'Moyens : le prestataire s\'engage à faire de son mieux — le client DOIT PROUVER la faute. Résultat : le prestataire s\'engage à atteindre un objectif précis — la faute est PRÉSUMÉE si l\'objectif n\'est pas atteint.'
      },
      {
        id: 'responsabilite-civile-contractuelle-q3',
        question: 'Appliquez la règle à OVHcloud vs Bati Courtage (2025).',
        reponse: '1. Fait générateur : OVHcloud stocke le backup dans le même datacenter que le serveur principal (mauvaise exécution du contrat de sauvegarde) ✓ 2. Préjudice : perte irréversible de toutes les données ✓ 3. Lien causal ✓ → Responsabilité contractuelle d\'OVHcloud engagée.'
      },
      {
        id: 'responsabilite-civile-contractuelle-q4',
        question: 'REF+ a souscrit une obligation de résultat. Quelles conséquences ?',
        reponse: 'Si le site du client n\'apparaît pas en 1ère page des moteurs dans le délai prévu → faute présumée de REF+. Le client peut résilier et demander des D&I sans avoir à prouver la faute.'
      },
      {
        id: 'responsabilite-civile-contractuelle-q5',
        question: 'Pourquoi l\'obligation de moyens est-elle moins risquée pour le prestataire ?',
        reponse: 'Car c\'est au client de prouver que le prestataire n\'a pas mis en œuvre les moyens nécessaires. Avec une obligation de résultat, le prestataire est présumé fautif si l\'objectif n\'est pas atteint.'
      },
      {
        id: 'responsabilite-civile-contractuelle-q6',
        question: 'Quel est le fondement légal de la responsabilité civile contractuelle ?',
        reponse: 'Article 1231-1 du Code civil : \'Le débiteur est condamné au paiement de dommages et intérêts soit à raison de l\'inexécution de l\'obligation, soit à raison du retard dans l\'exécution.\''
      },
      {
        id: 'responsabilite-civile-contractuelle-q7',
        question: 'Quelle sanction peut être demandée en cas de responsabilité contractuelle ?',
        reponse: 'Dommages et intérêts (D&I) couvrant le préjudice subi. Aussi possible : résolution du contrat (annulation) ou exécution forcée (si possible).'
      }
    ]
  },

  {
    id: 'contrefacon-concurrence-deloyale',
    tier: 3,
    matiere: 'droit',
    titre: 'Contrefaçon & concurrence déloyale',
    sousTitre: 'PI enregistrée (INPI) vs pratiques abusives — action cumulative possible',
    cours: 'La contrefaçon est une atteinte à un droit de propriété intellectuelle enregistré (marque, brevet, œuvre protégée par droit d\'auteur). C\'est un délit pénal. La concurrence déloyale est l\'utilisation de pratiques abusives sans nécessairement violer un droit de PI : dénigrement, parasitisme, désorganisation, imitation/confusion. Elle est fondée sur la responsabilité civile délictuelle. Les deux actions peuvent être cumulées.',
    pointsCles: [
      'Contrefaçon : atteinte à un DROIT DE PI enregistré (marque INPI, brevet, œuvre). Délit pénal : 3 ans d\'emprisonnement + 300 000€ d\'amende + D&I',
      'Concurrence déloyale : pratiques abusives SANS droit de PI — dénigrement, parasitisme, désorganisation, imitation/confusion. Fondée sur la responsabilité civile délictuelle (3 conditions)',
      'Les deux actions peuvent être CUMULÉES (contrefaçon + concurrence déloyale si les faits le justifient)',
      'INPI : Institut National de la Propriété Industrielle — enregistrement des marques et brevets',
      'Packitoo 2022 : Befor utilise la technologie brevetée de Gobert → contrefaçon + concurrence déloyale possible',
      'DIGIM 2025 : INTENSO dépose BILLFACTO proche de BILLFACT → contrefaçon de marque'
    ],
    auteurs: [],
    sujetsRef: ['packitoo-2022', 'digim-2025'],
    cards: [
      {
        id: 'contrefacon-concurrence-deloyale-q1',
        question: 'Quelle est la différence entre contrefaçon et concurrence déloyale ?',
        reponse: 'Contrefaçon : atteinte à un droit de PI enregistré (marque, brevet) → délit pénal. Concurrence déloyale : pratiques abusives sans droit de PI (dénigrement, parasitisme) → responsabilité civile délictuelle.'
      },
      {
        id: 'contrefacon-concurrence-deloyale-q2',
        question: 'Citez 4 formes de concurrence déloyale.',
        reponse: '1. Dénigrement (critiques publiques d\'un concurrent) 2. Parasitisme (se placer dans le sillage d\'un concurrent) 3. Désorganisation (débaucher massivement des salariés) 4. Imitation/confusion (copier les signes distinctifs).'
      },
      {
        id: 'contrefacon-concurrence-deloyale-q3',
        question: 'Quelle est la sanction de la contrefaçon ?',
        reponse: 'C\'est un délit pénal : jusqu\'à 3 ans d\'emprisonnement et 300 000€ d\'amende + dommages et intérêts civils (art. L716-10 Code de la propriété intellectuelle).'
      },
      {
        id: 'contrefacon-concurrence-deloyale-q4',
        question: 'Peut-on agir simultanément pour contrefaçon ET concurrence déloyale ?',
        reponse: 'Oui, si les faits le justifient. Exemple : Gobert peut agir en contrefaçon de brevet (droit PI enregistré) ET en concurrence déloyale (parasitisme, confusion sur le marché).'
      },
      {
        id: 'contrefacon-concurrence-deloyale-q5',
        question: 'Comment DIGIM peut-elle agir contre INTENSO ?',
        reponse: 'DIGIM a déposé la marque BILLFACT en 2020 (INPI). INTENSO dépose BILLFACTO → risque de confusion → action en contrefaçon de marque. Sanction : dommages et intérêts + interdiction d\'utiliser la marque.'
      },
      {
        id: 'contrefacon-concurrence-deloyale-q6',
        question: 'Quelle est la condition préalable à toute action en contrefaçon ?',
        reponse: 'L\'existence d\'un droit de propriété intellectuelle ENREGISTRÉ : marque ou brevet déposé à l\'INPI, ou œuvre protégée par le droit d\'auteur (automatique à la création).'
      }
    ]
  },

  {
    id: 'rgpd-donnees-sensibles',
    tier: 3,
    matiere: 'droit',
    titre: 'RGPD & données sensibles',
    sousTitre: 'Données biométriques · Obligations RGPD · CNIL',
    cours: 'Le RGPD (Règlement Général sur la Protection des Données, 2018) encadre le traitement des données personnelles dans l\'UE. Les données sensibles (origine raciale ou ethnique, opinions politiques, données biométriques, données de santé, vie sexuelle) font l\'objet d\'une protection renforcée : leur traitement est interdit par principe, sauf exceptions strictes. Le non-respect est sanctionné par la CNIL.',
    pointsCles: [
      'Données sensibles : biométriques, santé, origine raciale/ethnique, opinions politiques, vie sexuelle, appartenance syndicale',
      'Traitement interdit par principe sauf : consentement exprès (libre, spécifique, informé), nécessité vitale, intérêt public autorisé par la CNIL',
      'Obligations RGPD : finalité déterminée, minimisation, licéité/loyauté/transparence, sécurité renforcée',
      'CNIL : mise en demeure puis sanction pécuniaire (jusqu\'à 4% du CA mondial ou 20M€)',
      'IDEMIA 2023 : données biométriques (empreintes, reconnaissance faciale) = données sensibles → cadre RGPD strict',
      'Surveillance des salariés avec données biométriques : interdit sans autorisation CNIL préalable'
    ],
    auteurs: [],
    sujetsRef: ['novefi-2023', 'idemia-nc-2023'],
    cards: [
      {
        id: 'rgpd-donnees-sensibles-q1',
        question: 'Qu\'est-ce qu\'une donnée sensible selon le RGPD ?',
        reponse: 'Données révélant l\'origine raciale/ethnique, opinions politiques, convictions religieuses, appartenance syndicale, données biométriques, données de santé, données sur la vie sexuelle ou l\'orientation sexuelle.'
      },
      {
        id: 'rgpd-donnees-sensibles-q2',
        question: 'Quel est le principe pour les données sensibles ?',
        reponse: 'Leur traitement est INTERDIT par principe. Des exceptions permettent le traitement : consentement exprès de la personne, sauvegarde de la vie humaine, intérêt public autorisé par la CNIL.'
      },
      {
        id: 'rgpd-donnees-sensibles-q3',
        question: 'Quelles sont les obligations RGPD pour tout traitement de données ?',
        reponse: 'Finalité déterminée et limitée, minimisation (collecter uniquement ce qui est nécessaire), licéité/loyauté/transparence, sécurité renforcée, durée de conservation limitée.'
      },
      {
        id: 'rgpd-donnees-sensibles-q4',
        question: 'Quel est le rôle de la CNIL ?',
        reponse: 'La CNIL contrôle le respect du RGPD en France. Elle peut : émettre des mises en demeure, prononcer des sanctions (jusqu\'à 4% du CA mondial ou 20M€), interdire les traitements illicites.'
      },
      {
        id: 'rgpd-donnees-sensibles-q5',
        question: 'Pourquoi l\'entreprise MASTEL ne peut-elle pas utiliser les données MorphoWave pour sanctionner un salarié ?',
        reponse: 'Les données biométriques sont des données sensibles. Le dispositif doit être déclaré à la CNIL et avoir une finalité déclarée. Si les salariés n\'ont pas été informés, les données sont illicitement obtenues → preuve irrecevable.'
      },
      {
        id: 'rgpd-donnees-sensibles-q6',
        question: 'Qu\'est-ce que le consentement exprès au sens du RGPD ?',
        reponse: 'Un consentement libre (sans pression), spécifique (pour un traitement précis), informé (la personne sait ce qu\'elle accepte) et non équivoque (démarche active — pas une case pré-cochée).'
      }
    ]
  },

  {
    id: 'entrepreneur-schumpeter',
    tier: 3,
    matiere: 'eco',
    titre: 'L\'entrepreneur selon Schumpeter',
    sousTitre: 'Destruction créatrice · 5 types d\'innovation · Logique entrepreneuriale',
    cours: 'Joseph Schumpeter place l\'entrepreneur innovateur au cœur du processus de croissance économique. L\'entrepreneur détecte des opportunités, prend des risques et innove pour obtenir un monopole temporaire sur le marché. Ce processus de « destruction créatrice » remplace les entreprises obsolètes par de nouvelles entreprises plus innovantes, moteur de la croissance économique à long terme.',
    pointsCles: [
      'Schumpeter : l\'entrepreneur innovateur est le moteur de la croissance économique',
      '« Destruction créatrice » : les innovations rendent obsolètes les produits et entreprises existants',
      '5 types d\'innovation : produit, procédé, mode de production, nouveau débouché (marché), nouvelle matière première',
      '3 critères de l\'entrepreneur selon Schumpeter : saisir des opportunités, prendre des risques, innover sur le long terme',
      'Labels et aides État : French Tech, Greentech Innovation, France Num, BPI France → soutien à l\'innovation',
      'Citer Schumpeter pour la création d\'entreprise (Packitoo, PURECONTROL) et la politique d\'innovation'
    ],
    auteurs: [
      { nom: 'Schumpeter', theorie: 'Destruction créatrice — l\'entrepreneur innovateur moteur de la croissance, 5 types d\'innovation' }
    ],
    sujetsRef: ['packitoo-2022', 'purecontrol-s-2024'],
    cards: [
      {
        id: 'entrepreneur-schumpeter-q1',
        question: 'Qu\'est-ce que la destruction créatrice selon Schumpeter ?',
        reponse: 'Processus par lequel les innovations rendent obsolètes les produits et entreprises existants, les remplaçant par de nouvelles entreprises plus innovantes. C\'est le moteur de la croissance économique.'
      },
      {
        id: 'entrepreneur-schumpeter-q2',
        question: 'Quels sont les 5 types d\'innovation selon Schumpeter ?',
        reponse: '1. Innovation de produit 2. Innovation de procédé 3. Innovation de mode de production 4. Innovation de nouveau débouché (marché) 5. Innovation de nouvelle matière première.'
      },
      {
        id: 'entrepreneur-schumpeter-q3',
        question: 'Quels sont les 3 critères de l\'entrepreneur selon Schumpeter ?',
        reponse: '1. Saisir des opportunités 2. Prendre des risques 3. Innover sur le long terme pour obtenir un avantage compétitif.'
      },
      {
        id: 'entrepreneur-schumpeter-q4',
        question: 'Comment montrer que les fondateurs de PURECONTROL sont des entrepreneurs au sens de Schumpeter ?',
        reponse: 'Ils saisissent une opportunité (marché industriel + transition écologique), prennent des risques (600K€ fonds propres, rupture conventionnelle), et innovent sur le long terme (IA + optimisation énergétique unique).'
      },
      {
        id: 'entrepreneur-schumpeter-q5',
        question: 'Comment l\'État soutient-il l\'innovation selon Schumpeter ?',
        reponse: 'Labels (French Tech, Greentech Innovation), aides financières (BPI France, subventions), accompagnement (incubateurs, France Num), crédits d\'impôt (CIR — Crédit Impôt Recherche).'
      },
      {
        id: 'entrepreneur-schumpeter-q6',
        question: 'Pourquoi Schumpeter dit-il que l\'entrepreneur obtient un monopole temporaire ?',
        reponse: 'L\'innovation lui donne une avance sur les concurrents. Mais avec le temps, d\'autres imitent → la concurrence revient → l\'entrepreneur doit innover de nouveau.'
      }
    ]
  },

  {
    id: 'propriete-intellectuelle',
    tier: 3,
    matiere: 'droit',
    titre: 'La propriété intellectuelle',
    sousTitre: 'Brevet · Marque · Droit d\'auteur — durées et conditions',
    cours: 'La propriété intellectuelle protège les créations de l\'esprit. Elle se divise en propriété littéraire et artistique (droit d\'auteur, automatique à la création) et propriété industrielle (brevet et marque, nécessitant un dépôt à l\'INPI). Les logiciels sont protégés par le droit d\'auteur. Les bases de données sont protégées par le droit de producteur.',
    pointsCles: [
      'Droit d\'auteur : automatique à la création, 70 ans après la mort de l\'auteur. Droit moral (incessible, perpétuel) + droit patrimonial (cessible)',
      'Brevet : dépôt INPI, 20 ans non renouvelable. Monopole d\'exploitation temporaire sur une invention industrielle',
      'Marque : dépôt INPI, 10 ans renouvelable indéfiniment. Protège un nom, logo, slogan',
      'Salarié auteur : dans le cadre de ses fonctions → les droits patrimoniaux reviennent à l\'EMPLOYEUR',
      'Logiciel créé par un salarié dans l\'exercice de ses fonctions → droits à l\'employeur (art. L113-9 CPI)',
      'Contrefaçon de brevet ou marque : délit pénal (3 ans + 300 000€ amende)'
    ],
    auteurs: [],
    sujetsRef: ['packitoo-2022', 'purecontrol-s-2024', 'digim-2025', 'ovhcloud-nc-2025'],
    cards: [
      {
        id: 'propriete-intellectuelle-q1',
        question: 'Quelle est la durée de protection d\'un brevet ?',
        reponse: '20 ans à compter du dépôt, non renouvelable. Après 20 ans, l\'invention tombe dans le domaine public. OVHcloud détient 137 familles de brevets.'
      },
      {
        id: 'propriete-intellectuelle-q2',
        question: 'Quelle est la durée de protection d\'une marque ?',
        reponse: '10 ans renouvelable indéfiniment (tant que la marque est renouvelée et utilisée). La marque PACKITOO HIPE a été déposée le 29/05/2020 à l\'INPI.'
      },
      {
        id: 'propriete-intellectuelle-q3',
        question: 'Quelle est la durée du droit d\'auteur ?',
        reponse: '70 ans après la mort de l\'auteur. Le droit moral (incessible) est perpétuel. Le droit patrimonial (cessible) dure 70 ans post-mortem.'
      },
      {
        id: 'propriete-intellectuelle-q4',
        question: 'Un salarié crée un logiciel dans le cadre de ses fonctions. À qui appartiennent les droits ?',
        reponse: 'Les droits patrimoniaux reviennent à l\'EMPLOYEUR (art. L113-9 CPI). Sébastien Casares (OVHcloud) a développé le logiciel hors mission et sur son temps libre → les droits lui appartiennent a priori.'
      },
      {
        id: 'propriete-intellectuelle-q5',
        question: 'Quelle est la différence entre brevet et droit d\'auteur pour un logiciel ?',
        reponse: 'Un logiciel est protégé par le DROIT D\'AUTEUR (automatique à la création, 70 ans). Il peut difficilement obtenir un brevet (innovations techniques uniquement). L\'APP (Agence de Protection des Programmes) peut l\'horodater.'
      },
      {
        id: 'propriete-intellectuelle-q6',
        question: 'Qu\'est-ce que le droit moral de l\'auteur ?',
        reponse: 'Droit incessible et perpétuel permettant à l\'auteur de revendiquer la paternité de son œuvre, de s\'opposer à toute modification sans son accord, de décider de la divulgation.'
      },
      {
        id: 'propriete-intellectuelle-q7',
        question: 'Comment protéger une base de données ?',
        reponse: 'Par le DROIT DE PRODUCTEUR (art. L341-1 CPI) : protège celui qui a investi financièrement et humainement pour constituer la base. Durée : 15 ans. Exemple : Lacentrale.fr vs Leparking.fr (jugement 2021).'
      }
    ]
  }
];

export default notions;
