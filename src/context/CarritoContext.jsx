import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    //Toda info que se desarrolle aca se va a poder usar en cualquier componente

    const [carrito, setCarrito] = useState([])

    const onAddCarrito = (producto) => {
        setCarrito([...carrito, producto.cantidad])
        console.log(...carrito)
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
        console.log(carrito)
    }

    return (
        <CarritoContext.Provider value={{onAddCarrito, carrito}}> 
            {children}
            <ToastContainer />
        </CarritoContext.Provider>

    )
}

export default CarritoContextProvider