document.addEventListener("DOMContentLoaded", function () {
  // Ottieni il percorso della pagina attuale
  let path = window.location.pathname;

  // Determina il percorso corretto per header.html
  let headerPath = path.includes("/source/html/")
    ? "../html/header.html"
    : "source/html/header.html";

  fetch(headerPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) =>
      console.error("Errore nel caricamento dell'header:", error)
    );
});
