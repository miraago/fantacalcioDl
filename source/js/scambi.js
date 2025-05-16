const BTN_ADD = document.getElementById("btn_add");
const BTN_DELETE = document.getElementById("btn_delete");
const BTN_CALCOLA = document.getElementById("btn_calcola");

BTN_ADD.addEventListener("click", aggiungi_giocatore);
BTN_DELETE.addEventListener("click", cancella_giocatore);
BTN_CALCOLA.addEventListener("click", calcola_media);

function aggiungi_giocatore() {
  const BOX_DX = document.getElementById("dx");
  const BOX_SX = document.getElementById("sx");

  controlla_se_pieno(BOX_DX, BOX_SX);
  let QT_INPUT = BOX_DX.querySelectorAll('input[type = "number"]').length; // conta quanti prezzi ci sono, questo corrisponde anche al totale dei giocatori

  if (QT_INPUT > 0 && QT_INPUT < 4) {
    QT_INPUT++;
    const a = "A" + QT_INPUT;
    const b = "B" + QT_INPUT;
    let morkupA = `<label> Nome Giocatore${QT_INPUT} </label> <input type="text" name="giocatore${a}" id="giocatore${a}" /> <label> Prezzo di acquisto</label> <input type="number" name="costo${a}" id="costo${a}" />`;
    let morkupB = `<label> Nome Giocatore${QT_INPUT} </label> <input type="text" name="giocatore${b}" id="giocatore${b}" /> <label> Prezzo di acquisto</label> <input type="number" name="costo${b}" id="costo${b}" />`;

    BOX_DX.innerHTML += morkupB;
    BOX_SX.innerHTML += morkupA;
  }
}

function cancella_giocatore() {
  const BOX_DX = document.getElementById("dx");
  const BOX_SX = document.getElementById("sx");
}

function calcola_media() {}
