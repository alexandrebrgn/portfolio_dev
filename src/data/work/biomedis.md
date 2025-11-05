---
title: Biomedis
publishDate: 2025-02-10
img: /assets/biomedis/preview.png
img_alt: Screen of Biomedis Project
description: Biomedis est une entreprise de relation medecin-praticien, qu ipropose des visites chez les praticien pour tester des médicaments. Cette application est composé d'une applications web et de son API.
tags:
  - Etudes
  - "WEB : React Vite"
  - "API : AdonisJs"
---

## Intro

Biomedis est une entreprise fictive sur laquelle pour laquelle j'ai créé une application lors de la dernière situation professionelle de BTS SIO 2ème anné.

C'est une entreprise de relation **médecin-praticien**, qui propose des **visites** chez les **praticiens** pour tester des médicaments et pouvoir recevoir des échantillons.

Cette application est composée d'une API développée en **AdonisJs** et **TypeScript** et d'une application web développée en **React** + **Vite** et **TypeScript**

Pour réaliser le front de l'application web, la techno **shadcnui** a été utilisée.
### MCD

Pour mieux comprendre l'application voici le **MCD** de la base de données de l'application.

<img src="/assets/biomedis/mcd.png" width="1000">

## Visuels de l'application

Quelques screenshot de l'application afin d'avoir une idée

#### Login

<img src="/assets/biomedis/login.png" width="1000" style="border: solid darkgray 1px">

La page d'**authentification** de l'application est son **point d'entrée** elle permet de s'**identifier** pour pouvoir accéder à l'application.

Elle **vérifie** aussi la **présence** est la **validité** d'un **token** dans le **stockage local** afin de ne pas avoir à passer par cette étape.

#### Praticiens

<img src="/assets/biomedis/user.png" width="1000" style="border: solid darkgray 1px">

La page **portefeuille de praticiens** permet de choir un des praticiens qui sont dans le même secteur que l'intervenant et de planifier un rendez-vous avec lui à l'avenir.

Pour cela, on peut chercher le praticien voulu dans la barre de recherche et selectioner organiser une visite.

<img src="/assets/biomedis/program.png" width="1000" style="border: solid darkgray 1px">

#### Compte-rendu de visite

<img src="/assets/biomedis/report.png" width="1000" style="border: solid darkgray 1px">

La page **compte-rendus** permet de **vérifier** les **compte-rendu à rédiger** après avoir effectué la visite chez le praticien et de voir les **compte-rendus rédigés** par le passé.

Lors de l'appui sur le bouton **rédiger** d'un des compte-rendus on se rend sur cette page.

<img src="/assets/biomedis/makereport.png" width="1000" style="border: solid darkgray 1px">

Dans ce **rapport** on peut indiquer les **observations** effectuées pendant la visite, les **problèmes** relevés par le **praticien**, son **évaluation** sur la **qualité des produits** proposés ainsi que sur la **confiance** que ce praticien manifeste envers **Biomedis**.

En dernier il faut indiquer quels échantillons de **médicaments** a été fournis au client ainsi que leur **quantité**. 