document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname;
  let footerPath = path.includes("/source/html/")
    ? "../html/footer.html"
    : "source/html/footer.html";

  fetch(footerPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) =>
      console.error("Errore nel caricamento del footer : ", error)
    );
});
