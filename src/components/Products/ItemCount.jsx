import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import './styles/ItemCount.css'


const ItemCount = (item) => {

    const props = item.item;
    const {stock, offer} = props;

    
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

    return (
    <>
        <div className='detail__itemcount flex flex-col'>
            <div className='detail__count'>
                <div className='detail__contador'>
                    <button disabled={count <= 1} onClick={decrease} className='counter__b'> - </button>
                    <h4 className='counter__h'>{count}</h4>
                    <button disabled={count >=stock} onClick={increase} className='counter__b'> + </button>
                </div>
                <button 
                disabled={ stock <= 0} 
                onClick={() => onAdd(count)}
                className= {offer===true? 'btn__cart btn__cart--offer btn__cart--count' : 'btn__cart btn__cart--count'}>
                    Agregar al Carrito
                </button>
            </div>
            {
                irACarrito ?
                <div className='cart__buttons'>
                    <Link to='/cart' item={item}><button className='btn__cart'>Terminar compra</button></Link>
                    <Link to='/' item={item}><button className='btn__cart'>Volver a comprar</button></Link>
                </div>
                : null
            }
        </div>
    </>
    )
}

export default ItemCount