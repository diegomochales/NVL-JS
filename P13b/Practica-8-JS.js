var frase = prompt("Ingrese la frase o palabra");

frase = frase.toLowerCase();
frase = frase.replace(/ /g, "");
var frase2 = frase.split("").reverse().toString();
for(var i = 0; i < ((frase2.length)-1);
i++) {
    frase2 = frase2.replace(",","");
};
if(frase = frase2){
    alert("La frase o palabra ES palindromo")
}else{
    alert("La frase o palabra NO ES palindromo")
}

console.log(frase);

    
