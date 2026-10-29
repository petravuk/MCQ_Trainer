# Questions EP : fonctionnement du Parlement — 29 octobre 2026

Objectif : préparer un concours interne à l'EP en privilégiant la compréhension
du fonctionnement du Parlement. Les 12 questions de l'examen ne fixent pas la
taille de la banque d'entraînement : **les 300 questions et leurs identifiants
sont conservés**. Cette sélection de thèmes est pédagogique, pas un programme
officiel du concours.

## Travail effectué

La révision part de la version `80bb78f` de `codex/mcq-trainer`, et conserve les
autres changements déjà présents sur cette branche. Le réglage local antérieur
de TypeScript a été sauvegardé hors du dépôt avant cette mise à jour.

- Lecture éditoriale des 300 questions et de leur réponse désignée.
- 69 libellés réécrits, notamment pour remplacer des répétitions ou des questions
  qui demandaient seulement de reconnaître un titre du règlement.
- 159 entrées modifiées au total ; 122 niveaux ajustés. Ces nombres se recoupent.
  Une réponse différente après réécriture ne signifie pas que l'ancienne réponse
  était fausse : le point d'apprentissage a souvent changé.
- Répartition : 102 questions faciles, 118 moyennes, 80 avancées. Les seuils,
  délais et exceptions de procédure restent disponibles en niveau avancé.
- **Les 300 réponses EP ont une vérification individuelle** : 140 à partir des
  pages publiques officielles consultées et les 160 restantes à partir du PDF
  officiel du règlement de juillet 2025. Toutes affichent leurs sources et la
  date du contrôle dans **Sources & review** après correction. Pour les contrôles
  sur ce PDF, **July 2025 Rules** est également affiché avant la réponse et dans
  le statut : les amendements postérieurs ne sont pas vérifiés. Il ne reste pas
  de statut **Source check pending** dans cette banque EP, mais cela ne signifie
  pas qu'elle est certifiée contre l'édition la plus récente du règlement.
  Les vérifications ICT antérieures sont conservées.
- Les groupes d'équivalence ont été actualisés : des questions désormais
  distinctes ne sont plus supprimées comme doublons lors de la sélection.
  Onze paires de libellés strictement identiques restent dédupliquées par le
  mécanisme existant, ainsi que deux groupes de paraphrases.

## Corrections et adaptations importantes

| Questions | Résultat |
| --- | --- |
| `ep-052`, `ep-113`, `ep-115` | Distinguer le président de commission ou vice-président désigné, qui préside normalement l'équipe, du rapporteur, qui la dirige et défend la position du Parlement. Le rapporteur peut exceptionnellement présider un trilogue dans les conditions de la règle 75. L'ancienne réponse « rapporteur » à « who leads » n'était pas une erreur : la nouvelle rédaction clarifie les fonctions. |
| `ep-054`, `ep-118` | Distinguer la signature conjointe de l'acte par les Présidents du Parlement et du Conseil de son authentification interne du côté du Parlement. |
| `ep-024`, `ep-025`, `ep-232` | Préciser les membres votants du Bureau, le rôle consultatif des questeurs et la voix prépondérante du Président au Bureau, sans la généraliser à la plénière. |
| `ep-057`, `ep-059`, `ep-157`, `ep-292` | S'entraîner au contrôle de la Commission : censure collective, questions parlementaires et débat sur l'état de l'Union. |
| `ep-146`, `ep-147` | Corriger le dépôt d'une motion de censure : un dixième des députés, et non le seuil bas. Signaler la condition renforcée d'un cinquième après un vote de censure dans les deux mois précédents et distinguer les intervalles avant débat et vote. |
| `ep-149` | Confirmer la réponse CONT par la règle 133 et l'annexe VI, section VI, point 6 ; distinguer l'avis du Parlement de la nomination par le Conseil. |
| `ep-093`, `ep-108` | Demander explicitement un maximum pour la proposition de dix députés et préciser la possibilité de prolongation du délai de rapport de quatre mois. |
| `ep-186`, `ep-194`, `ep-196`, `ep-204`, `ep-218`, `ep-263`, `ep-267` | Remplacer des définitions trop générales par les acteurs et conditions effectivement prévus dans les règles : demandes aux agences, auditions de contrôle, interpellations, convocation exceptionnelle, déclarations personnelles, questions en commission et commissions parlementaires mixtes. |
| `ep-097`, `ep-101`, `ep-208`, `ep-255` | Comprendre qui prépare le rapport, qui nomme le rapporteur et où le Parlement adopte sa position. |
| `ep-055`, `ep-140` | Distinguer approbation, rejet, amendement, consultation et consentement. |
| `ep-223` à `ep-226` | Distinguer quorum, majorité, abstention et vérification électronique d'un vote. L'exemple chiffré suppose le quorum et les autres conditions remplis. |
| `ep-201`, `ep-214`, `ep-215`, `ep-279`, `ep-281`, `ep-294` | Comprendre le multilinguisme, l'interprétation, la traduction et le travail des juristes-linguistes. |
| `ep-265` | Distinguer l’audition publique organisée par la commission compétente du débat ultérieur en plénière pour une initiative citoyenne. |
| `ep-269`, `ep-271`, `ep-298` | Distinguer les personnes pouvant présenter une pétition de son champ matériel : domaine d'activité de l'UE et incidence directe sur le pétitionnaire. |
| `ep-275` à `ep-277`, `ep-300` | Distinguer planification politique, administration interne et assistance fournie par le Secrétariat. |

Les distracteurs des questions réécrites utilisent des confusions institutionnelles
plausibles : Conseil de l'UE / Conseil européen, commission parlementaire /
Commission européenne, Bureau / Conférence des présidents, traduction /
interprétation. Les choix de réponse restent mélangés à l'affichage.

## Sources effectivement consultées

Toutes les pages ci-dessous ont renvoyé leur contenu avec HTTP 200 pendant cette
révision. Les URL et sections sont enregistrées dans `src/questionReviews.js`.

- [Président](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/the-president)
- [Députés](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/members)
- [Groupes politiques](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-groups)
- [Organes politiques](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-bodies)
- [Commissions](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/committees)
- [Fonctionnement de la plénière](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/how-plenary-works)
- [Secrétariat](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/secretariat)
- [Multilinguisme](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/multilingualism)
- [Pouvoirs législatifs](https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/legislative-powers)
- [Pouvoirs budgétaires](https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/budgetary-powers)
- [Pouvoirs de contrôle](https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/supervisory-powers)
- [Règlement officiel, dixième législature, juillet 2025](https://www.europarl.europa.eu/RegData/reglement/2025/07-07/EP-PE_REGL(2025)07-07_EN.pdf)

Les 160 références individuelles au règlement (règle, titre, page du PDF) et
l'empreinte SHA-256 du fichier consulté figurent également dans
`docs/ep-rules-source-review.json`. L'empreinte identifie le document utilisé ;
elle n'établit pas que cette édition est la plus récente.

## Limites du contrôle

La page de présentation du règlement est accessible, mais les liens vers son
texte détaillé dans `/doceo/document/` ont renvoyé HTTP 202 avec un corps vide,
y compris le lien « latest rules » fourni par le site. Une autre URL officielle
a permis de télécharger et lire le PDF complet de **juillet 2025**. Les 160
réponses restantes ont été comparées aux règles correspondantes de ce PDF,
avec correction ou précision lorsque nécessaire. En revanche, il n'a pas été
possible de confirmer les amendements postérieurs ni de certifier ces réponses
contre l'édition actuellement applicable. Cette limite reste visible pour chaque
question concernée, même si sa réponse est désormais vérifiée dans le PDF cité.

La page sur la plénière et la règle 185 du PDF confirment le nombre de 39 pour la
demande de vérification du quorum (`ep-061`). Certains textes institutionnels de
présentation contiennent aussi des références historiques : leurs dates ou
chiffres ne sont pas repris automatiquement comme actuels.

La banque Guide & Internal Rules contient des règles de personnel et de travail.
Elle n'a pas été modifiée : les pages publiques sur le fonctionnement politique
du Parlement ne suffisent pas à vérifier ces règles internes. Les banques EU,
Data et Infrastructure ne sont pas modifiées par cette révision.

## Validation

- `npm run audit:questions` : 600 questions EP/Infrastructure structurées
  correctement ; aucun identifiant dupliqué ni choix invalide.
- Tests existants de navigation, reprise, historique et déduplication, plus
  régressions sur la présidence des négociations, la signature des actes, le
  calcul de majorité, le dépôt de censure, les compétences CONT et l'affichage du
  statut et de l'édition des sources : **25 tests réussis dans l’ensemble application/EP/ICT**.
- Compilation de production et parcours navigateur du quiz avec ses sources.

Ces corrections ne déclenchent aucun déploiement automatique. Le site en cours
d'utilisation doit récupérer la version mise à jour puis être relancé.

Les vérifications ultérieures et l'ajout éventuel de nouvelles questions restent
manuels, à la demande. Aucun traitement périodique ni mise à jour automatique
du contenu de la banque n'a été ajouté. `npm run update` ne vérifie ni ne génère
des questions : il récupère les commits existants sur GitHub et démarre l'application.
