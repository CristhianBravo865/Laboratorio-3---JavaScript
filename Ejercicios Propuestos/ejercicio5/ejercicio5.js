const formulario = document.getElementById('formulario_valores');
const inputFilas = document.getElementById('input_filas');
const inputColumnas = document.getElementById('input_columnas');
const tablaContenedor = document.getElementById('tabla_contenedor');
const botonGenerarNumeros = document.getElementById('Boton_generarNumeros');
const botonCalcularSuma = document.getElementById('Boton_calcularSuma');

// Evento para la tabla
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga de la página
    const filas = parseInt(inputFilas.value);
    const columnas = parseInt(inputColumnas.value);

    // crear tabla vacia
    let tablaHTML = '<table border="1" cellpadding="5" cellspacing="0">';
    //for para crear la tabla
    for (let i = 0; i < filas; i++) {
        tablaHTML += '<tr>'; // fila creada
        for (let j = 0; j < columnas; j++) {
            tablaHTML += `<td class="valor"></td>`; // celdas vacias
        }
        tablaHTML += '</tr>';
    }

    tablaHTML += '</table>';

    // agregar la tabla
    tablaContenedor.innerHTML = tablaHTML;
    // mostrar boton para generar nums
    botonGenerarNumeros.style.display = 'inline';
});
// Evento para generar nums
botonGenerarNumeros.addEventListener('click', () => {
    const celdas = document.querySelectorAll('.valor');

    celdas.forEach(celda => {
        const numeroAleatorio = Math.floor(Math.random() * 100); // número aleatorio
        celda.textContent = numeroAleatorio;
    });

    // Mostrar el botón para suma
    botonCalcularSuma.style.display = 'inline';
});

