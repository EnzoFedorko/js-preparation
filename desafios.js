function pares (){
    let i = 10;
    let fin = 50;
    let pares = []
    while (i <= fin) {
    pares.push(i)
    i+=2
    }
    //console.log(pares)
    return pares
}



function suma () {
    let i=0;
    let total = 0;
    let listPares = pares();
    while (i<listPares.length){
    total += parseInt(listPares[i])
    i++
    }
    console.log(total);
}
suma();