let nombresAmigos = [];
let nameElegido = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}
//funcion vinculada al botón Añadir
function agregarAmigo() {
    let nameAmigo = document.getElementById('amigo').value;
    if (nombresAmigos.includes(nameAmigo)) {
        alert("Nombre repetido\nIngresa un nombre distinto");
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
//funcion para escribir en ul
function printUl(idUl,indice){
    let elementoUl = document.querySelector(idUl);
    let elementoLista = document.createElement('li');
    elementoLista.textContent = nombresAmigos[indice];
    elementoUl.appendChild(elementoLista);
    return;
}

function limpiarUl(idUl){
    document.querySelector(idUl).innerHTML="";
    return;
}

//Imprime en pantalla los nombres de los amigos
function listaFriends() {
    limpiarUl('#listaAmigos');
    contador = 0;
        while (contador < nombresAmigos.length){
            printUl('#listaAmigos',contador);
            contador++;
        }
    return;
    }
//funcion vinculada al botón sortear
function sortearAmigo(){
    limpiarUl('#resultado')
    let indiceSorteado = Math.floor(Math.random()*nombresAmigos.length);
    console.log(indiceSorteado);
    console.log(nombresAmigos.length);
    
    if (nombresAmigos.length == nameElegido.length){
        alert('No hay más amigos para sortear\nRecarga la página para reiniciar el sorteo');
        limpiarUl('#listaAmigos');
    } else{
        if (nameElegido.includes(nombresAmigos[indiceSorteado])){
            return sortearAmigo();
        }else{
            nameElegido.push(nombresAmigos[indiceSorteado]);
        }
        printUl('#resultado',indiceSorteado)
    }
    console.log(nameElegido.length);
    return;
}


