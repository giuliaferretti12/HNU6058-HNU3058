// Le jeu est une adaptation de ce billet de Rich Harris:
// https://dev.to/richharris/stay-alert-d

// Attention! Le recours aux fonctions `alert()`, `prompt()`, `confirm()`
// est généralement à éviter sur les sites web publics, car ils génèrent
// des fenêtres intempestives qui peuvent nuire à l’expérience utilisateur
// (notamment parce qu’ils arrêtent le fil d’exécution javascript).
// Ces fonctions sont néanmoins fort utiles en contexte d’apprentissage.

// une liste de tentatives
let tentatives = [];

// le nombre choisi par la machine
let nombre = nouveauNombre();

const formulaire = document.querySelector('form');
const champ = formulaire.querySelector('input');
const listeDesTentatives = document.querySelector('ul');
const totalDesTentatives = document.getElementById('nombre-de-tentatives');
const boiteMessage = document.querySelector('aside');

formulaire.addEventListener('submit', function (ev) {
  ev.preventDefault();
  ev.stopPropagation();

  // saisissons la valeur
  let valeur = Number(champ.value);

  // ajoutons aux tentatives (en premier)
  tentatives.unshift(valeur);

  listeDesTentatives.innerHTML = tentatives.map(t => {
    return `<li>${t}</li>`;
  }).join('');

  totalDesTentatives.innerText = `(${tentatives.length})`;

  // effaçons le champ
  champ.value = '';

  if (valeur !== nombre) {
    if (valeur < nombre) {
      boiteMessage.innerHTML = 'Trop petit!'
    } else {
      boiteMessage.innerHTML = 'Trop grand!'
    }
  } else {
    // bonne réponse!
    boiteMessage.innerHTML = '<strong>Bravo!</strong>';

    // faisons disparaître le formulaire
    formulaire.parentElement.removeChild(formulaire);
  }
});

function jeu() {
  // on vide le compteur pour chaque nouvelle partie
  tentatives = [];

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
  tentatives.push(reponse);
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
    tentatives.push(reponse);
  }

  // si on arrive ici, c’est que la partie est terminée, i.e. la `reponse` est égale au `nombre`
  alert(`Bien joué! La réponse était ${nombre} (${tentatives} ${tentatives === 1 ? 'tentative' : 'tentatives' }).`);
}

function nouveauNombre() {
  return Math.ceil(Math.random() * 100);
}
