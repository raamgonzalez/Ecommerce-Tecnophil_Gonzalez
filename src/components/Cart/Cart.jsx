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
                <h2 className='test'>No hay productos en el carrito</h2>
                <Link className='btn__cart' to='/'>Volver al Home</Link>
            </>
        );
    }

    return (
        <>  
            <div className='cart__products'>
                <h2 className='test'>Carrito de compras</h2>
                {carrito.map((product) => <ItemCart id={product.id} product={product}/>)}
            </div>
                <p>
                    total: ${totalCompra}
                </p>  
        </>
    )
}

export default Cart