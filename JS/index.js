while(true){
    var preciocosto = parseFloat(prompt("Ingrese el valor de su producto"));

    if(!isNaN(preciocosto) && preciocosto != null && preciocosto !=""){
        break;
    }else{
        alert('no es numero');
        continue; 
    }
}

    preciocostoM = preciocosto.toFixed(2);
    alert("El valor del producto a calcular es: "+preciocostoM);
    console.log("El valor del producto a calcular es: "+preciocostoM);
    document.write("<h3> El valor del producto a calcular es: "+preciocostoM+"</h3>");

function CalcularIva (preciocosto){
    return (preciocosto * 0.21)
}

var iva = CalcularIva (preciocosto);
ivaM = iva.toFixed(2);

alert("El Iva del producto es: "+ivaM);
console.log("El Iva del producto es: "+ivaM);
document.write("<h3> El Iva del producto es: "+ivaM+"</h3>");

function SumarIva(preciocosto){
    return (preciocosto + (preciocosto * 0.21));
}

var precioconiva = SumarIva(preciocosto);
precioconivaM = precioconiva.toFixed(2);

alert("El precio con el iva es de: "+precioconivaM);
console.log("El precio con el iva es de: "+precioconivaM);
document.write("<h3> El precio con el iva es de: "+precioconivaM+"</h3>");

function preciodeventa(precioconiva){
    return (precioconiva * 1.25);
}

var precioventa = preciodeventa(precioconiva);
precioventaM = precioventa.toFixed(2);

alert("El precio de venta es: "+precioventaM);
console.log("El precio de venta es: "+precioventaM);
document.write("<h3> El precio de venta es: "+precioventaM+"</h3>")