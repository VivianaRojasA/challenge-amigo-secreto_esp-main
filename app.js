let nombresAmigos = [];
let cantidadAmigos = 0;
let contador = 0;

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//funcion vinculada al botón Añadir
function agregarAmigo() {
    let nameAmigo = document.getElementById('amigo').value;
    if (nombresAmigos.includes(nameAmigo)) {
        alert("Nombre repetido, Ingresa un nombre distinto");
    } else if (nameAmigo == "" ){
        alert("Ingresa un nombre válido");
    }
    else {
        nombresAmigos.push(nameAmigo);
    }
    limpiarCaja();
    return;
}

NnombresAmigos = nombresAmigos.length;
console.log(contador);
console.log(cantidadAmigos);
console.log(nombresAmigos);
