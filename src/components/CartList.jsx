import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'
import ItemCart from './ItemCart'
import Form from './Form'

const Cart = (item) => {
    const{carrito, totalCompra} = useContext(CarritoContext)

    
    if (carrito.length === 0) {
        return(
            <>
            <div className='cart__empty empty'>
                <h2 className='empty__title'>No hay productos en el carrito</h2>
                <Link className='btn__cart' to='/'>Volver al Home</Link>
            </div>
            </>
        );
    }

    return (
        <>  
            <div className='container__cart cart'>
                <section className='cart__main'>
                        <h2 className='cart__h2'>Carrito de compras</h2>
                        <div className='cart__products'>
                            {carrito.map((product) => <ItemCart  product={product} key={product.id}/>)}
                            {/* id={product.id} */}
                        </div>
                </section>
                <section className='container__form'>
                    <h4 className='form__title'>Formulario de compra</h4>
                    <div className='cart__total'>
                        <p className='cart__total--p'>
                            Total compra  <span>$ARS {totalCompra()}</span>
                        </p>
                    </div>
                    <Form/>
                </section>
            </div>
        </>
    )
}

export default Cart