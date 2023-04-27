
alert(" --- BIENVENIDO A TU TIENDA DE ROPA ---")




function hacerCompra(){ /* tiene que retornar el total de la compra*/
    let producto = prompt("Elige el producto a comprar: Poleron || Polera || Pantalon")
    while ((producto !== "Poleron") && (producto !== "Polera") && (producto!=="Pantalon")){
        producto = prompt("Incorrecto \nElige el producto a comprar: Poleron || Polera || Pantalon")
    }

    let unidades = parseInt(prompt("Ingrese la cantidad: "))
    while (!(Number.isInteger(unidades) && unidades >= 1)){
        unidades = parseInt(prompt("Incorrecto \nIngrese nuevamente la cantidad: "))
    }    
    switch(producto){
            case "Poleron":
            precio=50
            mostrarImporte(producto, unidades, precio)
            return unidades*precio
            break
        case "Polera":
            precio=25
            mostrarImporte(producto, unidades, precio)
            return unidades*precio
            break
        case "Pantalon":
            precio=40
            mostrarImporte(producto, unidades, precio)
            return unidades*precio
            break
    }
}



function mostrarImporte(producto,unidades,precio){
    alert("El costo total de "+ unidades + ESPACIO + producto + " es: " + unidades*precio)
}

const mostrarImporteParcial = (importeTotal) => alert("Su cuenta va en: "+ importeTotal)

let comprar = true
let importeTotal=0
let ESPACIO=" "

while (comprar){
    importe = hacerCompra()
    importeTotal += importe
    mostrarImporteParcial(importeTotal)
    comprar = confirm("¿Quieres seguir comprando? Aceptar(Si) || Cancelar(No)")
}

alert("El total de su compra son: "+ importeTotal)



