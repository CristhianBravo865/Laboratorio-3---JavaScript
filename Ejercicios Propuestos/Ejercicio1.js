function obtenerDiaSemana(diaNumero) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return diasSemana[diaNumero];
}

const fechaActual = new Date();
const numeroDia = fechaActual.getDay();
const textoDia = obtenerDiaSemana(numeroDia);

console.log("Hoy dia es: " + textoDia);
