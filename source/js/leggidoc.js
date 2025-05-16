// document.addEventListener("DOMContentLoaded", function () {
//   const filePath = "../../Assets/doc/regolamento 25-26 CAMPIONATO.docx";

//   fetch(filePath)
//     .then((response) => response.arrayBuffer())
//     .then((arrayBuffer) =>
//       mammoth.convertToHtml(
//         { arrayBuffer },
//         {
//           styleMap: ["table => table", "tr => tr", "td => td", "th => th"],
//         }
//       )
//     )
//     .then((result) => parseHtmlContent(result.value))
//     .catch((error) =>
//       console.error("Errore nella lettura del file .docx:", error)
//     );
// });

// function parseHtmlContent(html) {
//   const elencoCapitoli = document.getElementById("elenco_capitoli");
//   const contenutoParagrafi = document.getElementById("contenuto_paragrafi");

//   if (!elencoCapitoli || !contenutoParagrafi) {
//     console.error("Elementi HTML non trovati. ");
//     return;
//   }

//   const container = document.createElement("div");
//   container.innerHTML = html;
//   const allNodes = Array.from(container.childNodes);

//   let currentLi = null; // per box_dx
//   let currentIndex = 0;

//   while (currentIndex < allNodes.length) {
//     const node = allNodes[currentIndex];

//     if (node.tagName === "H1") {
//       // Aggiungi capitolo alla lista sinistra
//       const liSx = document.createElement("li");
//       liSx.textContent = node.textContent;
//       elencoCapitoli.appendChild(liSx);

//       // Crea nuovo li per box_dx
//       currentLi = document.createElement("li");
//       contenutoParagrafi.appendChild(currentLi);

//       currentIndex++;
//       continue;
//     }

//     if (node.tagName === "H2" && currentLi) {
//       // Crea nuova sezione
//       const section = document.createElement("section");
//       // section.classList.add("hidden");

//       const h3 = document.createElement("h3");
//       h3.textContent = node.textContent;
//       section.appendChild(h3);

//       currentIndex++;
//       // Aggiungi tutti i paragrafi dopo <h2>
//       while (
//         currentIndex < allNodes.length &&
//         allNodes[currentIndex].tagName !== "H1" &&
//         allNodes[currentIndex].tagName !== "H2"
//       ) {
//         const pNode = allNodes[currentIndex];
//         if (pNode.tagName === "P") {
//           section.appendChild(pNode.cloneNode(true));
//         }
//         currentIndex++;
//       }

//       currentLi.appendChild(section);
//       continue;
//     }

//     currentIndex++;
//   }

//   const event = new Event("capitoliCreati");
//   document.dispatchEvent(event);
// }

document.addEventListener("DOMContentLoaded", function () {
  const filePath = "../../Assets/doc/regolamento 25-26 CAMPIONATO.docx";

  fetch(filePath)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) =>
      mammoth.convertToHtml(
        { arrayBuffer },
        {
          styleMap: ["table => table", "tr => tr", "td => td", "th => th"],
        }
      )
    )
    .then((result) => parseHtmlContent(result.value))
    .catch((error) =>
      console.error("Errore nella lettura del file .docx:", error)
    );
});

function parseHtmlContent(html) {
  const elencoCapitoli = document.getElementById("elenco_capitoli");
  const contenutoParagrafi = document.getElementById("contenuto_paragrafi");

  if (!elencoCapitoli || !contenutoParagrafi) {
    console.error("Elementi HTML non trovati.");
    return;
  }

  const container = document.createElement("div");
  container.innerHTML = html;
  const allNodes = Array.from(container.childNodes);

  let currentLi = null; // Capitolo attuale
  let currentIndex = 0;

  while (currentIndex < allNodes.length) {
    const node = allNodes[currentIndex];

    if (node.tagName === "H1") {
      // Menu a sinistra
      const liSx = document.createElement("li");
      liSx.textContent = node.textContent;
      elencoCapitoli.appendChild(liSx);

      // Box a destra
      currentLi = document.createElement("li");
      contenutoParagrafi.appendChild(currentLi);

      currentIndex++;
      continue;
    }

    if (node.tagName === "H2" && currentLi) {
      const section = document.createElement("section");
      // section.classList.add("hidden");

      const h3 = document.createElement("h3");
      h3.textContent = node.textContent;
      section.appendChild(h3);
      currentIndex++;

      // Aggiungi tutti i paragrafi e tabelle finché non arriva un altro H1 o H2
      while (
        currentIndex < allNodes.length &&
        allNodes[currentIndex].tagName !== "H1" &&
        allNodes[currentIndex].tagName !== "H2"
      ) {
        const subNode = allNodes[currentIndex];
        if (["P", "TABLE"].includes(subNode.tagName)) {
          section.appendChild(subNode.cloneNode(true));
        }
        currentIndex++;
      }

      currentLi.appendChild(section);
      continue;
    }

    currentIndex++;
  }

  const event = new Event("capitoliCreati");
  document.dispatchEvent(event);
}
