# AgroStock

AgroStock est un annuaire mobile-first d’entrepôts, hangars, dépôts et espaces de stockage à louer ou à vendre en Guinée-Bissau.

Le projet aide les commerçants, producteurs et responsables logistiques à trouver un espace, consulter ses caractéristiques, voir sa localisation et contacter directement son propriétaire par appel ou WhatsApp.

## Fonctionnalités

- Annuaire d’espaces de stockage avec données locales de démonstration.
- Recherche par ville, quartier et nom d’annonce.
- Filtres par localisation, type d’espace et transaction.
- Fiches détaillées dans un dialog accessible avec superficie, description, équipements, propriétaire, contacts et carte OpenStreetMap.
- Appel direct et WhatsApp avec message prérempli.
- Interface en français, portugais et anglais.
- Header partagé entre l’annuaire, À propos et Comment ça marche.
- Design responsive pour mobile, tablette et ordinateur.
- Installation comme Progressive Web App (PWA).
- Cache hors ligne du shell principal grâce au service worker.

## Stack technique

- Next.js 16 avec App Router.
- React 19 et TypeScript.
- Tailwind CSS 4 via PostCSS.
- Lucide React pour les icônes.
- Shadcn UI / Radix UI pour le sélecteur de langue et les dialogs.
- OpenStreetMap pour les cartes.
- Service worker natif pour la PWA.

Le projet est actuellement un MVP front-end. Les annonces sont stockées dans `data/warehouses.ts` et aucun serveur de base de données n’est nécessaire pour démarrer.

## Prérequis

- Node.js 20 ou supérieur recommandé.
- npm ou pnpm.
- Git.

## Installation et développement

Avec pnpm : `git clone https://github.com/elsonwets/agrostock.git`, puis `cd agrostock`, `pnpm install` et `pnpm dev`.

Avec npm : `npm install`, puis `npm run dev`.

L’application est disponible sur [http://localhost:3000](http://localhost:3000).

Il est recommandé de conserver un seul fichier lock : `pnpm-lock.yaml` si le projet est géré avec pnpm.

## Scripts

| Commande | Description |
| --- | --- |
| `pnpm dev` | Lance Next.js en développement |
| `pnpm build` | Génère le build de production |
| `pnpm start` | Lance le build de production |
| `pnpm lint` | Vérifie le code avec ESLint |

## Structure principale

- `app/page.tsx` : page principale de l’annuaire.
- `app/layout.tsx` : layout global, header partagé et PWA.
- `app/globals.css` : styles et identité visuelle.
- `app/a-propos/page.tsx` : présentation d’AgroStock.
- `app/comment-ca-marche/page.tsx` : parcours utilisateur en trois étapes.
- `app/manifest.ts` : manifeste PWA.
- `components/warehouse-directory.tsx` : recherche, filtres, cartes et dialogs.
- `components/site-header.tsx` : navigation commune et sélecteur FR/PT/EN.
- `components/language-provider.tsx` : état global de la langue.
- `components/ui/` : composants Shadcn UI.
- `data/warehouses.ts` : annonces de démonstration.
- `public/sw.js` : service worker.
- `public/agrostock-logo-v2.png` : logo principal.
- `public/pwa-icon-1024.png` : icône d’installation.

## Ajouter une annonce

Les annonces sont définies dans `data/warehouses.ts`. Chaque objet contient un identifiant, un nom, une ville, un quartier, un type (`Location` ou `Vente`), une catégorie, une superficie, une image, un téléphone, des tags, une description, des coordonnées GPS et le nom du contact.

Exemple de coordonnées : `coordinates: [11.957, -15.649]`. Elles servent à positionner le marqueur dans la carte OpenStreetMap du dialog.

Les prix peuvent rester dans les données internes pour une future évolution, mais ils ne sont pas affichés dans l’interface actuelle.

## Contacts WhatsApp

Le bouton « Publier un warehouse » redirige vers `+245 957 783 202`.

Le lien de publication est configuré dans `components/site-header.tsx` et `components/warehouse-directory.tsx`. Les boutons présents dans les cartes utilisent les numéros propres à chaque propriétaire.

## Langues

`LanguageProvider` gère la langue côté client. Les langues disponibles sont `FR`, `PT` et `EN`. Les textes principaux de l’accueil, des filtres, des actions et des dialogs sont traduits. Les noms d’annonces et certaines informations métier restent dans leur langue de saisie.

## PWA

Le projet fournit `/manifest.webmanifest`, `/sw.js` et `/pwa-icon-1024.png`. Pour tester l’installation, lancer le projet, ouvrir l’application dans Chrome ou Edge, puis choisir « Installer AgroStock » dans le menu du navigateur.

Le service worker met en cache les pages principales, le logo, les icônes et les visuels locaux. Une connexion reste nécessaire pour charger les cartes OpenStreetMap et ouvrir WhatsApp.

## Build et déploiement

Avant livraison, exécuter `pnpm lint`, `pnpm build` et `pnpm start`.

Le projet est compatible avec Vercel. Après `npm i -g vercel` et `vercel login`, utiliser `vercel` pour un aperçu ou `vercel --prod` pour la production. Le preset recommandé est `Next.js`, avec Node.js 20 ou supérieur.

## Git

Les fichiers générés ne doivent pas être versionnés. Le `.gitignore` doit contenir au minimum : `node_modules/`, `.next/`, `out/`, `dist/`, `.env`, `.env.*`, `!.env.example`, `*.log` et `.vercel/`.

Commandes de base : `git status`, `git add .`, `git commit -m "feat: build AgroStock warehouse directory"`, puis `git push origin master`.

## Évolutions prévues

- Base de données pour les annonces réelles.
- Formulaire propriétaire et espace de gestion.
- Authentification et modération des annonces.
- Upload d’images.
- Recherche géographique autour de l’utilisateur.
- Filtres de capacité, superficie et équipements.
- Statistiques et suivi des contacts.

## Licence

Projet privé AgroStock. Ajouter une licence explicite avant toute distribution publique du code ou des contenus.
