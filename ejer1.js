let idInfo = document.getElementById("info");

console.log(idInfo.textContent);

let detalle = document.querySelector(".detalle"); 
detalle.textContent = "este es un detalle modificado";

let parrafo = document.querySelectorAll("p");
parrafo. forEach(p => {
p.style.backgroundColor = "lightblue";
}); 