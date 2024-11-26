let nuevoParrafo = document.createElement('p'); 
nuevoParrafo.textContent = "Este es un párrafo creado dinámicamente"; 
document.body.appendChild(nuevoParrafo); 


let botonEliminar = document.querySelector('#eliminar');
botonEliminar.addEventListener('click', function () {
    
    let primerParrafo = document.querySelector('p');
    if (primerParrafo) {
        primerParrafo.remove(); 
    } else {
        alert("No hay más párrafos para eliminar.");
    }
});
