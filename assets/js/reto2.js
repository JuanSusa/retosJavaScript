/*//RETO 2.1
//Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.
var num1 = prompt("Ingrese un número");
if (num1 === "") {
  alert("Datos Incorrectos");
} else{

num1 = parseInt(num1);
if (num1 > 0) {
  document.write("El número ingresado es positivo");
  alert("El número ingresado es positivo");
  console.log("El número ingresado es positivo");
} else if (num1 < 0) {
  document.write("el numero ingresado es negativo");
  alert("El número ingresado es negativo");
  console.log("El número ingresado es negativo");
}
 else {
  document.write("el numero ingresado es cero");
  alert("El número ingresado es cero");
  console.log("El número ingresado es cero");
}
}*/


/*//RETO 2.2
//Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");

// Validacion de datos
if (num1 === "" || num2 === "") {
  console.log("Datos incorrectos.");
  alert("Datos incorrectos.");
  document.write("Datos incorrectos.");
} else {
  
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (num1 > num2) {
    console.log("El número mayor es " + num1 + " y el número menor es " + num2 + ".");
    alert("El número mayor es " + num1 + " y el número menor es " + num2 + ".");
    document.write("<h1>El número mayor es " + num1 + " y el número menor es " + num2 + ".</h1>");
  } else if (num1 < num2) {
    console.log("El número mayor es " + num2 + " y el número menor es " + num1 + ".");
    alert("El número mayor es " + num2 + " y el número menor es " + num1 + ".");
    document.write("<h1>El número mayor es " + num2 + " y el número menor es " + num1 + ".</h1>");
  } else {
    console.log("Los dos números son iguales.");
  }
}*/

//RETO 2.3
//Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
let num3 = prompt("Ingrese el tercer número: ");

// Validacion de datos
if (num1 === "" || num2 === "" || num3 === "") {
  console.log("Datos incorrectos.");
} else {
  
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);

  let mayor = num1;
  let menor = num1;

  // Verificion de num > y num <.
  if (num2 > mayor) {
    mayor = num2;
  }
  if (num3 > mayor) {
    mayor = num3;
  }
  if (num2 < menor) {
    menor = num2;
  }
  if (num3 < menor) {
    menor = num3;
  }

  
  console.log("El número mayor es " + mayor + " y el número menor es " + menor + ".");
  alert("El número mayor es " + mayor + " y el número menor es " + menor + ".");
  document.write("<h1>El número mayor es " + mayor + " y el número menor es " + menor + ".</h1>");
}

