# Introduction

Ce projet a pour but de développer un projet MERN (Mongoose, Express, React et Nodejs). Le projet est un réseau social et suit les 3 vidéos suivantes :
- [Partie 1 : Initialisation et Création post](https://www.youtube.com/watch?v=ngc9gnGgUdA)
- [Partie 2 : Suite du CRUD, Likes et Déploiement](https://www.youtube.com/watch?v=aibtHnbeuio)
- [Partie 3 : Connexion](https://www.youtube.com/watch?v=LKlO8vLvUao)
- [Partie 4 : Pagination et Recherche](https://www.youtube.com/watch?v=46NRrn4xi5Y)
- [Partie 5 : Commentaires](https://www.youtube.com/watch?v=46NRrn4xi5Y)

# Intérêts du projet

Je suis tout d'abord très intéressé par ce projet car c'est un projet MERN et qu'il utilise Redux, une bibliothèque avec laquelle j'ai encore des difficultés. 

# Difficultés rencontrées

## Connexion de Heroku à Mongodb

Par question de sécurité, j'avais limité la connexion à MongoDB a mon IP. Hors cela empêchait Heroku de s'y connecter. A moins d'enregistrer ma CB afin d'obtenir une IP statique, je n'ai pas trouvé d'autres solutions que d'accepter toutes les IP à se connecter à MongoDB.

# Ce que m'a apporté ce projet

## Gain d'expériences sur la mise en ligne

Lors de ce projet, j'ai eu l'occasion de revoir comme mettre en ligne gratuitement le back à l'aide de Heroku et le front à l'aide de Netlify. 

## Material UI et makeStyles

Ce projet utilise Material UI et makeStyles de A à Z, ce qui m'a vraiment permis de voir son potentiel.

## Fichier API

Un fichier api a été mis en place pour recenser l'ensemble des connexions au back. J'ai trouvé cela très pratique car en un clin d'oeil, on voit directement toutes connexions. En cas d'erreurs lors de la liaison, cela simplifie énormement le débogage.

![api](/screenshots/api.png)

## Gestion des images

Dans tout mes projets précédents sur lesquels l'utilisateur pouvait enregistrer une image, l'image était upload et stockée sur le serveur. Par exemple, si on supprimait ou modifiat le post, il fallait toujours penser à supprimer l'ancienne image. Dans le projet actuel, l'image n'est pas directement enregistrée, mais on enregistre son code directement dans mongodb. Cela a pour avantage de simplifier la gestion annexte de celles ci.

## Google Auth

Dans un projet différent, j'avais découvert comment mettre une connexion à une application à l'aide de Google. Pour cela, j'avais utilisé Firebase. Dans ce projet, cela a été fait différemment, à l'aide d'une librairie Réact 'react-google-login'. Il a été bien plus facile de mettre la connexion via google en place de cette façon.

# Corrections et améliorations apportées



# Améliorations possibles

## Mieux gérer les connexions à MongoDB

Oui, car je n'aime pas d'avoir dû accepter toutes les IP. Je trouve que question sécurité, ce n'est pas optimale. 


https://mern-memories-forth.herokuapp.com/posts
https://mern-memories-forth.netlify.app/