import { calcLength } from 'framer-motion';
import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    //Limpiar carrito
    const limpiarCarrito = () => setCarrito([])

    //Verificar si el producto ya esta en el carrito
    const estaEnCarrito = (id) => carrito.some((item) => item.id === id)

    //Borrar carrito
    const borrarProducto = (id) => setCarrito(carrito.filter((item) => item.id !== id))

    //Agregar al carrito
    const onAddProducto = (item, quantity) => {
        // setCarrito([...carrito, producto])
        // const nuevoCarrito = carrito.filter(item => item.id !== producto.id)
        // nuevoCarrito.push({...producto, quantity: newQuantity})
        // setCarrito(nuevoCarrito)
        if (estaEnCarrito(item.id)) {
            setCarrito(carrito.map((product) => {
                return item.id === product.id ? {...product, quantity: item.quantity + quantity} : item
            }));
        }else{
            console.log(item)
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
    const totalCompra = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.quantity, 0)
    }

    //Total de productos
    const totalProductos = () => {
        const test = carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
        return console.log(test)
    }


    


    // const onAddCarrito = (producto) => {
    //     setCarrito([...carrito, producto.cantidad])
    //     console.log(...carrito)
    //     toast(`Agregaste ${producto.cantidad} unidades al carrito`, {
	// 		position: "bottom-right",
	// 		autoClose: 2000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: false,
	// 		draggable: true,
	// 		progress: undefined,
	// 		theme: "dark",
	// 		});
    //     console.log(carrito)
    // }

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