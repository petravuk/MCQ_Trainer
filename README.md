# MCQ Trainer

Application de QCM : préparation d'une session, questions avec correction,
résultats et historique. Les banques de questions sont dans `src/`.

## Tester dans Codespaces

Dans le terminal du projet :

```bash
npm start
```

Ouvrir ensuite le port **3000** depuis l'onglet **Ports**.
Le terminal reste occupé pendant que l'application fonctionne.

## Actualiser l'application

La branche `codex/mcq-trainer` regroupe les modifications de toute
l'application : interface, fonctionnalités et banques de questions.
Elle prend le relais de la branche `codex/ict-infrastructure-questions`.

Pour récupérer cette commande la première fois, arrêter l'application avec
**Ctrl+C**, puis exécuter :

```bash
git pull --ff-only origin codex/mcq-trainer
npm start
```

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
