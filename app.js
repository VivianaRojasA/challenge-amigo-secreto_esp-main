let nombresAmigos = [];

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
        listaFriends();
    }
    limpiarCaja();
    return;
}

//Imprime en pantalla los nombres de los amigos
function listaFriends() {
    let lista = document.querySelector('#listaAmigos');

    //reininia ul del html
    document.querySelector('#listaAmigos').innerHTML="";

    contador = 0;
        while (contador < nombresAmigos.length){
            let elementoLista = document.createElement('li');
            elementoLista.textContent = nombresAmigos[contador];
            lista.appendChild(elementoLista);
            contador++;
        }
        return;
    }



