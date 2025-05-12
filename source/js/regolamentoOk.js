const UL_TAG = document.getElementById("elenco_capitoli");
const LI_TAGS = document.querySelectorAll("#elenco_capitoli li"); //ottengo tutti gli li del menu di sinistra
const SECTION_TAGS = document.querySelectorAll("#box_dx ul li section"); //ottengo tutte le section

inizializza_classi(); //inizializzazione classi

UL_TAG.addEventListener("click", gestione_click_li);

function gestione_click_li(event) {
  if (event.target.tagName.toLowerCase() == "li") {
    // se è stato fatto click su li
    let testo_capitolo_cliccato = event.target.textContent; //mi copio il testo del capitolo cliccato
    const H2_TAG = document.querySelector("#box_dx h2");
    H2_TAG.classList.remove("hidden"); //rimuovo la classe hidden che nasconde il titolo all'inizio
    H2_TAG.textContent = testo_capitolo_cliccato; //cambio il testo del capitolo
    let index = Array.from(LI_TAGS).indexOf(event.target);

    H2_TAG.classList.add("clicked");
    reset_li_clicked_tag_elenco_capitoli(); //funzione che toglie la classe clicked da tutti gli li
    event.target.classList.add("clicked");

    li_hidden_reset(index); //
    nascondi_immagine_logo_dal_contenuto_del_capitolo_seloezionato();
  }
}

//FUNZIONE CHE IMPOSTA TUTTE LE SEZIONI AD HIDDEN
function li_hidden_reset(index_visibile) {
  for (let i = 0; i < SECTION_TAGS.length; i++) {
    if (SECTION_TAGS[i].classList.contains("hidden") != true) {
      //inseriamo la classe hidden a tutte le sezioni che non contengono la classe hidden
      SECTION_TAGS[i].classList.add("hidden");
    }
  }
  SECTION_TAGS[index_visibile].classList.remove("hidden");
}

function reset_li_clicked_tag_elenco_capitoli() {
  for (let i = 0; i < LI_TAGS.length; i++) {
    if (LI_TAGS[i].classList.contains("clicked")) {
      LI_TAGS[i].classList.remove("clicked");
    }
  }
}

function inizializza_classi() {
  let li_temp;
  for (i = 0; i < LI_TAGS.length; i++) {
    LI_TAGS[i].classList.add("titolo_capitolo");
  }
}

function nascondi_immagine_logo_dal_contenuto_del_capitolo_seloezionato() {
  const div_img = document.getElementById("logo_messaggio_iniziale");
  div_img.remove();
}
