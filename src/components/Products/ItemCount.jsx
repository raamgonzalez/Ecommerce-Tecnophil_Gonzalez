import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import './styles/ItemCount.css'


const ItemCount = (item) => {
    const [irACarrito, setIrACarrito] = useState(false);
	const {onAddProducto} = useContext(CarritoContext)
    const [count, setCount] = useState(1);
    
    // useEffect(() => {
    // return () => {
    //     setCount(parseInt(1))
    // }
    // }, [])
    
    // const producto = {
    //     ...item,
    //     quantity: count
    // }

    const onAdd = (quantity) => {
        setIrACarrito(true);
        onAddProducto(item, quantity)
    }



    const decrease = () => setCount(count - 1);

    const increase = () => setCount(count + 1);

    return (<>
        <div className='detail__cart'>
            <div className='detail__contador'>
                <button disabled={count <= 1} onClick={decrease} className='counter__b'> - </button>
                <h4 className='counter__h'>{count}</h4>
                <button disabled={count >= item.stock} onClick={increase} className='counter__b'> + </button>
            </div>
            <button 
            disabled={ item.stock <= 0} 
            onClick={() => onAdd(count)}
            className= {item.offer===true? 'btn__cart--detail btn__cart--offer' : 'btn__cart--detail btn__cart--nooffer'}>
                Agregar al Carrito
            </button>
        </div>
        {
            irACarrito ?
            <div className='flex'>
                <Link to='/cart' item={item}><button className='btn__cart'>Terminar compra</button></Link>  
            </div>
            : null
        }
        </>
    )
}

export default ItemCount