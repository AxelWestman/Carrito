function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas")); //JSON.parse es para pasar de string a array
    console.log(memoria);
    let cuenta = 0; 
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto); 
        localStorage.setItem("bicicletas",JSON.stringify([nuevoProducto]));
        cuenta = 1;
        /*En localstorage no se pueden guardar arrays u objetos, solo strings, entonces debemos tranformar
        todo nuevoProducto y el array a un string con "JSON.stringify"*/ 
    } else{
        const indiceProducto = memoria.findIndex(bicicleta => bicicleta.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta = 1; 
        } else{
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("bicicletas",JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
    return cuenta;
};

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"));
    const indiceProducto = memoria.findIndex(bicicleta => bicicleta.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    } else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("bicicletas", JSON.stringify(memoria));
    actualizarNumeroCarrito()
}


/*Toma un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"));
    if(memoria && memoria.length > 0){
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
    } else{
        cuentaCarritoElement.innerText = 0;
    }
}

 actualizarNumeroCarrito();