import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    //Limpiar carrito
    const limpiarCarrito = () => setCarrito([])

    //Verificar si el producto ya esta en el carrito
    const estaEnCarrito = (id) => carrito.some((producto) => producto.id === id)

    //Borrar carrito
    const borrarProducto = (id) => setCarrito(carrito.filter((producto) => producto.id !== id))

    //Agregar al carrito
    const onAddProducto = (producto, quantity) => {
        // setCarrito([...carrito, producto])
        // const nuevoCarrito = carrito.filter(item => item.id !== producto.id)
        // nuevoCarrito.push({...producto, quantity: newQuantity})
        // setCarrito(nuevoCarrito)
        if (estaEnCarrito(producto.id)) {
            setCarrito(carrito.map((item) => {
                return producto.id === item.id ? {...item, quantity: item.quantity + quantity} : item
            }));
        }else{
            setCarrito([...carrito, {...producto, quantity}])
        }
        


        toast(`Agregaste ${producto.cantidad} unidades al carrito`, {
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
        return carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }

    console.log('carrito:', carrito)

    


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
            onAddProducto , 
            carrito, 
            limpiarCarrito, 
            estaEnCarrito, 
            borrarProducto}}
            > 
            {children}
            <ToastContainer />
        </CarritoContext.Provider>

    )
}

export default CarritoContextProvider