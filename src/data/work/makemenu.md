---
title: MakeMenu
publishDate: 2026-04-12 00:00:00
img: /assets/makemenu/foods.png
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: Alizon Group est une entreprise réelle pour laquelle on va créer une application entière 
tags:
  - Perso
  - Nuxt
  - Prisma
---

## Intro

MakeMenu est un projet que j'ai développé après avoir découvert une nouvelle technologie en entreprise, NuxtJS. Le but principal de cette application est de pouvoir générer un prompt à donner à l'IA favorite de l'utilisateur pour créer un menu, principalement en fonction des aliments qu'on a déjà chez nous, dont on ne sait dans quelle recette les cuisiner ou qui vont bientôt périmer.
Elle a donc plusieurs particularités.

#### Pour commencer, vous pouvez visiter [Make-Menu](https://make-menu.vercel.app/auth/login) dès maintenant.

### Backend

Premièrement, la solution gratuite que j'ai utilisée pour ce projet pour stocker ses données est [Prisma](https://www.prisma.io/), un ORM moderne qui sert d'intermédiaire entre l'application et la base de données. Un plan gratuit suffisait donc largement pour mon utilisation personnelle car sur une base Postgres, elle permet 100 000 requêtes par mois.

### Frontend

Le frontend est développé en Nuxt + Vue, une combinaison efficace que j'ai apprise à maîtriser lors de mon alternance en entreprise. Une conversion en PWA permet de télécharger l'application sur mobile ou desktop.

L'utilisation des stores est optimale afin d'éviter les requêtes inutiles.
___

Les vues login et register permettent de créer un compte et de pouvoir utiliser l'application.

#### Vue Login
<img src="/assets/makemenu/login.png"><img src="/assets/makemenu/register.png">


#### Vue Register
<img src="/assets/makemenu/register.png">

#### Frigidaire

Dans la vue Frigidaire, l'utilisateur indique les aliments qui y sont présents ainsi que dans son placard. On peut y indiquer des fruits, des légumes, tout comme des viandes et du poisson ou encore du sucre.

<img src="/assets/makemenu/fridge-desktop.png">

<img src="/assets/makemenu/fridge-mobile.png">

#### Cuisine 

Ici on indique tous les appareils que l'on possède (air-fryer, poêle, casseroles, four...) pour pouvoir produire une recette de la meilleure des manières.

#### Profil

Dans le profil de l'utilisateur, on peut préciser les préférences et petites particularités comme les calories que l'on souhaite, le nombre de repas à produire si on cuisine pour le lendemain midi, les allergies etc..

Également on peut calculer son besoin calorique afin d'ajuster le régime du repas.

#### Terminal

C'est ici dans la vue "terminal" que l'utilisateur va pouvoir générer son prompt basé sur les données enregistrées dans son frigidaire, dans sa cuisine et ses informations personnalisées.

Un simple clic ou appui sur le bouton **[générer]**, et il n'y a plus qu'à copier le prompt.

<img src="/assets/makemenu/terminal-desktop.png">
<img src="/assets/makemenu/terminal-mobile.png">