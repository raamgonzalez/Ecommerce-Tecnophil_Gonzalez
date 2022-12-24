import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './styles/ItemCount.css'

const ItemCount = (item) => {

	const {onAddCarrito} = useContext(CarritoContext)
    const {stock, offer, initialValue} = item
    const [count, setCount] = useState(parseInt(initialValue));

    useEffect(() => {
    
    return () => {
        setCount(parseInt(initialValue))
    }
    }, [initialValue])
    
    const producto = {
        ...item,
        cantidad: count
    }


    const decrease = () => setCount(count - 1);

    const increase = () => setCount(count + 1);

    return (
        <div className='detail__cart'>
            <div className='detail__contador'>
                <button disabled={count <= 1} onClick={decrease} className='counter__b'> - </button>
                <h4 className='counter__h'>{count}</h4>
                <button disabled={count >= stock} onClick={increase} className='counter__b'> + </button>
            </div>
			<button 
            disabled={ stock <= 0} 
            onClick={() => onAddCarrito(producto)}
            className= {offer===true? 'btn__cart--detail btn__cart--offer' : 'btn__cart--detail btn__cart--nooffer'}>
			    Agregar al Carrito
			</button>

        </div>
    )
}

export default ItemCount