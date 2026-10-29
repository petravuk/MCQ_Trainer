# Revue ponctuelle des questions — 28 octobre 2026

> Mise à jour du 29 octobre : la banque EP fait désormais l'objet d'une
> [révision sur le fonctionnement du Parlement](ep-functioning-review.md), avec
> 300 réponses reliées à des sources officielles consultées, dont 160 vérifiées
> dans l'édition datée de juillet 2025 sans certification des amendements suivants.
> La [révision ICT](ict-infrastructure-review.md) couvre aussi les 300 réponses
> Infrastructure. Le présent document décrit l'état antérieur ; les nombres et
> limites ci-dessous ont évolué. Le rapport JSON décrit l'état actuel.

Périmètre demandé : **EP (300 entrées)** et **ICT Infrastructure (300 entrées)**.
Data Analyst, EU Knowledge, le guide et les règles internes ne sont pas modifiés
par cette révision. Aucun contrôle quotidien ou planifié n'a été ajouté.

## Résultat et limites

- Les 600 entrées passent les contrôles de structure : identifiants uniques,
  quatre choix distincts, indice de réponse valide, thème et explication présents.
  Cela ne prouve pas l'exactitude du contenu.
- Le passage éditorial a examiné les libellés et les réponses désignées dans les
  deux banques. Il distingue les corrections effectuées, les répétitions et les
  points qui demandent encore une source primaire. Ce n'est pas une certification
  juridique de la banque EP ni une validation de chaque distracteur.
- 17 paires de libellés strictement identiques existent dans EP. 20 autres groupes
  de paraphrases du même point d'apprentissage sont explicitement recensés dans
  `src/questionReviews.js`. Les identifiants sont conservés pour l'historique ; la
  sélection évite ces répétitions dans une session et tient compte des variantes
  déjà rencontrées dans les sessions terminées.
- 52 entrées ICT sont améliorées : 28 jeux de choix plus proches du domaine
  technique, 9 précisions de libellé et 34 niveaux recalibrés (ces ensembles se
  recoupent). Les nombres de questions et leurs identifiants ne changent pas.
- 12 réponses ICT sont vérifiées individuellement : 9 à partir de documentation
  primaire consultée et 3 par calcul explicite. Elles seules portent la mention
  « Answer checked ». La liste exacte, la méthode et les liens sont dans
  `src/questionReviews.js`.
- Les autres réponses restent marquées « Source check pending ». Une correction
  éditoriale ou un niveau recalibré ne vaut pas vérification de la réponse.

## Corrections importantes

### EP

- `ep-054`, `ep-118` : préciser l'authentification **du côté du Parlement**, pour
  ne pas la confondre avec la signature conjointe prévue par l'article 297 TFUE.
- `ep-067`, `ep-232` : limiter la question sur l'égalité des voix à l'adoption
  d'un texte ou d'une proposition exigeant une majorité, sans généraliser aux
  élections et à leurs règles propres.
- `ep-147` : mesurer le délai depuis le **début du débat**, comme sa réponse,
  plutôt que demander un délai depuis le dépôt. Les autres délais applicables
  restent à contrôler sur le texte officiel.

### ICT Infrastructure

- `031` : absence de résolution DNS IPv6, plutôt que toute panne de connectivité IPv6.
- `071` : distinguer les engagements contractuels d'un fournisseur externe des OLA internes.
- `222` : préciser une saturation mesurée de la bande passante mémoire.
- `239` : demander un débit d'opérations flottantes, pas une quantité indéfinie.
- `246` : distinguer occupation des ressources allouées et utilisation CPU/GPU réelle.
- Plusieurs distracteurs absurdes ou hors sujet sont remplacés par des confusions
  techniques plausibles : SAST/DAST/SCA, signature/checksum, déploiements
  rolling/canary/blue-green, chiffrement en transit/au repos/en cours de traitement,
  MPI/OpenMP, strong/weak scaling et Shor/Grover.
- Les définitions fondamentales sont classées « easy » plutôt qu'artificiellement
  « hard ». Ces niveaux sont des choix pédagogiques, pas des niveaux officiels EPSO.

## Points restant à examiner

L'accès à `www.europarl.europa.eu` a été refusé par le proxy de cet environnement
(HTTP 403 lors de la connexion), y compris pour le portail fourni. Les numéros de
règles, seuils, délais et conditions EP n'ont donc pas été vérifiés contre la
version officielle actuelle. Un PDF du règlement applicable permettrait de
terminer ce contrôle sans supposer la bonne édition.

Les valeurs fixes de quorum (`ep-061`, `ep-223`) sont notamment à contrôler.
Plusieurs questions EP restent trop tautologiques ou générales (`ep-205`,
`ep-208`, `ep-213`, `ep-214`, `ep-215`, `ep-271`) : elles ont des notes éditoriales
explicites, sans inventer de nouvelles règles pour les remplacer.

L'ensemble de la banque n'est pas présenté comme une simulation AD7 validée.
Les distracteurs, la couverture et la difficulté nécessitent encore une révision
approfondie sur les questions non corrigées. Les heuristiques du script servent
uniquement à repérer des candidats, pas à déclarer une réponse fausse.

## Sources effectivement consultées

- Documentation Kubernetes : placement/anti-affinité, readiness, RBAC.
- Documentation PostgreSQL : réplication synchrone.
- Glossaire Ansible : idempotence.
- Documentation officielle SchedMD : allocation, fair-share et job arrays.
- Projet NIST ACVP : rôles ML-KEM et ML-DSA dans les opérations prises en charge.

Les URL et sections précises sont affichées après correction de la question.
Les calculs de disponibilité, de sous-réseau IPv4 et de borne d'Amdahl sont
reproductibles dans les notes de vérification.

Pour relancer manuellement le triage, uniquement sur demande :

```bash
npm run audit:questions
```

Cette commande ne modifie pas les questions, n'est appelée ni au démarrage ni
lors des mises à jour, et ne collecte aucun signalement d'autres utilisateurs.
