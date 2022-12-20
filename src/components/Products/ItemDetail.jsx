import React from 'react'

import './styles/ItemDetail.css'

const ItemDetail = (props) => {

    const {id, title,description, descriptiondetail,category, price, img, alt, offer } = props

    return (
		<section className="detail__box flex">
				<img className='detail__img' src={img} alt={alt || "Imagen del producto"}/>
			<div className='detail__description description'>
				<ul className='description__main main'>
					{/*Agregar icono para cada categoria*/}
					<li className='main__title '> {title} <span className='main__category'>{category.toUpperCase()}</span></li>
					<li className='main__body'>
						<p className=''>{description}</p><br/>
						<h3 className='tracking-tighter'>Descripción</h3>
						<p>{descriptiondetail}</p>
					</li>
					<li className='main__price'>
						<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail font-bold">ARS ${price}</p> : null}</li>
					<div className='main__cart'>
						<a className= {offer===true? 'btn__cart--detail btn__cart--offer hover:animate-bounce' : 'btn__cart--detail btn__cart--nooffer'}>
							Agregar al Carrito
						</a>
						<div>
							
						</div>
					</div>
				</ul>
			</div> 
		</section>
	
    )
}

export default ItemDetail