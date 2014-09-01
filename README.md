# Ephémérides

Bibliothèque pour avoir accès aux épéhémérides du jour ou d'un jour en particulier.

La liste des épéhémérides est actuellement disponible dans le fichier JSON. Pour l'instant seul un wrapper Javascript est disponible.


## Pré-requis

 * [Bower](//bower.io) : gestionnaire de paquets


## Structure

```
.
├── lib  : bibliothèques Javascript, contenant notamment Jasmine
├── spec : spécifications Jasmine pour les tests unitaires
└── src  : fichiers sources de la bibliothèque
    ├── ephemeris.json : list des éphéméride en JSON
    └── ephemeris.js   : wrapper Javascript
```


## Installation

```bash
bower install ephemeris --save-dev
```

## Utilisation

### Javascript

Importez le fichier `ephemeris.js`.

Pour avoir l'éphéméride du jour :

```javascript
ephemeris.getTodayEphemeris();		// ex: 'Saint Basile'
ephemeris.getTodayEphemerisName();	// ex: 'Basile'
```

Pour avoir l'éphéméride d'un jour particulier :

```javascript
ephemeris.getEphemeris(2, 1);		// retourne 'Saint Basile'
ephemeris.getEphemerisName(2, 1);	// retourne 'Basile'
```

Si le jour ou le mois demandé est incorrect, la valeur `undefined` sera retournée.


## Contribuer

### Todo

* Actuellement seul un wrapper Javascript est disponible. Il serait intéressant d'en faire dans d'autres langages.
* La liste des éphémérides varie beaucoup d'une source à une autre, car il existe en fait une multitude de calendrier (Catholique, Romain, ...) ainsi que des calendriers des fêtes. Actuellement le calendrier a été complété avec cette [source](http://www.quelprenom.com/fetes.php?mois=1).
* Le cas où il y a plusieurs éphémérides le même jour est aussi à traiter, actuellement un seul nom a été selectionné.

### Avant de push

* Ne pas oublier d'implémenter les tests cases dans le dossier `spec`. Pour plus d'information concernant les tests unitaires, voir la [documentation officiel de Jasmine](//jasmine.github.io/2.0/introduction.html). Pour voir les résultats, ouvrir le fichier `SpecRunner.html`.
* Si des modifications sont faites sur les éphémérides sources, ne pas oubliée et les mettres à jour ailleurs (ex le ephemeris.source pour le JavaScript).
* Ne pas oublier de mettre à jour le changelog :)

### Bower

La bibliothèque est enregistrée comme un package Bower. Ne pas oublier de mettre à jour le fichier `bower.json`. Le paquet est automatiquement mis à jour une fois le push fait sur GitHub.

Pour le versions, le premier chiffre correspond à une mise à jour majeure (ajout d'un wrapper par exemple), le second à une version mineure (ajout d'une fonctionnalité), et le troisième pour l'ajout d'un patch.

### Javascript

La bibliothèque Javascript est testée avec [Jasmine](//jasmine.github.io/). Pour lancer les tests unitaires, accéder au fichier `SpecRunner.html`. Les specs sont implémentées dans le dossier `spec`. Pour plus d'information sur Jasmine, consulter leur site [site officiel](//jasmine.github.io/).

### Changelog

* **26 août** : v.1.0.1 (no rétro-compatible)
  * correction d'un éphéméride du mois d'août
  * réorganisation de la bibliothèque JavaScript
  * version compressée de la bibliothèque JavaScript ajoutée
  
* **8 août** : v1.0.0
  * éphéméride en JSON
  * bibliothèque JavaScript (non compressée)
  * tests unitaires JavaScript avec Jasmine
  * package Bower disponible
