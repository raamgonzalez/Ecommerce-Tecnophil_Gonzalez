import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import ItemCart from '../CartItem/ItemCart'
import './CartList.css'
import Form from '../Form/Form'

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
        <>  <div className='flex flex-row justify-start mx-16'>
                <section className='flex flex-col'>
                        <div className='cart__title'>
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
                </section>
                <Form/>
            </div>
        </>
    )
}

export default Cart