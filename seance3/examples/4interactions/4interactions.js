const dialog = document.getElementById('dialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


/*
Le code utilise la méthode addEventListener pour associer un événement de clic aux éléments openBtn et closeBtn : lorsque l'utilisateur clique sur le bouton openBtn, la fonction transmise à la méthode addEventListener est exécutée.
 */
openBtn.addEventListener('click', function() {
	dialog.setAttribute('open', true);
})

closeBtn.addEventListener('click', function() {
	dialog.removeAttribute('open');
});
