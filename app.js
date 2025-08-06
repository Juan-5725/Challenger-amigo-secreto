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
