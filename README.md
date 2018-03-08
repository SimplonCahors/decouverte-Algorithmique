# decouverte-Algorithmique

1. Faites une recherche sur ce qu'est l'algorithmique
	- pendant 10 minutes
	- après les 10 minutes faites une restitution orale de ce que vous avez trouvé tous ensemble
	- ok maintenant c'est parti ...

2. Faire un algorithme de recherche 
	- Consignes
		- L'exercice peut être fait en Javascript et/ou en PHP
		- Ne pas utiliser les fonctions de recherche fourni avec le langage
		- Ne pas chercher la solution de l'algorithme sur internet :-)
	- Faire votre propre fonction recherche 
		- qui prendra en parametre un tableau d'entier et l'entier à recherche dans le tableau
		- qui retournera l'indice correspondant à l'élement du tableau qui contient la chaine recherché
		- L'algorithme consistera à parcourir votre tableau jusqu'à ce que l'element courant du tableau soit = à l'entier recherché
	- Testez votre fonction avec un tableau contenant un millier d'entrées
		- en cherchant un entier qui se trouve au début et un autre à la fin pour voir les temps d'exécution
		- Remarque: je vous laisse trouver une astuce pour vous générer ce tableau qui vous permetra de tester votre fonction

3. Faire un algorithme de tri
	- Consignes ( même que ci-dessus )
	- Faire votre propre fonction de tri
		- qui prendra en parametre un tableau ( qui ne sera pas trié )
		- qui retournera un tableau trié
	- Dans ce cas l'algorithme à implémenter va être un peu plus compliqué, à vous d'inventer une manière de faire.
	- Testez votre fonction avec un tableau d'entier non trié 
		- qui contient 100 entrées puis 1000 entrées
	- Comparez votre manière de faire avec celles des autres apprenants ainsi que la rapidité d'exécution
	- Faire du Learning by Teaching sans donner la solution
	
4. Faire un algorithme de recherche dichotomique
	- Faire une fonction rechercheDichotomique 
		- qui prendra en parametre un tableau d'entier ( qui devra être trié comme dans un dictionnaire ) et la valeur de l'élément à rechercher
		- qui retournera l'indice du tableau correspondant à l'élément recherché
	- Cet algorithme sera surement plus puissant ( plus rapide ) que votre premier algo de recherche ( mais nécessite que le tableau soit déja trié)
	- Il consiste à faire une recherche par étape comme quand vous cherchez dans le dictionnaire:
		- Vous regardez l'élément du milieu du tableau
			- s'il est inférieur à la valeur recherchée cela veut dire que l'élément se trouve dans la deuxième moitié
			- si non il se trouve dans la premiere moitié
		- Vous répetez cette séquence sur la moitié selectionnée jusqu'à ce que vous arriviez à l'élément trouvé

5. Cas pratique: Afficher un tableau avec des sections
	- Soit le tableau javascript suivant, qui est trié par métiers:
	``` javascript
	var tab = [
    {
        "metier":"ingenieur",
        "genre":"homme",
        "nom":"Martin"
    },
    {
        "metier":"ingenieur",
        "genre":"homme",
        "nom":"Louis"
    },
    {
        "metier":"ingenieur",
        "genre":"femme",
        "nom":"Marie"
    },
    {
        "metier":"boulanger",
        "genre":"homme",
        "nom":"Loic"
    },
    {
        "metier":"boulanger",
        "genre":"homme",
        "nom":"Etienne"
    },
    {
        "metier":"formateur",
        "genre":"homme",
        "nom":"Jean"
    },
    {
        "metier":"formateur",
        "genre":"homme",
        "nom":"Martin"
    },
    {
        "metier":"formateur",
        "genre":"femme",
        "nom":"Louise"
    },
    {
        "metier":"formateur",
        "genre":"femme",
        "nom":"Jeanne"
    },
]
	```
	- Consignes
		- Faites une fonction afficheTableauSection( tab ) qui affiche le tableau avec une présentation par section en sectionnant sur la première colonne.
		- On part du principe que le tableau est toujours trié sur la première colonne
		- Résultat HTML à obtenir:
		``` html
			<h2> Metier: Ingénieur </h2>
			<table>
				<tr>
					<th>Nom</th><th>Genre</th>
				</tr>
				<tr>
					<td>Martin</td><td>Homme</td>
					<td>Louis</td><td>Homme</td>
					<td>Marie</td><td>Femme</td>
				</tr>
			</table>
			<h2> Metier: Boulanger </h2>
			<table>
				<tr>
					<th>Nom</th><th>Genre</th>
				</tr>
				<tr>
					<td>Loic</td><td>Homme</td>
					<td>Etienne</td><td>Homme</td>
				</tr>
			</table>

			etc ...

		```
		- Essayer de réfléchir avec un papier crayon sur l'algorithme à mettre en place
		- Faites l'exercice avec une seule boucle
		- Utiliser jsbin pour tester votre algo en JS
	- [ Exemple de solution ](affiche_tableau.js)

		

	
