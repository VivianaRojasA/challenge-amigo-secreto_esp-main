let nombresAmigos = [];
let nameElegido = [];

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
//funcion para escribir en ul
function printUl(idUl,indice){
    let elementoUl = document.querySelector(idUl);
    let elementoLista = document.createElement('li');
    elementoLista.textContent = nombresAmigos[indice];
    elementoUl.appendChild(elementoLista);
}

function limpiarUl(idUl){
   //let lista = document.querySelector(idUl);
    //reininia ul del html
    document.querySelector(idUl).innerHTML="";
}

//Imprime en pantalla los nombres de los amigos
function listaFriends() {
    limpiarUl('#listaAmigos');
   /* let lista = document.querySelector('#listaAmigos');

    //reininia ul del html
    document.querySelector('#listaAmigos').innerHTML="";*/

    contador = 0;
        while (contador < nombresAmigos.length){
            /*let elementoLista = document.createElement('li');
            elementoLista.textContent = nombresAmigos[contador];*/
            printUl('#listaAmigos',contador);
            contador++;
        }
        return;
    }

function sortearAmigo(){
    limpiarUl('#resultado')
    let indiceSorteado = Math.floor(Math.random()*nombresAmigos.length);
    console.log(indiceSorteado);
    console.log(nombresAmigos.length);
    
    if (nombresAmigos.length == nameElegido.length){
        alert('No hay más amigos para sortear');
        limpiarUl('#listaAmigos');
        //incluir deshablitar boton sortear,
    } else{
        if (nameElegido.includes(nombresAmigos[indiceSorteado])){
            return sortearAmigo();
        }else{
            nameElegido.push(nombresAmigos[indiceSorteado]);
        }
        printUl('#resultado',indiceSorteado)
    }
    console.log(nameElegido.length);
    /*let resultHTML = document.querySelector('#resultado');
    resultHTML.innerHTML =  nombresAmigos[indiceSorteado];*/
}


