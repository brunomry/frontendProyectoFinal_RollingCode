const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;

console.log(URL_Productos);


export const leerProductosAPI = async() =>{
    try{
        const respuesta = await fetch(URL_Productos);
        const listaProductos = await respuesta.json();
        console.log(listaProductos);
        return listaProductos
    }catch(error){
        console.log(error)
    }
}
