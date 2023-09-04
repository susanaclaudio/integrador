alert("Buen provecho");
alert("Bienvenidos al restaurant, Corralito")
entrada=parseInt(prompt("Ingrese el precio de la entrada"))
principal=parseInt(prompt("Ingrese el precio del plato principal"))
postre=parseInt(prompt("Ingrese el precio del postre"))
total=entrada+principal+postre
igv=(total*0.18)+total
console.log("El precio de la entrada es:",entrada)
console.log("El precio del plato principal es:",principal)
console.log("El precio del postre es:",postre)
console.log("El total es:",total)
console.log("El total incluido IGV es:",igv)