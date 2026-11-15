"use strict"; // Mode strict : signale les variables non déclarées avec let/const (vu dans le slide 52)

/*
  TP4 - Exercice 3 : Délibération
  Le script contient exactement 2 fonctions : A qui appelle B.
  Commentaires sur une ligne (//) et sur plusieurs lignes (vu dans le slide 37)
*/

// Tableau d'objets "Students" : chaque objet représente un étudiant (vu dans le slide 41)
// Déclaré avec const car il n'est pas réaffecté (vu dans le slide 52)
const Students = [
  {
    matricule: 1000, // Type primitif number (vu dans le slide 38)
    nom: "JOHN", // Type primitif String (vu dans le slide 38)
    prenom: "DOE",
    note1: 14,
    note2: 5,
  },
  {
    matricule: 2000,
    nom: "BOB",
    prenom: "CARLTON",
    note1: 7,
    note2: 1,
  },
  {
    matricule: 3000,
    nom: "RAYANE",
    prenom: "SMITH",
    note1: 13,
    note2: 3,
  },
];

// Fonction A sans paramètres (vu dans le slide 46), appelée au clic sur "Délibération" (vu dans le slide 25)
function A() {
  // Boucle for...of : parcourt chaque étudiant du tableau (vu dans le slide 45)
  for (const student of Students) {
    // Opérateur arithmétique + : somme des deux notes (vu dans le slide 42)
    // Accès aux propriétés de l'objet avec le point (vu dans le slide 40)
    // Variable locale au bloc, déclarée avec const (portée locale, vu dans les slides 51 et 52)
    const noteTotale = student.note1 + student.note2;

    // Appel de la fonction B avec un paramètre ; elle retourne un booléen (vu dans le slide 46)
    const estAdmis = B(noteTotale);

    // Notation ternaire : "ADMIS" si estAdmis vaut true, sinon "AJOURNÉ" (vu dans le slide 43)
    // Affichage formaté avec les backticks et ${} (vu dans le slide 38), un étudiant à la fois (vu dans le slide 34)
    console.log(`${student.matricule}: ${estAdmis ? "ADMIS" : "AJOURNÉ"}`);
  }
}

// Fonction B avec un seul paramètre de type number (float) et un retour (vu dans le slide 46)
function B(noteTotale) {
  // Opérateur de comparaison >= : le résultat est un booléen true/false (vu dans les slides 38 et 42)
  return noteTotale >= 10;
}
