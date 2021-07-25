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

Un fichier api a été mis en place pour recenser l'ensemble des connexions au back. J'ai trouvé cela très pratique car en un clin d'oeil, on peut directement voir toutes les connexions. En cas d'erreurs lors de la liaison, cela simplifie énormement le débogage.

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

## Réactualisation après une recherche

Loesque la recherche ne porte que sur des tags, searchQuery avait pour valeur ``none``. Cela provoquait un effet secondaire :

![none](/screenshots/search_none.png)

Comme le montre l'image, les titres contenant ``none`` se voyaient aussi affiché dans les résultats de la recherche ! Ce qui n'est bien entendu pas désiré.

J'ai donc fait en sorte pour que si searchQuery n'avait pas de valeur, il ne soit pas passé en paramètre. Il a donc fallu géré en back pour accepter ceci. J'ai aussi modifié le critère de recherche. Auparavant, la recherche récupérait tous les résultats validant l'une des conditions. Hors je trouve cela plus logique que lorsque l'utilisateur remplis les 2 champs, que la recherche pour sur les 2 et non sur l'un ou l'autre.

![condition](/screenshots/conditions_search.png)

Ce qui donne comme résultat :

![none_fixed](/screenshots/search_none_fixed.png)

## Meilleure gestion des images

Gérer les images de la façon actuelle avait aussi des inconvénients. A aucun moment l'image n'était compressée ce qui avait pour effet que si l'image faisait plusieurs Mo, elle était enregistrée tel quelle. L'espace disque demandée pouvait rapidement devenir incroyable si de nombreuses memories étaient postées !

J'ai donc fait en sorte que lorsqu'une image est upload, celle-ci soit redimensionnée jusqu'à 1000px de hauteur et de largeur. Ceci a eu pour effet de réduire un peu leur taille.

Afin de la réduire encore plus, j'ai ajouté une compression des images à 60%. La qualité des images n'en ait pas visiblement affecté, cependant, la taille des données en est grandement réduite !

De plus, il n'existait aucune vérification sur le format du fichier uploadé. J'aidonc ajouté une vérification afin de notifier l'utilisateur si le fichier était valide ou pas.

# Améliorations possibles

## Mieux gérer les connexions à MongoDB

Oui, car je n'aime pas d'avoir dû accepter toutes les IP. Je trouve que question sécurité, ce n'est pas optimale. 

## Réactualisation après une recherche

La recherche fonctionne correctement, toutefois si on réatualise la page, la recherche bloque et ne retourne aucun résultat.

J'ai essayé de mettre cela en place, malheureusement sans succès. Ceci serait donc une amélioration agréable à adapter.

# Conclusion

Ce projet a vraiment été intéressant. Pas toujours facile à suivre, car en anglais et ça allait parfois un peu vite, mais la persévérance a payé.

Malgré le fait que j'avais déjà fait un projet MERN sur un réseau social, je dois avoué que j'ai découvert une approche différente de faire les choses.

J'ai aussi appris comment mettre en ligne un site MERN. Ceci pourra me reservir lorsque je souhaiterai présenter un portfollio des projets les plus intéressants.

Voici la version en ligne du projet : https://mern-memories-forth.netlify.app/