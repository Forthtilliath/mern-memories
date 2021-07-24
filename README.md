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

J'ai bien entendu rencontré de multiples erreurs lors du développement de ce projets. Malgré les sources à disposition, il n'était pas toujours facile de corriger les erreurs que je rencontrais.

Si je devais trouver un point négatif à Réact, ce serait bien celui là. Le fait d'avoir des fichiers js compilés, cela rend plus complexe de trouver l'origine des erreurs.

## Connexion de Heroku à Mongodb

Par question de sécurité, j'avais limité la connexion à MongoDB a mon IP. Hors cela empêchait Heroku de s'y connecter. A moins d'enregistrer ma CB afin d'obtenir une IP statique, je n'ai pas trouvé d'autres solutions que d'accepter toutes les IP à se connecter à MongoDB.

## Réactualisation sur Netlify

les vidéos montrent comment mettre son front en ligne sur Netlify, toutefois, React étant une application one-page, le fait de réactualiser sa page sur Netlify provoquait une erreur car le fichier posts n'existe pas.

![netfily](/screenshots/refreshs_netlify.png)

Après avoir trouvé une piste via des redirections à l'aide d'un fichier ``.htaccess`` sans succès, j'ai trouvé la solution qui était de générer les redirections à l'aide d'un fichier ``_redirects``.

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

## Google Auth

Dans un projet différent, j'avais découvert comment mettre une connexion à une application à l'aide de Google. Pour cela, j'avais utilisé Firebase. Dans ce projet, cela a été fait différemment, à l'aide d'une librairie Réact 'react-google-login'. Il a été bien plus facile de mettre la connexion via google en place de cette façon.

Toutefois, cette méthode ne prend en compte que Google contrairement à Firebase.

# Corrections et améliorations apportées

## Bouton modifier une memory

Après avoir ajouté le fait de pouvoir cliquer sur l'ensemble de la mémoire pour afficher ses détails, le lien pour modifier celle ci n'est plus accessible, ce qui peut être génant.

Après un simple ajout pour stopper la propagation du lien, le bouton était de nouveau disponible.

## Ajouter des contrôles lors de l'envoi d'une mémoire

Aucun champs n'est contrôlé lors de la validation du formulaire pour ajouter une mémoire.

En front, une condition pour désactiver le bouton Submit a été mis en place si un champ était vide.

// TODO Faire en back

# Améliorations possibles

## Mieux gérer les connexions à MongoDB

Oui, car je n'aime pas d'avoir dû accepter toutes les IP. Je trouve que question sécurité, ce n'est pas optimale. 

## Mieux gérer les images

Gérer les images de la façon actuelle a aussi des inconvénients. A aucun moment l'image n'est compressée ce qui a pour effet que si l'image fait plusieurs Mo, elle sera enregistrée tel quelle. L'espace disque demandée peut vite devenir incroyable si de nombreuses memories sont postées !

Il n'existe aucune vérification au niveau du format du fichier uploadé. Il serait donc appréciable de mettre cela en place.

De plus, aucune vérification au niveau de la taille de l'image, ainsi qu'aucune compression.

https://dev.to/wchr/compress-images-in-react-react-image-file-resize-4oni

## Réactualisation après une recherche

La recherche fonctionne correctement, toutefois si on réatualise la page, la recherche bloque et ne retourne aucun résultat.

De plus, si la recherche ne porte que sur des tags, searchQuery a pour valeur ``none``. Cela provoque un effet secondaire :

![none](/screenshots/search_none.png)

Comme le montre l'image, les titres contenant ``none`` se voient aussi affiché dans les résultats de la recherche ! Ce qui n'est bien entendu pas désiré.

# Conclusion

Ce projet a vraiment été intéressant. Pas toujours facile à suivre, car en anglais et ca allait parfois un peu vite, mais la persévérance a payé.

Malgré le fait que j'avais déjà fait un projet MERN sur un réseau social, je dois avoir que j'ai découvert une approche différente de faire les choses.

J'ai aussi appris comment mettre en ligne un site MERN. Ceci pourra me servir lors des projets intéressant à montrer dans un portfollio.

Voici la version en ligne du projet : https://mern-memories-forth.netlify.app/