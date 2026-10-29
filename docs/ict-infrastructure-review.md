# Révision ICT Infrastructure — 29 octobre 2026

Les **300 questions originales d'entraînement** et leurs identifiants sont
conservés. Leurs réponses, distracteurs et niveaux ont été revus. Aucun corrigé
officiel EPSO n'est revendiqué.

## Concours et limites de couverture

L'utilisateur a fourni l'[avis C/2026/2425](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:C_202602425).
Le [portail officiel](https://selection.eu-careers.europa.eu/en/job-opportunities/ict-infrastructure)
confirme **EPSO/AD/429/26 — domaine 1, ICT Infrastructure, AD 7**.
La [présentation officielle des fonctions](https://selection.eu-careers.europa.eu/en/apply-ict-competition-ad7)
a été lue : infrastructure d'entreprise, systèmes, bases de données, stockage,
applications et postes de travail, réseaux, identité et accès, cybersécurité,
exploitation, gestion des services, architecture, automatisation, technologies
émergentes dont HPC et quantique, et encadrement des équipes.

Le PDF de l'avis intégral fourni ensuite a été lu. L'annexe II, pages 20–21,
confirme les dix familles de fonctions correspondant aux dix thèmes de la banque.
La [comparaison détaillée](ict-notice-alignment.md) décrit neuf adaptations pour
mieux couvrir l'annuaire/SSO, le poste de travail, le middleware et les pilotes
HPC/quantique. L'avis décrit des fonctions, sans pondération des sujets : la
répartition de la banque reste un choix pédagogique.

## Résultat

- **300 réponses revues individuellement** : documentation technique pour 296
  questions, calculs explicites pour `009`, `025`, `033`, `144`. Le calcul
  d'Amdahl est également relié à la documentation NVIDIA.
- 238 entrées modifiées : 27 libellés, 149 jeux de choix, 193 niveaux. Ces
  ensembles se recoupent ; une reformulation n'indique pas nécessairement que
  l'ancienne réponse était fausse.
- 103 questions faciles, 184 moyennes, 13 avancées. Ces niveaux sont relatifs
  à l'outil, pas à une difficulté officielle AD 7.
- Les distracteurs réécrits utilisent des confusions techniques plausibles
  plutôt que des couleurs, logos ou détails hors sujet. Les choix restent
  mélangés à l'affichage.
- Les liens et références utiles sont visibles dans **Sources**. Les dates,
  méthodes et notes de vérification restent dans les rapports ; ils ne sont
  pas répétés dans chaque correction.
  Les scénarios et leurs conclusions sont rédigés pour l'entraînement : ils
  s'appuient sur les principes cités sans être des citations mot pour mot.

## Précisions importantes

| Questions | Résultat |
| --- | --- |
| `003`, `005`, `056` | Distinguer latence de réplication, CPU steal time, attente disque et analyse de pression mémoire. Un compteur seul ne suffit pas à poser tout le diagnostic. |
| `009`, `144` | Expliciter les hypothèses de calcul : fenêtre complète de 30 jours ; TB/Mbps décimaux, sans surcoût, soit environ 11,1 jours pour transférer 12 TB à 100 Mbps. |
| `034`, `038`, `040` | Préciser les domaines de panne PSU/circuit, la santé des disques restants et le rôle des majorités avec les règles du protocole de consensus. |
| `059` | Un workaround peut rétablir le service sans résoudre le problème sous-jacent. Éviter une définition de « known error » dépendant d'un glossaire ou d'une édition. |
| `071`, `072`, `286` | Distinguer contrat fournisseur et engagements opérationnels entre équipes internes. |
| `093`, `136`, `157` | Exiger les critères d'analyse du canary, préserver les éléments d'investigation avant réinstallation et valider la cohérence des données lors d'une migration avec état. |
| `214`, `217` | Distinguer trace distribuée et diagramme de conception ; protéger les documents opérationnels sans y intégrer de secrets actifs. |
| `246` | Les core-hours allouées mesurent l'occupation du planificateur, pas l'utilisation CPU ni l'efficacité parallèle réelle. |
| `249`, `250`, `254`, `263`, `271` | Distinguer ML-KEM, ML-DSA, schémas hybrides, attaques d'implémentation et remplacement d'algorithme par rapport à une rotation de clé. |

## Sources et validation

`docs/ict-source-review.json` donne les références des 300 questions et les
empreintes des **110 documents consultés**, dont l'avis fourni : RFC Editor/IETF, NIST OSCAL/ACVP,
Kubernetes, PostgreSQL, Linux, SRE Google, AWS Well-Architected, PM² de la
Commission européenne, MPI Forum, OpenMP, Slurm, NVIDIA, Microsoft, IBM et
documentation de gestion de services.

Les URL ayant refusé la lecture ne sont pas citées comme si elles avaient été
lues. Une documentation technique n'est pas une obligation juridique applicable
à l'UE ; les échéances américaines de migration cryptographique ne sont pas
présentées comme des obligations de l'EP.

- Audit de structure : 600 questions EP/ICT, aucun identifiant dupliqué, quatre
  options distinctes et une réponse valide par entrée.
- Application et régressions : **33 tests réussis**.
- Compilation de production et parcours navigateur : catégories, réponse,
  correction, question suivante et sources.

Les 80 questions **Guide & Internal Rules** sont inchangées et séparées de
**EP questions**, qui en contient 300. Data et EU Knowledge sont inchangées.

Les ajouts et révisions ultérieurs restent **manuels, à la demande**. Le démarrage
et `npm run update` ne vérifient ni ne génèrent des questions. Une nouvelle
question ne reçoit aucune vérification ou source automatiquement.
