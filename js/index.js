const contenedorTarjetas = document.getElementById("productos-container");


//Aquí vamos a crear las tarjetas de los productos mediante un bucle.
function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevaBicicleta = document.createElement("div");
        nuevaBicicleta.classList = "tarjeta-producto";
        nuevaBicicleta.innerHTML = `
            <img src="./imagenes/productos/${producto.id}.jpg">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        ` 
        contenedorTarjetas.appendChild(nuevaBicicleta);
        nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
    });
}

crearTarjetasProductosInicio(bicicletas);