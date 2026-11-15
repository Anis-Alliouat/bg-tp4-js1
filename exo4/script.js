"use strict"; // Mode strict : signale les variables non déclarées avec let/const (vu dans le slide 52)

/*
  TP4 - Exercice 4 : Gestion d'un magasin
  Le script est chargé avec defer : tout s'affiche dans la console au chargement de la page (vu dans le slide 28)
  Commentaires sur une ligne (//) et sur plusieurs lignes (vu dans le slide 37)
*/

// =====================================================================
// Question 1 : un produit et la valeur totale de son stock
// =====================================================================
console.log("===== Question 1 : Un produit ====="); // Affichage dans la console (vu dans le slide 34)

// Objet "produit" avec les propriétés nom, prix et quantite (vu dans le slide 40)
// Déclaré avec const car il n'est pas réaffecté (vu dans le slide 52)
const produit = {
  nom: "Cahier", // Type primitif String (vu dans le slide 38)
  prix: 150, // Type primitif number : prix unitaire en DA (vu dans le slide 38)
  quantite: 40, // Type primitif number : nombre d'articles en stock (vu dans le slide 38)
};

// Opérateur arithmétique * : prix unitaire x quantité (vu dans le slide 42)
// Accès aux propriétés de l'objet avec le point (vu dans le slide 40)
const valeurStockProduit = produit.prix * produit.quantite;

// Affichage formaté avec les backticks et ${} (vu dans le slide 38)
console.log(`${produit.nom} : ${produit.prix} DA x ${produit.quantite} = ${valeurStockProduit} DA`);

// =====================================================================
// Question 2 : catalogue de 5 produits, ceux au-dessus du prix moyen
// =====================================================================
console.log("===== Question 2 : Produits plus chers que le prix moyen =====");

// Tableau d'objets : chaque case du tableau est un produit (vu dans le slide 41)
// Le produit de la question 1 est réutilisé comme premier élément du catalogue
const catalogue = [
  produit,
  { nom: "Stylo", prix: 50, quantite: 100 },
  { nom: "Sac à dos", prix: 3500, quantite: 5 },
  { nom: "Calculatrice", prix: 2200, quantite: 8 },
  { nom: "Trousse", prix: 600, quantite: 15 },
];

// Variable déclarée avec let car sa valeur change dans la boucle (vu dans le slide 52)
let sommePrix = 0;

// Boucle for...of : parcourt chaque produit du catalogue (vu dans le slide 45)
for (const p of catalogue) {
  sommePrix += p.prix; // Opérateur d'affectation += (vu dans le slide 42)
}

// Opérateur / : la moyenne = somme des prix / nombre de produits (vu dans le slide 42)
// catalogue.length donne la taille du tableau (vu dans le slide 45)
const prixMoyen = sommePrix / catalogue.length;
console.log(`Prix moyen du catalogue : ${prixMoyen} DA`);

// filter : sélectionne les produits dont le prix dépasse le prix moyen (vu dans le slide 39)
// Le critère est écrit avec une fonction fléchée (vu dans le slide 47)
// Opérateur de comparaison > (vu dans le slide 42)
const produitsChers = catalogue.filter((p) => p.prix > prixMoyen);

// Boucle forEach : affiche chaque produit sélectionné (vu dans le slide 45)
produitsChers.forEach(function (p) {
  console.log(`${p.nom} : ${p.prix} DA`);
});

// =====================================================================
// Question 3 : nombre total d'articles et valeur globale du stock (reduce)
// =====================================================================
console.log("===== Question 3 : Totaux du magasin (reduce) =====");

// reduce : acc est l'accumulateur (initialisé à 0), p est le produit courant (vu dans le slide 39)
// La fonction passée à reduce est une fonction fléchée (vu dans le slide 47)
const nombreTotalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);

// Même principe : on additionne la valeur du stock (prix x quantité) de chaque produit (vu dans les slides 39 et 42)
const valeurGlobaleStock = catalogue.reduce((acc, p) => acc + p.prix * p.quantite, 0);

console.log(`Nombre total d'articles disponibles : ${nombreTotalArticles}`);
console.log(`Valeur globale du stock : ${valeurGlobaleStock} DA`);

// =====================================================================
// Question 4 : fonction qui calcule la valeur du stock d'un produit donné
// =====================================================================
console.log("===== Question 4 : Valeur du stock d'un produit (fonction) =====");

// Fonction avec un paramètre (un objet produit) et une valeur de retour (vu dans le slide 46)
function calculerValeurStock(produitDonne) {
  // Opérateur * : prix unitaire x quantité (vu dans le slide 42)
  return produitDonne.prix * produitDonne.quantite;
}

// Vérification sur plusieurs produits : on appelle la fonction pour chaque produit du catalogue
// Boucle for classique avec une variable locale i déclarée avec let (vu dans les slides 45 et 51)
for (let i = 0; i < catalogue.length; i++) {
  // Accès au produit avec l'indice [i] (vu dans le slide 39), puis appel de la fonction (vu dans le slide 46)
  console.log(`${catalogue[i].nom} : ${calculerValeurStock(catalogue[i])} DA`);
}

// Contrôle : la fonction donne le même résultat que le calcul direct de la question 1
// Opérateur de comparaison stricte === : le résultat est un booléen (vu dans les slides 38 et 42)
console.log(`Même résultat qu'à la question 1 : ${calculerValeurStock(produit) === valeurStockProduit}`);

// =====================================================================
// Question 5 : appliquer différents traitements au catalogue (callbacks)
// =====================================================================
console.log("===== Question 5 : Traitements sur le catalogue (callbacks) =====");

// Fonction qui reçoit une autre fonction "traitement" en paramètre : c'est un callback (vu dans le slide 48)
// Elle applique ce traitement à chaque produit de la liste
function appliquerTraitement(listeProduits, traitement) {
  // Boucle for...of sur la liste des produits (vu dans le slide 45)
  for (const p of listeProduits) {
    traitement(p); // Appel du callback avec le produit courant (vu dans le slide 48)
  }
}

// Traitement 1 : afficher les noms
// Le callback est une fonction anonyme passée directement en paramètre (vu dans le slide 48)
console.log("Noms des produits :");
appliquerTraitement(catalogue, function (p) {
  console.log(p.nom);
});

// Traitement 2 : afficher les prix
// Le callback est une fonction fléchée rangée dans une constante, puis passée en paramètre (vu dans les slides 47 et 48)
const afficherPrix = (p) => {
  console.log(`${p.prix} DA`);
};
console.log("Prix des produits :");
appliquerTraitement(catalogue, afficherPrix);
