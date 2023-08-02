
// Menu burger :

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});


// Musique de fond :

// Lorsque le document HTML est chargé, la fonction Musique se lance.
document.addEventListener("DOMContentLoaded", Musique) 
// On stocke notre element HTML dans une variable qu'on récupére avec l'ID
var audio = document.getElementById("background-audio")
// On utilise un événement écouteur qu'on applique sur audio, l'événement est déclenché lorsque les données de l'audio sont chargées. on créé une fonction musique
// qui lancera la musique(audio) de facon automatique
audio.addEventListener("loadedmetadata", Musique)

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