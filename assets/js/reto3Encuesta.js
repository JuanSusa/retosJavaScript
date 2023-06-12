let nombre, totalPr, prCt, promedio, porcentaje;

nombre = prompt("Ingrese su nombre");
totalPr = prompt("Ingrese cantidad de preguntas según test");
prCt = prompt("Cuantas preguntas fueron solucionadas correctamente");
promedio = (prCt/totalPr)*100; 


if (promedio >= 90){

    alert("Nivel Superior");
    document.write("Nivel Superior");

} else if (promedio >= 75 && promedio < 90){
    alert("Nivel Medio");
    document.write("Nivel Medio");
} else if (promedio >= 50 && promedio < 75){
    alert("Nivel Regular");
    document.write("Nivel Regular");
} else {
    alert("Fuera de nivel");
    document.write("Fuera de nivel");
}