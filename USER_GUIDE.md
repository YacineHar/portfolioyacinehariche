# Documentation Utilisateur – Portfolio Yacine Hariche Développeur Full Stack

## Présentation générale

Ce portfolio présente mon profil de développeur Full Stack. Il permet de consulter mon parcours, mes compétences, mes projets et de me contacter directement via un formulaire.

Le site est constitué d’une navigation fluide grâce à la technologie React.js. La navigation est accessible depuis la barre de navigation en haut de la page.

---

## Structure du Portfolio

### 1. Accueil

- La barre de navigation située en haut de page est toujours affichée, permettant d’accéder directement à chaque section en cliquant sur les libellés :
  - Accueil
  - À propos de moi
  - Mes projets
  - Me contacter

- Le lien actif est visuellement souligné pour indiquer la section en cours de consultation.

- **Contenu** : 
  - Mon nom et prénom
  - Mon titre professionnel ("Développeur Full Stack...")
  - Un bouton "Mes Projets" qui permet un défilement automatique vers la section correspondante.
  - Animation de fond en SCSS, de type ciel nocturne étoilé.

### 2. À propos de moi

- **Contenu** :
  - Une brève description du parcours de Yacine Hariche
  - Les compétences techniques affichées sous forme de barres de progression (HTML, CSS, JavaScript, ReactJS, PHP, Python, etc.).
  
- **Interaction** :
  - Aucun clic requis : tout est affiché à l’arrivée sur la section.

### 3. Mes Formations

- **Contenu** :
  - Liste des établissements fréquentés et formations suivies, avec les années et une courte description.
  
- **Affichage** :
  - Présentée sous forme de liste claire, chaque élément étant encadré de manière uniforme.

### 4. Intérêts & Loisirs

- **Contenu** :
  - Une galerie de cartes représentant mes loisirs favoris (ex. : Jeux-vidéos, Pop culture, Musique…).
  - Chaque carte comprend une image de fond illustrant l’intérêt, avec le nom visible au premier plan.

- **Comportement** :
  - Section purement informative, sans action interactive.

### 5. Mes Projets

- **Contenu** :
  - Plusieurs projets réalisés sont présentés en grille.
  - Chaque carte contient un carrousel de plusieurs images de présentation, un titre et une brève description.

- **Interaction** :
  - Ces cartes possèdent un bouton (icône “+”) qui redirige vers la page de mon dépôt github.

### 6. Me Contacter

- **Contenu** :
  - Formulaire de contact avec les champs :
    - Nom
    - Email
    - Objet
    - Message
  - Bouton d’envoi
  - Liste des réseaux sociaux (Instagram, GitHub, LinkedIn, mon numéro de téléphone)
  - Icône de téléphone avec mon numéro qui s'affiche au survol.
  - Bouton permettant de télécharger mon CV

- **Fonctionnalité prévue** :
  - Le formulaire peut être connecté à un service d’emailing ou de base de données (ex : Supabase) selon la configuration choisie.


## Compatibilité

- Le portfolio est responsive et s’adapte à tous types d’écrans (ordinateurs, tablettes, smartphones).
- Les éléments sont organisés verticalement sur mobile, avec un espacement adapté.
