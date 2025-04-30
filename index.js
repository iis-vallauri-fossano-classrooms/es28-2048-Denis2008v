"use strict"

const DIM = 4;

let divs = [];

window.onload = function () {


   const wrapper = document.getElementById("wrapper");

   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM; j++) {
         const div = document.createElement("div");
         div.id = `div-${i}-${j}`;
         div.classList.add("cella");
         wrapper.appendChild(div);
      }
   }

   let tempI = 100;
   let tempJ = 100;
   for (let i = 0; i < 2; i++) {
      let randomI = 0;
      let randomJ = 0;
      do {
         randomI = generaNumero(0, 3);
         randomJ = generaNumero(0, 3);
      } while (randomI == tempI && randomJ == tempJ);
      tempI = randomI;
      tempJ = randomJ;
      let div = document.getElementById(`div-${randomI}-${randomJ}`);
      div.innerText = 2;

   }

   // Aggiungi il listener per il keyup
   document.body.addEventListener("keyup", elabora);

   // Funzione che gestisce la pressione dei tasti
   function elabora(event) {
      switch (event.key) {
         case "ArrowUp":
            spostaSu();
            break;
         case "ArrowDown":
            spostaGiu();
            break;
         case "ArrowLeft":
            spostaSinistra();
            break;
         case "ArrowRight":
            spostaDestra();
            break;
      }
   }

}
function spostaSu()
{
   for(let i=0;i<DIM;i++)
   {
      for(let j=0;j<DIM;j++)
      {
         const div = document.getElementById(`div-${i}-${j}`);

         if(div.innerText != "")
         {
            divs.push(div.id);
         }
      }
   }

   
}


function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}