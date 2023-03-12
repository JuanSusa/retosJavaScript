// el uso de la palabra reservada let, permite cambiar el dato de la variable sin necesidad de necesidad de declarar la palabra let nuevamente
/*let mensaje;
mensaje = 'tutorial'
mensaje = 'JS';
alert(mensaje);*/

// El uso de la palabra reservada var permite cambiar o reemplazar el dato de la variable, pero hay que volver a usar la palabra reservada var nuevamente.
/*var color1 = "Rojo";
console.log(color1);
var color1 = "azul";
console.log(color1);*/

//el lenguaje de java es debil en el tipado lo que quiere decir que no es necesario declarar algun tipo de dato para su uso, almacena desde cadenas hasta numeros
/*let variable = 123456;
variable = "tutorial cadena";
alert(variable);*/

//El uso de una constante, no permite reasignar el valor de una variable
/*const mensaje = "tutorial JS";
mensaje = "JS",
console.log(mensaje);*/

//typeof, nos permite verificar que tipo de dato esta usando la variable declarada.
/*let variable = 123456;
variable = "tutorial cadena";
alert(typeof(variable));*/

//sintaxis para poder concatenar un tipo de dato con un srting o cadena
/*let frase = "tutorial JS";
alert(`datatype de frase = ${typeof(frase)}`);*/

//solicitar datos por teclado e imprimir en pantalla html
/*let name = prompt ("cual es tu nombre");
let age = prompt ("cuantos años tienes");
document.write("bievenido" + name + age + "años");*/    

//RETO1 = reto de la abuela
/*var gradosF = prompt("ingrese los grados F°");
var gradosC = (gradosF - 32)/1.8;
document.write("los grados C° a utilizar son de " + gradosC);*/

//ejercicio sentecia condicional if
/*let nombre;
nombre = prompt("Ingrese su nombre");
if(nombre != null){
    document.write("Bienvenido" + nombre);
}
else{
    document.write("no se ha introducido ningun valor");
}*/

//RETO2: 
/*var num1 = prompt("ingrese el numero");
if(num1 >= 0){
    document.write("el numero ingresado es positivo")
}
else{
    document.write("el numero ingresado es negativo")
}*/

//RETO 2.1
/*var num2 = prompt("ingrese un numero");
var num3 = prompt("Ingrese un numero");
if(num2 >= num3){
    document.write(num2 + "es mayor que: " + num3)
}
else if(num2 <= num3){
    document.write(num2 + "es menor que " + num3)
}*/

//Reto 2.2
var num1 = prompt("ingrese un numero 01");
var num2 = prompt("ingrese un numero 02");
var num3 = prompt("Ingrese un numero 03");
 
