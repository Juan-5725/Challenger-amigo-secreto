let amigos = [];
let nombreAmigo = "";

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombreAmigo = document.querySelector('#amigo').value;
    
    // Validar la entrada
    if (nombreAmigo != "") {
        // Actualizar el array de amigos
        amigos.push(nombreAmigo);
        listaAmigos();
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

    return;
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear')

    } else {
        // Generar un indice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado
        let elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = (`<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`);
    }
        
    return;
}