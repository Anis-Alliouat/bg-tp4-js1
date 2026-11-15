"use strict"; // Mode strict : signale les variables non déclarées avec let/const (vu dans le slide 52)

/*
  TP4 - Exercice 2
  Commentaires sur une ligne (//) et sur plusieurs lignes (vu dans le slide 37)
*/

// Tableau de chaînes de caractères (type complexe : les tableaux, vu dans le slide 39)
// Déclaré avec const car il n'est pas réaffecté (vu dans le slide 52)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet avec des propriétés nom, prenom et age (type complexe : les objets, vu dans le slide 40)
const objetEtudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30,
};

// Tableau d'objets : chaque case du tableau est un objet étudiant (vu dans le slide 41)
const tableauObjetsEtudiants = [
  {
    nom: "nom1",
    prenom: "prenom1",
    age: 21,
  },
  {
    nom: "nom2",
    prenom: "prenom2",
    age: 22,
  },
  {
    nom: "nom3",
    prenom: "prenom3",
    age: 23,
  },
];

// Déclaration d'une fonction sans paramètres (vu dans le slide 46), appelée au clic sur "Tableau Etudiants" (vu dans le slide 25)
function f1() {
  // Boucle for avec une variable locale i déclarée avec let (vu dans les slides 45 et 51)
  // L'opérateur de comparaison < et l'incrémentation i++ (vu dans le slide 42)
  // tableauEtudiants.length donne la taille du tableau (vu dans le slide 45)
  for (let i = 0; i < tableauEtudiants.length; i++) {
    // Accès au contenu du tableau avec l'indice [i] (vu dans le slide 39)
    console.log(tableauEtudiants[i]); // Affichage dans la console (vu dans le slide 34)
  }
}

// Fonction sans paramètres appelée au clic sur "Objet Etudiant" (vu dans les slides 25 et 46)
function f2() {
  // Affichage de l'objet entier dans la console (vu dans les slides 34 et 40)
  console.log(objetEtudiant);
}

// Fonction sans paramètres appelée au clic sur "Tableau d'objets Etudiants" (vu dans les slides 25 et 46)
function f3() {
  // Boucle for...of : parcourt chaque objet du tableau (vu dans le slide 45)
  for (const etudiant of tableauObjetsEtudiants) {
    // Accès aux propriétés de l'objet avec le point (vu dans le slide 40)
    // Affichage formaté avec les backticks et ${} (vu dans le slide 38)
    console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
  }
}
