const botonCalcular = document.getElementById('Boton_calcular');

botonCalcular.addEventListener('click', () => {
    const numero1 = parseFloat(document.getElementById('input_numero1').value);
    const numero2 = parseFloat(document.getElementById('input_numero2').value);
    const operador = document.getElementById('operador').value;
    const resultadoDiv = document.getElementById('resultado');

    let resultado;

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero2 !== 0 ? (numero1 / numero2) : 'Error: División entre cero';
            break;
        case '^':
            resultado = Math.pow(numero1, numero2);
            break;
        case '√':
            if (numero2 !== 0) {
                resultado = Math.pow(numero1, 1 / numero2);
            } else {
                resultado = 'Error: Índice de raíz no puede ser cero';
            }
            break;
        case '&&':
            resultado = Boolean(numero1) && Boolean(numero2);
            break;
        case '||':
            resultado = Boolean(numero1) || Boolean(numero2);
            break;
        default:
            resultado = 'Operación no implementada';
    }

    resultadoDiv.textContent = `Resultado: ${resultado}`;
});
