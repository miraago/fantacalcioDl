let UL_TAG;
let SECTION_TAGS;
let LI_TAGS_BOX_SX;
let LI_TAGS_BOX_DX;
document.addEventListener("capitoliCreati", () => {
  LI_TAGS_BOX_SX = document.querySelectorAll("#elenco_capitoli li");
  UL_TAG = document.getElementById("elenco_capitoli");
  // SECTION_TAGS = document.querySelectorAll("#box_dx ul li section"); //ottengo tutte le section

  inizializza_classi(); //inizializzazione classi
  UL_TAG.addEventListener("click", gestione_click_li);
});

function gestione_click_li(event) {
  if (event.target.tagName.toLowerCase() == "li") {
    // se è stato fatto click su li
    let testo_capitolo_cliccato = event.target.textContent; //mi copio il testo del capitolo cliccato
    const H2_TAG = document.querySelector("#box_dx h2");
    if (H2_TAG.classList.contains("hidden")) {
      H2_TAG.classList.remove("hidden"); //rimuovo la classe hidden che nasconde il titolo all'inizio
    }
    H2_TAG.textContent = testo_capitolo_cliccato; //cambio il testo del capitolo con quello cliccato

    let li_element = event.target.closest("li"); //il metodo closest() mi assicura di ottenere il <li> più vicino all'elemento cliccato
    console.log(li_element);
    let index = Array.from(LI_TAGS_BOX_SX).indexOf(li_element); //ottengo l'indice dell'li cliccato

    H2_TAG.classList.add("clicked");
    reset_li_clicked_tag_elenco_capitoli(); //funzione che toglie la classe clicked da tutti gli li e lo rimane solo a l'ultimo cliccato
    li_element.classList.add("clicked");

    li_hidden_reset(index); //

    // Scorri fino all'h2 nel box_dx
    H2_TAG.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

//FUNZIONE CHE IMPOSTA TUTTi GLI LI DEL BOX DI DESTRA AD HIDDEN
function li_hidden_reset(index_visibile) {
  LI_TAGS_BOX_DX = document.querySelectorAll("#contenuto_paragrafi li");
  for (let i = 0; i < LI_TAGS_BOX_DX.length; i++) {
    if (LI_TAGS_BOX_DX[i].classList.contains("hidden") != true) {
      //inseriamo la classe hidden a tutti gli Li che non contengono la classe hidden
      LI_TAGS_BOX_DX[i].classList.add("hidden");
    }
  }
  LI_TAGS_BOX_DX[index_visibile].classList.remove("hidden");
}

//  QUESTA FUNZIONE METTE LA CLASSE HIDDEN A TUTTI GLI LI DEL BOX DI
// SINISTRA TRANNE AL LI CHE CORRISPONDE AL CAPITOLO CLICCATO
function reset_li_clicked_tag_elenco_capitoli() {
  LI_TAGS_BOX_DX = document.querySelectorAll("#contenuto_paragrafi li");
  for (let i = 0; i < LI_TAGS_BOX_SX.length; i++) {
    if (LI_TAGS_BOX_SX[i].classList.contains("clicked")) {
      LI_TAGS_BOX_SX[i].classList.remove("clicked");
    }
  }
}

function inizializza_classi() {
  let li_temp;
  for (i = 0; i < LI_TAGS_BOX_SX.length; i++) {
    LI_TAGS_BOX_SX[i].classList.add("titolo_capitolo");
  }
}

// function nascondi_immagine_logo_dal_contenuto_del_capitolo_seloezionato() {
//   const div_img = document.getElementById("logo_messaggio_iniziale");
//   div_img.remove();
// }
