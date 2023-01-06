import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    //Limpiar carrito
    const limpiarCarrito = () => setCarrito([])

    //Verificar si el producto ya esta en el carrito
    // const estaEnCarrito = (id) => carrito.find((product) => product.id === id) ? true : false;
    const estaEnCarrito = (id) => {
        return carrito.find((product)=> product.item.id === id) ? true : false;
    }


    //Borrar carrito
    const borrarProducto = (id) => {
        let bProducto = carrito.filter((item) => Number(item.item.id) !== Number(id))
        setCarrito(bProducto)
    }

    //Agregar al carrito
    const onAddProducto = (item, quantity) => {
        if (estaEnCarrito(item.item.id)) {
            setCarrito(carrito.map((product) => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
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