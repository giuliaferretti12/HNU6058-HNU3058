// les *boucles* sont un concept fondamental dans
// tous les langages de programmation

// ouvrez la console de votre navigateur pour voir
// ce que le programme y affiche!

console.log(`Comptons jusqu’à 3… ou 2?`);

// une boucle:
// 1. peut initialiser une variable (`i = 0`);
// 2. comporte une condition (`i < 3`);
// 3. peut faire quelque chose lorsque la boucle est terminée (incrémenter la variable `i`).
for (let i = 0; i < 3; i++) {
  console.log(i);
}

/*
Attention ! Ce n'est pas la même chose de faire : 

let i = 0;
do {
    i++;
} while (i < 3);

*/