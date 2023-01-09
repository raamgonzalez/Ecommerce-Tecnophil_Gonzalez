import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import useContador from '../../firebase/hook/useContador'
import './styles/ItemCount.css'


const ItemCount = (item) => {

    const props = item.item;
    const {stock, offer} = props;
    const { decrease, increase, count } = useContador()

    
    const [irACarrito, setIrACarrito] = useState(false);
	const {onAddProducto} = useContext(CarritoContext)
    const navigate = useNavigate();


    const onAdd = (quantity) => {
        setIrACarrito(true);
        onAddProducto(item, quantity)
    }

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
                className= {offer===true? 'btn__cart btn__cart--offer' : 'btn__cart '}>
                    Agregar al Carrito
                </button>
            </div>
            {/* <hr className='detail__hr'></hr> */}
            {
                irACarrito ?
                <div className='cart__buttons'>
                    <Link onClick={() => navigate(-1)} item={item}><button className='btn__cart--count btn__checkout'>Volver a comprar</button></Link>
                    <Link to='/cart' item={item}><button className='btn__cart--count '>Terminar compra</button></Link>
                </div>
                : null
            }
        </div>
    </>
    )
}

export default ItemCount