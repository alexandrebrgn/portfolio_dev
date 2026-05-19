---
title: Seven
publishDate: 2024-12-01 00:00:00
img: /assets/seven/preview.png
img_alt: Image de la page accueil de l'application web Selenium
description: |
  Interface web d'une application chat créée pour permettre aux utilisateurs d'un jeu fictif de pouvoir communiquer entre eux plus facilement.
tags:
  - Etudes
  - "MOBILE : DART + Flutter"
  - "API : Laravel"
---

## Résumé de l'application

##### Situation professionnelle de 2ème année de BTS SIO

Ce projet a été réalisé seul et il comporte une API et une application mobile.

Ce projet est fictivement destiné à une entreprise de **location de véhicules**. L'**application mobile** permettra de s'occuper des **contrôles visuels** à effectuer lors de la **restitution** et de la **récupération** des véhicules. Elle permettra de créer un **rapport** à ces moments-là pour déterminer si oui ou non, et quelles parties du véhicule ont été endommagées.

  - Mobile : Dart + Flutter
  - Web : Laravel
  - Query Tests : Bruno

## Aperçu de l'application

Quelques captures d'écran de l'application afin d'avoir une idée
- ### Login Page

    <div style="display: flex; align-items: flex-start; gap:10px;">
        <img src="/assets/seven/login.png" width="200" style="border:>
        <div>
            La login page permet de se <strong>connecter à l'application</strong> à l'aide de ses identifiants.
            La vérification d'un <strong>token</strong> dans le <strong>stockage</strong> local permet une connexion automatique à l'application.
        </div>
    </div>

- ### Accueil
    <div style="display: flex; align-items: flex-start; gap:10px;">
        <img src="/assets/seven/home.png" width="200" >
  <div>
            L'<strong>accueil de l'application</strong> qui fonctionne un peu comme un petit <strong>tableau de bord</strong>.
            On peut y trouver le nombre de véhicules à préparer.
    </div>

- ### Préparation
    <div style="display: flex; align-items: flex-start; gap:10px;">
        <img src="/assets/seven/restitute.png" width="200">
  <div>
            Voici la page sur laquelle on peut retrouver <strong>tous les véhicules</strong> à préparer, c'est-à-dire à vérifier avant de les céder au client.
    </div>

- ### Rapport
    <div class="flex">
        <img src="/assets/seven/report.png" width="200">
        <img src="/assets/seven/report_2.png" width="200">
        <div>
            <strong>Remplissage d'un rapport</strong> lié à un véhicule en particulier.
            On y trouve des <strong>cases à cocher</strong> pour chaque partie du véhicule avec sa <strong>gravité du dommage</strong>.
            On peut y laisser une <strong>observation supplémentaire</strong> et on doit y indiquer le <strong>kilométrage</strong> lors du contrôle.
        </div>
    </div>

- ### Rapport fini
  <div style="display: flex; align-items: flex-start; gap:10px;">
      <img src="/assets/seven/report_done.png" width="200">
      <div>
        Le <strong>rapport</strong> a bien été créé, on peut retrouver <strong>l'immatriculation</strong> du véhicule dans l'alerte qui apparaît en bas de l'écran.
      </div>
  </div>
