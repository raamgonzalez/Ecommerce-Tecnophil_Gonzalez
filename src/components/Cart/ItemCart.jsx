
import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import Categorias from '../UI/Categorias'
import './ItemCart.css'

const ItemCart = (item) => {

	const {product:{id,quantity,item:{title, description, price, img, category, alt}}} = item

    const {borrarProducto} = useContext(CarritoContext)

    return (
        <>
			<div className='link__card'>
				<section className='box__card'>
					<div className='card__quantity flex flex-row'>
							<h4 className='card__stock'>{quantity}u</h4>
							<div className='detail__category'>{<Categorias category={category} />}</div>
					</div>  
					<div className='card'>
					{/* w-72 h-72  rounded-2xl p-4 overflow-clip */}
						<img src={img} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='card__header px-6 pb-3 '>
							<h3 className='text-slate-800 font-bold text-xl tracking-tight'>
								{title}
							</h3>
							<div className='card__main items-center mt-2.5 mb-5'>
								<p className='card__description'>{description}</p>
							</div>
							<div className='card_footer flex items-center justify-between'>
								<div className='card_footer--price'>
									<span className='text-xl font-bold text-slate-800'/>
									<p className='text__offer--item font-bold'>ARS ${price}</p>
									<p className='test'>${quantity * Math.round(price/1.10)}</p>
									<button className='btn__cart' onClick={() => borrarProducto(id)}>Eliminar</button>
								</div>
							</div>
						</div>	
					</div>	
				</section>
			</div>
        </>
    )
}

export default ItemCart