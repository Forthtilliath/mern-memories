# Introduction

Ce projet a pour but de développer un projet MERN (Mongoose, Express, React et Nodejs). Le projet est un réseau social et suit les 3 vidéos suivantes :
- [Partie 1 : Initialisation et Création post](https://www.youtube.com/watch?v=ngc9gnGgUdA)
- [Partie 2 : Suite du CRUD, Likes et Déploiement](https://www.youtube.com/watch?v=aibtHnbeuio)
- [Partie 3 : Connexion](https://www.youtube.com/watch?v=LKlO8vLvUao)
- [Partie 4 : Pagination et Recherche](https://www.youtube.com/watch?v=46NRrn4xi5Y)
- [Partie 5 : Commentaires](https://www.youtube.com/watch?v=46NRrn4xi5Y)

# Intérêts du projet

Je suis tout d'abord très intéressé par ce projet car c'est un projet MERN et qu'il utilise Redux, une bibliothèque avec laquelle j'ai encore des difficultés. De plus, ce projet utilise Material-UI qui est l'un des frameworks les plus utilisés (si ce n'est le plus avec Réact).

Une gestion de pagination est utilisée sur ce projet. N'en ayant jamais fait en Réact, cela me fera découvrir les outils à disposition pour réussir ça facilement avec Réact.

Ce projet met aussi en place la connexion via Google mais sans Firebase. Cela sera l'occasion de découvrir d'autres façons de faire.

# Difficultés rencontrées

## Connexion de Heroku à Mongodb

Par question de sécurité, j'avais limité la connexion à MongoDB a mon IP. Hors cela empêchait Heroku de s'y connecter. A moins d'enregistrer ma CB afin d'obtenir une IP statique, je n'ai pas trouvé d'autres solutions que d'accepter toutes les IP à se connecter à MongoDB.

## 

# Ce que m'a apporté ce projet

## Gain d'expériences sur la mise en ligne

Lors de ce projet, j'ai eu l'occasion de revoir comme mettre en ligne gratuitement le back à l'aide de Heroku et le front à l'aide de Netlify. 

## Material UI et makeStyles

Ce projet utilise Material UI et makeStyles de A à Z, ce qui m'a vraiment permis de voir son potentiel, que cela soit au niveau des props ou que cela soit au niveau du style fait en JS.

## Fichier API

Un fichier api a été mis en place pour recenser l'ensemble des connexions au back. J'ai trouvé cela très pratique car en un clin d'oeil, on voit directement toutes connexions. En cas d'erreurs lors de la liaison, cela simplifie énormement le débogage.

![api](/screenshots/api.png)

## Gestion des images

Dans tout mes projets précédents sur lesquels l'utilisateur pouvait enregistrer une image, l'image était upload et stockée sur le serveur. Par exemple, si on supprimait ou modifiat le post, il fallait toujours penser à supprimer l'ancienne image. Dans le projet actuel, l'image n'est pas directement enregistrée, mais on enregistre son code directement dans mongodb.

Cela a pour avantage de simplifier la gestion annexe de celles ci. Dès le moment où l'on supprime le post, le code de l'image l'est en cascade. De même lors de la modification, le code de l'ancienne image est directement remplacée.

L'inconvénient a ça est que l'on ne compresse à aucun moment l'image. Si l'image fait plusieurs Mo, elle sera enregistrée tel quelle.

## Google Auth

Dans un projet différent, j'avais découvert comment mettre une connexion à une application à l'aide de Google. Pour cela, j'avais utilisé Firebase. Dans ce projet, cela a été fait différemment, à l'aide d'une librairie Réact 'react-google-login'. Il a été bien plus facile de mettre la connexion via google en place de cette façon.

Toutefois, cette méthode ne prend en compte que Google contrairement à Firebase.

# Corrections et améliorations apportées



# Améliorations possibles

## Mieux gérer les connexions à MongoDB

Oui, car je n'aime pas d'avoir dû accepter toutes les IP. Je trouve que question sécurité, ce n'est pas optimale. 

## Mieux gérer les images

Il n'existe aucune vérification au niveau du format du fichier uploadé. Il serait donc appréciable de mettre cela en place.

De plus, aucune vérification au niveau de la taille de l'image, ainsi qu'aucune compression.


# Conclusion

Ce projet a vraiment été intéressant. Pas toujours facile à suivre, car en anglais et ca allait parfois un peu vite, mais la persévérance a payé.

Malgré le fait que j'avais déjà fait un projet MERN sur un réseau social, je dois avoir que j'ai découvert une approche différente de faire les choses.
https://mern-memories-forth.netlify.app/