
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
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);