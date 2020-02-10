var np = [];
var ni = [];
for (var a = 0; a < 50; a++){
    b = Math.round(Math.random()*100 + 1);
    if (b%2==0){
        np.push(b)    
    }
    else{
        ni.push(b)
    }
}
alert(np);
alert(ni);

