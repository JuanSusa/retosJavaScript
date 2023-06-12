var sumaSaldos=0;
var banco = [];
var x = 0;
var tabla=[];
while (x = 1) {
    var tabla=[];
    var numCuenta = prompt(" Ingresa numero de cuenta");
    if (parseInt (numCuenta) <0){
        x=1;
        break
    }
    var nomClient = prompt(" Ingresa nombre del cliente");
    var salCuen = prompt(" Ingresa saldo actual");
    
    if (parseInt (salCuen)>0){
        var estCuenta="Acreedor";
    }
    else if (parseInt (salCuen)<0){
        var estCuenta="Deudor";
    }
    else {
        var estCuenta="Nulo";
    }
    tabla.push(numCuenta,nomClient,estCuenta);
    banco.push(tabla);
    var sumaSaldos=parseInt (salCuen)+sumaSaldos;
    var tabla = 0;

}
