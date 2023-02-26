const countdownElement = document.getElementById("countdown");

// Définir la date cible
const targetDate = new Date("September 7, 2023 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
const countdownInterval = setInterval(() => {
  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la différence entre la date actuelle et la date cible
  const timeRemaining = targetDate - now;

  // Calculer les jours, heures, minutes et secondes restants
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Afficher le compte à rebours dans la page HTML
  countdownElement.innerHTML = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

  // Arrêter le compte à rebours lorsque la date cible est atteinte
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Compte à rebours terminé !";
  }
}, 1000);
