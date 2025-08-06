let amigos = [];
let nombreAmigo = "";

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombreAmigo = document.querySelector('#amigo').value;
    
    // Validar la entrada
    if (nombreAmigo != "") {
        // Actualizar el array de amigos
        amigos.push(nombreAmigo);
    } else {
        alert('Por favor, inserte un nombre.')
    }

    // Limpiar el campo de entrada
    document.querySelector('#amigo').value = '';

    return;
}

function listaAmigos() {
    // Obtener el nombre de la lista
    let lista = document.querySelector('#listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {

        // Agregar elementos a la lista
        let elementoDeLaLista = document.createElement('li');
        elementoDeLaLista.textContent = amigos[i];
        lista.appendChild(elementoDeLaLista);
    }
}