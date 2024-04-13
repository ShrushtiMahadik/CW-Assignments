
let m =0;
let cntEl = document.getElementById("cnt-el")
let welcomeEl = document.getElementById("welcome-el")


function increment(){

   m += 1
   cntEl.innerText = m
}




function save(){


 welcomeEl.textContent += m + " - "
 m = 0
 cntEl.innerText = m
}


