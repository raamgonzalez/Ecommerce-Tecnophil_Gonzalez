import React from 'react'
import './styles/ItemDetail.css'

const ItemDetail = (props) => {

    const {id, title, descriptiondetail,category, price, img, alt, offer } = props

    return (
		<section className="detail__box flex">
				<img className='detail__img' src={img} alt={alt || "Imagen del producto"}/>
			<div className='detail__description description'>
				<ul className='description__main main'>
					<li className='main__title'> {title}</li>
					<li className='main__body'>
						<h3 className='tracking-tighter'>Descripción</h3>
						<p>{descriptiondetail}</p>
					</li>
					<li className='main__price'>
						<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail font-bold">ARS ${price}</p> : null}</li>
					<li>{id}</li>
					<li>{category}</li>
				</ul>
			</div> 
		</section>
	
    )
}

export default ItemDetail