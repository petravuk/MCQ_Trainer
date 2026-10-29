# Comparaison avec l'avis ICT fourni — 29 octobre 2026

Document lu : **OJ_C_202602425_EN_TXT.pdf**, avis C/2026/2425 du 6 mai 2026,
concours **EPSO/AD/429/26**, domaine 1, ICT Infrastructure.
Le fichier fourni a permis de lire le texte intégral malgré l'échec de lecture
du lien EUR-Lex. Son empreinte est conservée dans `ict-source-review.json`.

L'annexe II, pages 20–21, présente dix familles de fonctions. Ce sont des fonctions
types, pas une liste de questions officielles ni un programme avec une
pondération par sujet.

| Avis : domaine 1, annexe II | Thème d'entraînement correspondant |
| --- | --- |
| 1. Infrastructure d'entreprise et centres de données | Enterprise infrastructure |
| 2. Exploitation et gestion des services | IT service management |
| 3. DevSecOps et automatisation | DevSecOps and automation |
| 4. Sécurité et continuité | Information security and continuity |
| 5. Cycle de vie technique | ICT infrastructure lifecycle |
| 6. Veille et technologies émergentes | Emerging technologies |
| 7. Portefeuilles et documentation | Infrastructure portfolios and documentation |
| 8. HPC : stratégie, architecture et exploitation | High-performance computing |
| 9. Quantique : évaluation et intégration dans l'infrastructure | Quantum technologies |
| 10. Équipes, prestataires et SLA | Teams, suppliers and SLAs |

## Adaptations après lecture du PDF

Neuf questions existantes sont remplacées ; la banque conserve **300 entrées**.

| ID | Point mieux couvert | Référence de l'avis |
| --- | --- | --- |
| `035` | Gestion des appareils et accès conditionnel à la suite cloud | 1(h) |
| `037` | LDAP et annuaires | 1(e) |
| `043` | Acceptation et livraison SMTP | 1(c) |
| `045` | Administration d'un pool JDBC Tomcat | 1(c) |
| `048` | Identité, OAuth et OpenID Connect pour le SSO | 1(e) |
| `049` | Restauration PostgreSQL à un instant choisi | 1(b), 1(d) |
| `234` | Acceptation d'un service HPC intégré : IAM, données, sécurité et KPI | 8(b)–(d) |
| `259` | Évaluer un pilote quantique/HPC face à une référence classique, de bout en bout | 9(a) |
| `261` | Données de capteurs : unités, horodatage, calibration et incertitude | 9(c) |

Les réponses techniques s'appuient aussi sur LDAP/RFC 4511, SMTP/RFC 5321,
OpenID Connect, Intune, Apache Tomcat, PostgreSQL, AWS HPC et le vocabulaire
métrologique JCGM. L'avis ne sert pas de corrigé technique.

## Format de l'épreuve et limites

La section 4.3.2(c), tableau 4, page 9, prévoit **30 questions en 40 minutes**,
en langue 2, une note de 0 à 30 et un seuil de 15/30. Le seuil seul ne suffit
pas : le classement intervient aussi. Cela concerne cet avis ICT et ne fixe
pas le nombre de questions d'entraînement, ni le format du concours interne EP.

Les exemples de produits et de fonctions sont très étendus. La banque ne prétend
pas couvrir toutes les commandes ou particularités de chaque produit cité
(notamment les différentes suites de collaboration, solutions d'impression,
middleware et bases de données propriétaires). Sa répartition entre sujets
reste pédagogique. Les prochains ajouts ou révisions seront manuels.
