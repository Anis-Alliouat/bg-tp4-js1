"use strict"; // Mode strict : signale les variables non déclarées avec let/const (vu dans le slide 52)

/*
  TP4 - Exercice 1
  Commentaires sur une ligne (//) et sur plusieurs lignes (vu dans le slide 37)
*/

// Déclaration des variables avec let et des constantes avec const (vu dans le slide 52)
let nom = "John"; // Type primitif String : chaîne de caractères (vu dans le slide 38)
let prenom = "Doe"; // Type primitif String (vu dans le slide 38)
let age = 30; // Type primitif number : entier (vu dans le slide 38)
let note = 15; // Type primitif number (vu dans le slide 38)
const pi = 3.14; // Constante déclarée avec const (vu dans les slides 38 et 52)

// Déclaration d'une fonction sans paramètres (vu dans le slide 46), appelée au clic sur "Nom" (vu dans le slide 25)
function f1() {
  console.log(nom); // Affichage dans la console avec console.log() (vu dans le slide 34)
}

// Fonction sans paramètres appelée au clic sur "Prénom" (vu dans les slides 25 et 46)
function f2() {
  console.log(prenom); // Affichage dans la console (vu dans le slide 34)
}

// Fonction sans paramètres appelée au clic sur "Nom & Prénom" (vu dans les slides 25 et 46)
function f3() {
  // Affichage formaté avec les backticks et ${} (vu dans le slide 38)
  console.log(`${nom}-${prenom}`);
}

// Fonction sans paramètres appelée au clic sur "Age" (vu dans les slides 25 et 46)
function f4() {
  console.log(age); // Affichage d'une variable de type number (vu dans les slides 34 et 38)
}

// Fonction sans paramètres appelée au clic sur "Note" (vu dans les slides 25 et 46)
function f5() {
  console.log(note); // Affichage d'une variable de type number (vu dans les slides 34 et 38)
}

// Fonction sans paramètres appelée au clic sur "Pi" (vu dans les slides 25 et 46)
function f6() {
  console.log(pi); // Affichage d'une constante (vu dans les slides 34 et 38)
}
