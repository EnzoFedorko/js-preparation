function capital (){
const cadena = prompt('ingrese texto a modificar');
let cadenaList = cadena.split(" ");
let i = 0;
while (i<cadenaList.length){
    cadenaList[i] = cadenaList[i].replace(/^\w/, (c) => c.toUpperCase());
    i++;
}
document.write(cadenaList.toString().replace(/,/g, ' '));
console.log(cadenaList.toString().replace(/,/g, ' '));
}

capital ();