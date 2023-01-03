import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log("Este clg es de CarritoContext", carrito)

    //Limpiar carrito
    const limpiarCarrito = () => setCarrito([])

    //Verificar si el producto ya esta en el carrito
    // const estaEnCarrito = (id) => carrito.find((product) => product.id === id) ? true : false;
    const estaEnCarrito = (id) => {
        //----TEST---//
        console.log("Esta en carrito id", id)
        return carrito.find((product)=> product.item.id === id) ? true : false;
    }


    //Borrar carrito
    const borrarProducto = (id) => setCarrito(carrito.filter((item) => item.id !== id))

    //Agregar al carrito
    const onAddProducto = (item, quantity) => {
        if (estaEnCarrito(item.item.id)) {
            setCarrito(carrito.map((product) => {
                //----TEST---//
                console.log("Add Product IF", product, quantity)
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
            //----TEST---//
            console.log("Add Product Else:", item, quantity)
            setCarrito([...carrito, {...item, quantity}])
        }
    
        


        toast(`Agregaste ${quantity} unidades al carrito`, {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "dark",
			});
    }


    //Total Compra
    const totalCompra = () => carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.quantity, 0)
    

    //Total de productos
    const totalProductos = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return (
        <CarritoContext.Provider value={{
            totalCompra,
            totalProductos,
            onAddProducto,
            limpiarCarrito, 
            estaEnCarrito, 
            borrarProducto,
            carrito}}
            > 
            {children}
            <ToastContainer />
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider