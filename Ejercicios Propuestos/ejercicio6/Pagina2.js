const botonCalcular = document.getElementById('Boton_calcular');

botonCalcular.addEventListener('click', () => {
    const numero1 = document.getElementById('input_numero1').value;
    const numero2 = document.getElementById('input_numero2').value;
    const operador = document.getElementById('operador').value;
    const resultadoDiv = document.getElementById('resultado');

    let resultado;

    // logica de operaciones
    resultado = "";

    resultadoDiv.textContent = `Resultado: ${resultado}`;
});
