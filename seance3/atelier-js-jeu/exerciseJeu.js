// Le jeu est une adaptation de ce billet de Rich Harris:
// https://dev.to/richharris/stay-alert-d

// Attention! Le recours aux fonctions `alert()`, `prompt()`, `confirm()`
// est généralement à éviter sur les sites web publics, car ils génèrent
// des fenêtres intempestives qui peuvent nuire à l’expérience utilisateur
// (notamment parce qu’ils arrêtent le fil d’exécution javascript).
// Ces fonctions sont néanmoins fort utiles en contexte d’apprentissage.

// un compteur de tentatives
let tentatives = 0;

function jeu() {
  // on remet le compteur à zéro pour chaque nouvelle partie
  tentatives = 0;

  // ici, on définit un nombre aléatoire à deviner
  // la fonction `Math.random()` donne une valeur décimale entre 0 et 1,
  // qu’on multiplie pour mettre sur 100; avec `Math.ceil()` on arrondit
  // à l’entier supérieur pour se débarrasser des décimales
  let nombre = Math.ceil(Math.random() * 100);

  // la fonction `prompt()` est disponible dans les navigateurs web
  let reponse = prompt(`Cherchez un nombre entre 1 et 100:`);

  // on saisit la réponse pour en faire un `Number`, car c’est une chaîne de caractères
  reponse = Number(reponse);

  // on incrémente le compteur de tentatives
  tentatives++;
  // ... on pourrait aussi écrire: `tentatives = tentatives + 1`

  // la boucle `while`
  // tant que la condition n’est pas satisfaite, ce bloc de code
  // va continuer à s’exécuter. Attention aux boucles infinies!
  while (reponse !== nombre) {
    if (reponse < nombre) {
      reponse = prompt(`Trop petit! Essayez à nouveau :`);
    } else {
      reponse = prompt(`Trop grand! Essayez à nouveau :`);
    }
    // on ajuste la variable pour en faire un nombre
    reponse = Number(reponse);

    // on incrémente le compteur de tentatives
    tentatives++;
  }

  // si on arrive ici, c’est que la partie est terminée, i.e. la `reponse` est égale au `nombre`
  alert(`Bien joué! La réponse était ${nombre} (${tentatives} ${tentatives === 1 ? 'tentative' : 'tentatives' }).`);
}

/*
${tentatives === 1 ? 'tentative' : 'tentatives' est équivalent à 
if (tentatives === 1) {
  return 'tentative';
} else {
  return 'tentatives';
}
*/

// lancer le jeu -- la fonction `jeu`
// (cela peut aussi être appelé depuis le document)
// jeu();
