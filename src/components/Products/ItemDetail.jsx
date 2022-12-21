import React from 'react'
import './styles/ItemDetail.css'

const ItemDetail = (item) => {

	const { title,description, descriptiondetail,category, price, img, alt, offer } = item
    // const { title,description, descriptiondetail,category, price, img, alt, offer } = props

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
						<div className='main__counter counter'>
							<button className='counter__button'> - </button>
							<h4 className='counter__p'>1</h4>
							<button className='counter__button'> + </button>
						</div>
					</div>
				</ul>
			</div> 
		</section>
	
    )
}

export default ItemDetail