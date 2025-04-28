const formulario = document.getElementById('formulario_valores');
const inputCantidad = document.getElementById('input_cantidad');
const tablaContenedor = document.getElementById('tabla_contenedor');
const botonCalcularSuma = document.getElementById('Boton_calcularSuma');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const cantidad = parseInt(inputCantidad.value);

    // Crear tabla
    let tablaHTML = '<table border="1" cellpadding="5" cellspacing="0"><tr>';

    for (let i = 0; i < cantidad; i++) {
        // nums aleatorios
        const valor = Math.floor(Math.random() * 100); 
        tablaHTML += `<td class="valor">${valor}</td>`;
    }

    tablaHTML += '</tr></table>';

    tablaContenedor.innerHTML = tablaHTML;

    // Mostrar el botón de calcular suma
    botonCalcularSuma.style.display = 'inline';
});
