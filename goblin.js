// Menu burger :

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Musique de fond :

// Lorsque le document HTML est chargé, la fonction Musique se lance.
document.addEventListener("DOMContentLoaded", Musique);
// On stocke notre element HTML dans une variable qu'on récupére avec l'ID
var audio = document.getElementById("background-audio");
// On utilise un événement écouteur qu'on applique sur audio, l'événement est déclenché lorsque les données de l'audio sont chargées. on créé une fonction musique
// qui lancera la musique(audio) de facon automatique
audio.addEventListener("loadedmetadata", Musique);

function Musique() {
  audio.play();
}

// Horloge

function updateClock() {
  // Récupére l'élément HTML qui affichera l'heure en temps réel
  const clockElement = document.getElementById("clock");
  // Créé un nouvel objet Date qui représente l'heure
  const now = new Date();
  //  Récupére l'heure actuelle et l'affiche avec deux chiffres
  const hours = String(now.getHours()).padStart(2, "0");
  //  Récupére les minutes actuelle et l'affiche avec deux chiffres
  const minutes = String(now.getMinutes()).padStart(2, "0");
  //  Récupére les secondes actuelle et l'affiche avec deux chiffres
  const seconds = String(now.getSeconds()).padStart(2, "0");
  // Chaine de caractéres pour afficher les constantes
  const timeString = `${hours}:${minutes}:${seconds}`;
  // Met à jour le contenu de l'élément HTML avec l'heure au format "hh:mm:ss"
  clockElement.textContent = timeString;
}
// Met à jour l'heure toutes les secondes
setInterval(updateClock, 1000);

// Recuperation des informations saisies par le visiteur du site dans le forumlaire contact qui s'afficheront dans la console
document.addEventListener("DOMContentLoaded", function () {
  const formulaireContact = document.getElementById("formulaire-contact");
  const nomContact = document.getElementById("nom");
  const prenomContact = document.getElementById("prenom");
  const emailContact = document.getElementById("email");
  const messageContact = document.getElementById("texte");

  formulaireContact.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nomContact.value;
    const firstname = prenomContact.value;
    const email = emailContact.value;
    const message = messageContact.value;

    console.log(`Nom : ${name}`);
    console.log(`Prenom : ${firstname}`);
    console.log(`Email : ${email}`);
    console.log(`Message : ${message}`);
  });
});

// Récuperation des informations du formulaire

// événement pour garantir que le code JS s'executera une fois le DOM chargé
document.addEventListener("DOMContentLoaded", function () {
  // Je récupére les éléments du formulaire et je les stocks dans des variables.
  const formulaire = document.getElementById("monFormulaire");
  const nomInput = document.getElementById("nom");
  const telephoneInput = document.getElementById("telephone");
  const emailInput = document.getElementById("email");
  const pseudoInput = document.getElementById("pseudo");
  const villeInput = document.getElementById("ville");
  const dateInput = document.getElementById("date");
  const ageInput = document.getElementById("age");
  const sexeInput = document.getElementById("sexe");
  const clanInput = document.getElementById("clan");
  const commentsInput = document.getElementById("comments");

  // Evenement qui se produit lorsque le formulaire est rempli avec la fonction qui empéche le comportement par défaut de l'evenement soumission, c'est à dire le rechargement de la page.
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    //  Récuperation des valeurs des champs
    const nom = nomInput.value;
    const telephone = telephoneInput.value;
    const email = emailInput.value;
    const pseudo = pseudoInput.value;
    const ville = villeInput.value;
    const date = dateInput.value;
    const age = ageInput.value;
    const sexe = sexeInput.value;
    const clan = clanInput.value;
    const comments = commentsInput.value;

    // Afficher les valeurs des  champs dans la console
    console.log(`Nom : ${nom}`);
    console.log(`Telephone : ${telephone}`);
    console.log(`Email : ${email}`);
    console.log(`Pseudo : ${pseudo}`);
    console.log(`Ville : ${ville}`);
    console.log(`Date : ${date}`);
    console.log(`Age : ${age}`);
    console.log(`Sexe : ${sexe}`);
    console.log(`Clan : ${clan}`);
    console.log(`Comments : ${comments}`);

    // OU les stocker dans le Local storage:
    // Création d'un objet pour y stocker les données
    const fromData = {
      nom: nom,
      telephone: telephone,
      email: email,
      pseudo: pseudo,
      ville: ville,
      date: date,
      age: age,
      sexe: sexe,
      clan: clan,
      comments: comments,
    };
    // Conversion de l'objet et stockage  dans le fichier JSON
    localStorage.setItem("formData", JSON, stringify(FormData));

    console.log("Données du formulaire enregistrées dans le Local Storage");
  });
});
