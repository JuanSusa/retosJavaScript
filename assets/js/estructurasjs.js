/*
//conversion de string a number
let num1 = "7";
let num2 = "5";
num1 = parseInt(num1) ;
num2 = parseInt(num2);
let op = num1 + num2;
document.write(op);*/

/*//Conversion  de number a string
let num3 = 7;
let transfoNumer = toString(num3);
document.write(transfoNumer);*/

/*//condicional switch
let estacion = prompt("Escriba una estacion en minusculas");

switch(estacion){
    case "invierno":
        alert("Todo es frio");
        document.write("Todo es frio");
        break;

    case "primavera":
        alert("se colorea el mundo");
        document.write("se colorea el mundo");
        break;

    case "verano":
        alert("Las noches se hacen largas");
        document.write("Las noches se hacen largas");
        break;
    
    case "otoño":
        alert("Sonde habia color ya no queda mas");
        document.write("Sonde habia color ya no queda mas");
        break;
    
    default:
        alert("El dato ingresado no hace referente a una estacion");
        document.write("El dato ingresado no hace referente a una estacion");
}*/

/*//Estructura for
for(i = 1; i <= 10; i ++){
    document.write("El valor del bucle es: " + i + "<br>");
}

//tabla del 5
let tabla = 5;

for(i=1; i <= 10; i ++){
    document.write(tabla + " - ");
    tabla = tabla + 5;
}*/

//realice un programa que permita obtener la factorial de un numero ingresado por el usuario
let num = prompt("Ingrese un numero");
let factorial = 1;

for(let i = 1; i <= num; i ++) {

    factorial = factorial * i;
    
}
console.log(factorial);
document.write(factorial);

