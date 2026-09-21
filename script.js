const botonAbrir = document.getElementById('abrir');
const inicio = document.getElementById('inicio');
const primavera = document.getElementById('primavera');

botonAbrir.addEventListener('click', function() {
    inicio.classList.add('oculto');

    primavera.classList.remove('oculto');

    primavera.classList.add('primavera-activa');

});

