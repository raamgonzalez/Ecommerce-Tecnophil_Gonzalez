import React from 'react'
import './styles/ItemDetail.css'
import Categorias from '../UI/Categorias'

const ItemDetail = (item) => {

	const { title,description, descriptiondetail,category, price, img, alt, offer } = item
    // const { title,description, descriptiondetail,category, price, img, alt, offer } = props

    return (
		<section className="detail__box flex">
				<img className='detail__img' src={img} alt={alt || "Imagen del producto"}/>
			<div className='detail__description description'>
				<ul className='description__main main'>
					{/*Agregar icono para cada categoria*/}
					<li className='detail__title '> 
						<h3>{title}</h3>
						<span className='detail__category'>{<Categorias category={category} />}</span>
					</li>
					<li className='detail__body'>
						<p className=''>{description}</p><br/>
						<h3 className='tracking-tighter'>Descripción</h3>
						<p>{descriptiondetail}</p>
					</li>
					<li className='detail__price'>
						<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail font-bold">ARS ${price}</p> : null}</li>
					<div className='detail__cart'>
						<a className= {offer===true? 'btn__cart--detail btn__cart--offer' : 'btn__cart--detail btn__cart--nooffer'}>
							Agregar al Carrito
						</a>
						<div className='detail__contador'>
							<button className='counter__b'> - </button>
							<h4 className='counter__h'>1</h4>
							<button className='counter__b'> + </button>
						</div>
					</div>
				</ul>
			</div> 
		</section>
	
    )
}

export default ItemDetail