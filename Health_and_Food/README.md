# Health & Food — Landing page

Page d'accueil qui oriente vers le GEMS (Gemini) d'analyse nutritionnelle.

**Emplacement du projet :** `Desktop/mes-applis/Alimentation/Health_and_Food`

## Contenu

- **Hero** : titre, sous-titre, CTA principal
- **La Méthode** : 5 étapes (saisie, calibration, diagnostic CIQUAL, ajustement, archivage)
- **Exemples** : 3 accordéons (plat traditionnel, déjeuner fonctionnel, gestion des écarts)
- **CTA final** : barres de progression + bouton vers le GEMS

## Modifier l'URL du GEMS

Remplacez `https://gemini.google.com/` par l'URL réelle de votre GEMS dans **index.html** (recherche : `href="https://gemini.google.com/"`).

## Prévisualisation

- Double-clic sur **index.html** pour ouvrir dans le navigateur.
- Ou depuis le terminal : `cd` dans ce dossier puis `python3 -m http.server 8080` → ouvrir http://localhost:8080

## Fichiers

- `index.html` — structure de la page
- `styles.css` — styles (bleu pétrole / émeraude, icônes lignes, data-viz)
- `script.js` — accordéons
