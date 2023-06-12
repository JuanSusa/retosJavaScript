let eleccion = prompt("Seleccione la operacion a realizar: \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4.Division");
let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese un segundo número");
let op;

num1 = parseInt(num1);
num2 = parseInt(num2);

switch (eleccion) {
  case "1":
    op = num1 + num2;
    alert("La suma entre" + num1 + " y " + num2 + "es: " + op);
    document.write("La suma entre" + num1 + " y " + num2 + "es: " + op);
    break;

  case "2":
    
    op = num1 - num2;
    alert("La resta entre" + num1 + " y " + num2 + "es: " + op);
    document.write("La resta entre" + num1 + " y " + num2 + "es: " + op);
    break;

  case "3":
    
    op = num1 * num2;
    alert("La multiplicacion entre" + num1 + " y " + num2 + "es: " + op);
    document.write("La multiplicacion entre" + num1 + " y " + num2 + "es: " + op);
    break;

  case "4":
    
    op = num1 / num2;
    alert("La division entre" + num1 + " y " + num2 + "es: " + op);
    document.write("La division entre" + num1 + " y " + num2 + "es: " + op);
    break;


  default:
    alert("Seleccion Incorreta");
    document.write("Seleccion Incorreta");
}
