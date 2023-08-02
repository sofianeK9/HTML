
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


