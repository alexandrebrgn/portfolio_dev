---
title: Ma To-Do Liste
publishDate: 2025-01-10
img: /assets/matodoliste/matodoliste.png
img_alt: Ma to-do liste
description: zerzerf
tags:
  - Perso
  - React + Vite
  - TypeScript
  - shadcnui
---

<img src="/assets/matodoliste/app.gif" width="1000">

## Intro

Un petit projet en **React-TypeScript + Vite et shadcn/ui** qui reproduit le comportement d'une **To-Do Liste classique**.

Dans laquelle vous pouvez :
- ➕ **Créer des tâches** avec un titre, une ddeadline et un niveau de priorité
- ✅ Marquer comme complété grâce à une case à cocher
- ✏️ Mettre à jour dynamiquement la tâche (son titre, sa deadline, sa priorité)
- 🗑️ Supprimer définitivement la tâche

### ✨ Fonctionnalités spéciales

- 💾 Les tâches sont stockées dans le cache du navigateur, elle ne seront jamais perdues mise à part la suppression directe du cache.
- 🌟 Dévelopé avec les composants de [shadcn/ui](https://ui.shadcn.com/) et les icones de [MynaUI](https://mynaui.com/icons) pour créer une UI simple et moderne.

### 🔗 Projet déployé sur Vercel

Grâce à Vercel, vous pouvez aller visiter ce projet

- ##### [👀 Visiter le site](https://react-todolist-ywxu.vercel.app/)
### 📄 Architecture du projet

```
📂 to_do_list
├── 📂 public
│   └── 📁 fonts
├── 📂 src
│   ├── 📂 components
│   │   ├── 📁 components
│   │   └── 📁 ui (shadcn/ui)
│   ├── 📁 context
│   ├── 📁 helpers
│   ├── 📁 hooks
│   ├── 📁 styles
│   ├── 📁 types
│   ├── 📁 utils
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
├── 📄 .gitignore
├── 📄 package.json
└── 📄 other config files
```