
import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './ItemCart.css'

const ItemCart = (item) => {

	const {product:{item:{title, price, img, alt,id, offer }, quantity}} = item
    const {borrarProducto} = useContext(CarritoContext)

    return (
        <>
			<div className='link__cart'>
				<section className='box__card'>
					<div className='card__quantity flex flex-row'>
							<h4 className='card__quantity--number'>{quantity}u</h4>
					</div>  
					<div className='card'>
						<img src={img} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='card__header px-6 pb-3 '>
							<h3 className='card__title text-slate-800 font-bold tracking-tight'>
								{title}
							</h3>
							<div className='card__footer'>
								<div className='card__footer--price'>
								{offer===true? <p className='text__offer--item font-bold'>ARS ${price}</p> : <p className='text__price--item font-bold'>ARS ${price}</p>}
									{/* <p className='text__offer--item font-bold'>Oferta ARS ${price}</p> */}
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