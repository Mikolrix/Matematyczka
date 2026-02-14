if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker zarejestrowany"));
}
let q = document.getElementById("q");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnEqual = document.getElementById("btnEqual");
let n1 = Math.floor(Math.random() * 8)+2;
let n2 = Math.floor(Math.random() * 8)+2;
let n3 = Math.floor(Math.random() * 4) + 1;
let sign = ["×","÷"][Math.floor(Math.random() * 2)];
function czyDziala() { 
    while (sign == "÷" && n1 < n2) {
        n1 = Math.floor(Math.random() * 8) + 2;
        n2 = Math.floor(Math.random() * 8) + 2;
        sign = ["×", "÷"][Math.floor(Math.random() * 2)];
    }
    if(sign == "÷"){
        n1 = Math.floor(Math.random() * 99) + 1;
    }
    while(sign == "÷" && n1 % n2 !== 0){
        n1 = Math.floor(Math.random() * 99) + 1;
    }

}
czyDziala();
q.textContent = `${n1} ${sign} ${n2}`;