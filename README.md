# MCQ Trainer

Application de QCM : préparation d'une session, questions avec correction,
résultats et historique. Les banques de questions sont dans `src/`.

## Progression et révision

- Le menu **Practice** revient toujours au choix du test. Les étapes en haut
  permettent aussi de revenir aux réglages, au quiz ou aux derniers résultats.
- Un quiz non terminé est enregistré automatiquement dans ce navigateur, avec
  l'ordre des questions et des réponses, les choix cochés et la position courante.
  Après fermeture ou rechargement, **Resume saved quiz** permet de le retrouver.
  **Save & exit** retourne aux réglages sans le supprimer ; l'abandon explicite
  demande une confirmation. Un seul quiz en cours est conservé par navigateur.
- **Review** réunit les erreurs non résolues et les questions marquées à revoir.
  Une bonne réponse ultérieure résout l'erreur ; une marque manuelle reste
  jusqu'à son retrait. **Try this question** lance une révision ciblée.
- **History → Results by topic** utilise les réponses effectivement vérifiées,
  y compris dans les quiz interrompus et les révisions. Les anciens totaux de
  quiz sont conservés, sans leur inventer une répartition par thème.
- Les données locales ne sont pas synchronisées entre appareils et restent
  communes aux comptes utilisés dans un même navigateur, comme auparavant.
- Si une mise à jour change le texte ou la réponse d'une question d'un quiz
  sauvegardé, ce quiz ne peut pas être repris ; un message le précise. Les
  statistiques déjà enregistrées ne sont pas effacées.

## Qualité des questions

Les révisions [EP](docs/ep-functioning-review.md) et
[ICT Infrastructure](docs/ict-infrastructure-review.md) décrivent les corrections,
les références individuelles et les limites du contrôle. Les sources sont
affichées après correction. Il n'y a aucun contrôle quotidien planifié.

La [révision EP du 29 octobre](docs/ep-functioning-review.md) couvre désormais les
300 réponses EP : 140 à partir des pages officielles de présentation, 160 à partir
du règlement officiel de juillet 2025. L'édition est affichée pour ces dernières ;
ses modifications ultérieures n'ont pas été vérifiées. Les sources sont
consultables après correction de chaque question.

Les 300 réponses ICT ont également une vérification technique ou un calcul
explicite. Les questions restent des exercices originaux, pas des questions
officielles EPSO. Les 80 questions **Guide & Internal Rules** ont leur catégorie
séparée et ne sont plus mélangées aux 300 questions EP.
La carte « Rules of Procedure », qui affichait les mêmes questions, est retirée.
Ses sessions sauvegardées et statistiques sont rattachées à « EP questions ».
Les banques restent dans deux fichiers : `src/ep_questions_bank.ts` et
`src/guide_internal_rules_question_bank.ts`.

La vérification et l'ajout éventuel de nouvelles questions restent **manuels**.
Ni le démarrage ni `npm run update` ne déclenchent une vérification, une recherche
de nouvelles questions ou une réécriture de la banque. `npm run update` récupère
uniquement les changements déjà enregistrés sur GitHub puis lance l'application.

## Tester dans Codespaces

Dans le terminal du projet :

```bash
npm start
```

Ouvrir ensuite le port **3000** depuis l'onglet **Ports**.
Le terminal reste occupé pendant que l'application fonctionne.

## Lancer avec les boutons de Codespaces

Dans la barre latérale, ouvrir **Exécuter et déboguer** (icône triangle et insecte).
Choisir l'une des deux actions dans la liste en haut, puis cliquer sur **▶** :

- **Lancer l’application** exécute `npm start`.
- **Mettre à jour et relancer** exécute `npm run update`.

Avant de lancer une autre action, arrêter la session précédente avec le
**carré rouge ■** de la barre de débogage. Si l'application a été lancée
manuellement dans un terminal, l'arrêter d'abord avec **Ctrl+C**.
Ouvrir l'application depuis **Ports → 3000 → Open in Browser**, puis actualiser
son onglet après une mise à jour.

Les commandes sont aussi accessibles dans la section **NPM SCRIPTS** de
l'Explorateur : cliquer sur le bouton **▶** à côté de `start` ou `update`.

## Actualiser l'application

La branche `codex/mcq-trainer` regroupe les modifications de toute
l'application : interface, fonctionnalités et banques de questions.
Elle prend le relais de la branche `codex/ict-infrastructure-questions`.

Pour récupérer cette commande la première fois, arrêter l'application avec
**Ctrl+C**. Si `tsconfig.json` apparaît comme un fichier non suivi (`U`),
conserver d'abord ce réglage local en le renommant :

```bash
mv -n tsconfig.json tsconfig.backup.json
```

Puis récupérer la version partagée du projet :

```bash
git pull --ff-only origin codex/mcq-trainer
npm start
```

Le fichier `tsconfig.json` fait désormais partie du projet et utilise
`moduleResolution: "bundler"`, compatible avec les modules compilés par webpack.

Pour les mises à jour suivantes, arrêter l'application avec **Ctrl+C**, puis :

```bash
npm run update
```

Cette commande récupère les changements depuis GitHub et relance l'application.
Actualiser ensuite son onglet dans le navigateur. Si Git refuse la mise à jour,
la commande s'arrête sans écraser les fichiers locaux ; conserver le message
d'erreur pour diagnostiquer le problème. Elle n'installe pas de nouvelles
dépendances : une mise à jour qui en ajoute nécessitera aussi une installation.

## Vérifications

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```
