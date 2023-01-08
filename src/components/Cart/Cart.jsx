import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import ItemCart from './ItemCart'
import './Cart.css'

const Cart = (item) => {
    const{carrito, totalCompra} = useContext(CarritoContext)

    
    if (carrito.length === 0) {
        return(
            <>
            <div className='cart__container flex flex-col'>
                <h2 className='cart__main--title'>No hay productos en el carrito</h2>
                <Link className='btn__cart btn__cart--menu' to='/'>Volver al Home</Link>
            </div>
            </>
        );
    }

    return (
        <>  <div className='cart__title'>
                <h2 className='cart__title--h2'>Carrito de compras</h2>
            </div>
            <div className='cart__products'>
                {carrito.map((product) => <ItemCart id={product.id} product={product}/>)}
            </div>
            <div className='cart__total'>
                <p className='cart__total--p'>
                    Total compra  <span>$ARS {totalCompra()}</span>
                </p>
            </div>
        </>
    )
}

export default Cart