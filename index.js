let timer = document.getElementById("timerScreen");

let numero = parseInt(sessionStorage.getItem("numero")) || 0;

let timerPlay = function () {
  timer.innerHTML = numero++;
  sessionStorage.setItem("numero", numero);
};

setInterval(timerPlay, 1000);
