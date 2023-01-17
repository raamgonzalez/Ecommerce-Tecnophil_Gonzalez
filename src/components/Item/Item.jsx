import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {

const { id, title, description, price, img, stock, offer } = props;

	return (
	<div className='link__card'>
		<section className='box__card'>
			<div className='card__stock--container'>
						<h4 className='card__stock'>{stock}</h4>
			</div>
			<div className='card'>
				<img src={img} className='card__image' alt={title || 'Imagen del producto'}/>
				<div className='card__header px-6 pb-3 '>
					<h3 className='card__title--item text-slate-800'>
						{title}
					</h3>
					<div className='card__main items-center mt-2.5 mb-5'>
						<p className='card__description'>{description}</p>
					</div>
					<div className='card_footer flex items-center justify-between'>
						<div className='card_footer--price'>
							<span className='text-xl font-bold text-slate-800'/>
							<p className='text__offer--price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className='text__offer--item font-bold'>ARS ${price}</p> : null}
						</div>
						{/*Cambiar si corresponde por Ver detalle*/}
						<Link to={`/item/detail/${id}`} className= {offer===true? 'btn__cart btn__cart--offer' : 'btn__cart btn__cart--nooffer'}>
							<p className='btn__cart--p'>Ver detalle</p>
						</Link>
					</div>
				</div>	
			</div>	
		</section>
	</div>
	);
};

export default Item;
