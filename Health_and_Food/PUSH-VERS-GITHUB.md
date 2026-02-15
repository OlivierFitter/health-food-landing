# Envoyer le site Health & Food sur GitHub

## Où en est-on ?

- **Sur ton Mac** : le dossier `Health_and_Food` (Bureau → mes-applis → Alimentation) contient tout le site (index.html, styles.css, etc.) et Git est déjà prêt avec un commit.
- **Sur GitHub** : le dépôt `health-food-landing` existe mais est vide (0 octets) car le code n’a pas encore été envoyé.

Il faut donc **une seule action** : envoyer le code du dossier vers GitHub (= faire un « push »).

---

## Méthode simple (dans Cursor)

### 1. Ouvrir le bon dossier dans Cursor

1. Ouvre **Cursor**.
2. Menu **Fichier** → **Ouvrir un dossier** (ou **File** → **Open Folder**).
3. Va dans : **Bureau** → **mes-applis** → **Alimentation** → **Health_and_Food**.
4. Clique sur **Ouvrir** (ou **Open**).

Tu dois voir dans la barre latérale gauche les fichiers : `index.html`, `styles.css`, `script.js`, `README.md`.

### 2. Ouvrir le terminal dans Cursor

1. En haut : menu **Terminal** → **New Terminal** (ou **Nouveau terminal**).
2. Un terminal s’ouvre en bas de la fenêtre. Il doit être déjà dans le dossier `Health_and_Food`.

### 3. Taper la commande d’envoi

Dans ce terminal, tape exactement :

```
git push -u origin main
```

Puis appuie sur **Entrée**.

### 4. Si une fenêtre de connexion s’ouvre

- GitHub ou Cursor peut demander de te connecter.
- Connecte-toi avec ton compte GitHub (**olivierfitter@gmail.com** / OlivierFitter).
- Une fois connecté, réessaie si besoin : `git push -u origin main`

### 5. Quand ça a marché

Tu verras un message du type : `Branch 'main' set up to track 'origin/main'` et des lignes avec `Writing objects: 100%`.

Après ça, sur https://github.com/OlivierFitter/health-food-landing tu verras tous les fichiers (plus 0 octets).

---

## En résumé

| Où | Quoi |
|----|------|
| **Sur ton Mac** | Dossier `Health_and_Food` = ton site + Git prêt |
| **Sur GitHub** | Dépôt `health-food-landing` = vide pour l’instant |
| **À faire** | Dans Cursor : ouvrir `Health_and_Food` → Terminal → `git push -u origin main` |

Si une erreur s’affiche dans le terminal, copie-colle le message ici et on le corrige.
