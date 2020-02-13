/*function numerosPrimos(n){
    var num;
    var divisor = 1;
    var divisores = 0;
    var lista = [];
    for (var a=0; a < n; a++){
        do{
            if(num%divisor == 0){
            divisores++;
        }
        divisor++;
        }while(divisor <= num);
        if(divisores == 2){
            lista.push(num)
        }
    }
    return (lista);
}
alert(numerosPrimos(8))*/

/*

var n;
//n = prompt("Ingrese n");
var num;
var divisor = 1;
var divisores = 0;
var lista = [];
var listaMala = [];
for (var i=1; i <= n; i++){
    do{
        if(num%divisor == 0){
        divisores++;
    }
    divisor++;
    }while(divisor <= num);
    if(divisores == 2){
        lista.push(num)
    }else{
        listaMala.push(num)
    }
}
document.write(lista);
 
*/



/*var n = 4;
n = prompt("Ingrese n");
var num = 0;
var divisor = 1;
var divisores = 0;
var lista = [];
var listaMala = [];
while ( num <= n){
    num++
    do{
        if(num%divisor == 0){
        divisores++;
        console.log("El numbero "+num+" es primo");
    }
    divisor++;
    }while(divisor <= num);
    if(divisores == 2){
        lista.push(num)
    }else{
        listaMala.push(num)
    }
}
//document.write(lista)
alert(lista)
*/

function esPrimo() {
    var num;
    var divisor = 1;
    var divisores = 0;
    do{
        if(num%divisor == 0){
        divisores++;
    }
    divisor++;
    }while(divisor <= num);
    if(divisores == 2){
        num = true;
        console.log("El numbero "+num+" es primo");
    }
    
}
function cantidad() {
    var n = 4;
    var lista = [];
    var i = 1;
    while(i < n){
        var num;
        var divisor = 1;
        divisores = 0;
        do{
            if(num%divisor == 0){
            divisores++;
        }
        divisor++;
        }while(divisor <= num);
        if(divisores == 2){
        num = true;
        console.log("El numbero "+num+" es primo");
    }
        if(num = true){
            num++;
            lista.push(num)
        }
        num++
    }
    console.log(lista)
}

/*
function cantidad() {
    var n = 4;
    var lista = [];
    while(i < n){
        if(num = true){
            num++;
            lista.push(num)
        }
        num++
    }
    console.log(lista)
}
*/