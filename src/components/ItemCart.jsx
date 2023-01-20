
import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

const ItemCart = (item) => {

	const {product:{item:{title, price, img, alt,id, offer }, quantity}} = item
    const {borrarProducto} = useContext(CarritoContext)

    return (
        <>
			<div className='link__cart'>
				<section className='box__cart'>
					<div className='cart__quantity'>
							<h4 className='cart__quantity--number'>{quantity}u</h4>
					</div>  
					<div className='card'>
						<img src={img} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='cart__header'>
							<h3 className='cart__title'>
								{title}
							</h3>
							<div className='cart__footer'>
								<div className='cart__footer--price'>
									{offer===true? <p className='text__offer--item'>ARS ${Math.round(price/1.10)} unidad</p> : <p className='text__price--item'>ARS ${price} unidad</p>}
									{offer ===true? <p className='text__offer--quantity'>Total <span>ARS ${quantity * Math.round(price/1.10)}</span></p>: <p className='text__offer--quantity'>Total <span>ARS ${quantity * price}</span></p>}
								</div>
								<button className='btn__cart btn__cart--delete ' onClick={() => borrarProducto(id)}>Eliminar</button>
							</div>
						</div>	
					</div>	
				</section>
			</div>
        </>
    )
}

export default ItemCart