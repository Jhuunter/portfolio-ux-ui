# Guide de Déploiement — Portfolio UX/UI

Ce document explique comment mettre à jour le code, tester localement et déployer le portfolio en ligne. 

L'architecture du projet repose sur **Vite + React + TypeScript** (côté front-end) et le déploiement est automatisé via **GitHub & Vercel**.

---

## 🚀 1. Lancer le projet en local (Développement)

Avant de pousser des modifications en ligne, il est recommandé de les tester en local.

1. **Ouvrir le terminal** dans le dossier du projet (`Portfolio_UXUI`).
2. **Installer les dépendances** (uniquement la première fois ou lors de l'ajout de nouveaux packages) :
   ```bash
   npm install
   ```
3. **Démarrer le serveur de développement local** :
   ```bash
   npm run dev
   ```
4. Ouvrir l'adresse indiquée dans le terminal (généralement `http://localhost:5173` ou `http://localhost:5174`) dans un navigateur pour tester le site en temps réel.

---

## 📸 2. Ajouter de nouvelles images (ex: Selvitys, Ekoo, Answer It...)

Les maquettes et images sont stockées dans le dossier public :
📂 `public/assets/`

Pour ajouter des images :
1. Déposer le fichier (de préférence compressé en `.jpg` ou `.png` pour le web) dans le sous-dossier correspondant (ex: `public/assets/SELVITYS/`).
2. Mettre à jour le fichier `.tsx` du projet correspondant pour faire pointer le composant vers le nouveau chemin de l'image (ex : `/assets/SELVITYS/mon_image.jpg`).
   - Les fichiers de détails des projets se trouvent dans 📂 `src/app/projets/details/` (ex: `Selvitys.tsx`, `AnswerIt.tsx`, `Ekoo.tsx`, `Out.tsx`).

---

## ⚡ 3. Déployer les modifications en ligne (Production)

Le déploiement est **automatisé**. Chaque fois que vous envoyez (push) des modifications sur la branche principale de votre dépôt GitHub, Vercel détecte le changement, compile le site et le met en ligne en moins d'une minute.

Voici les étapes à suivre dans votre terminal :

### Étape 3.1 : Enregistrer les modifications localement
Ajouter tous les fichiers modifiés ou créés à l'index Git :
```bash
git add .
```

### Étape 3.2 : Créer un Commit (sauvegarde nommée)
Créer un message décrivant vos modifications :
```bash
git commit -m "Description des modifications (ex: Ajout des nouvelles images Selvitys)"
```

### Étape 3.3 : Envoyer en ligne (Push)
Pousser les modifications sur GitHub :
```bash
git push
```

---

## 🔍 4. Suivre le déploiement sur Vercel

Une fois le `git push` effectué :
1. Connectez-vous sur votre tableau de bord [Vercel](https://vercel.com).
2. Sélectionnez le projet de votre portfolio.
3. Allez dans l'onglet **Deployments** pour voir la compilation en cours (elle prend environ 30 à 45 secondes).
4. Une fois le statut passé au vert (**Ready**), le site est officiellement à jour sur votre nom de domaine personnalisé !

---

### 💡 Astuces en cas de problème :
- **Le site ne se met pas à jour ?** Vérifiez sur Vercel si le build n'a pas échoué (souvent à cause d'une erreur de syntaxe TypeScript ou d'un import manquant).
- **Une image ne s'affiche pas ?** Attention à la casse dans les noms de fichiers (ex: `.JPG` en majuscules vs `.jpg` en minuscules). Git et Vercel y sont très sensibles.
