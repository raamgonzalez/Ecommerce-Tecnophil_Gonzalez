import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {

const { id, title, description, price, img, stock, offer } = props;

	return (
	<div className='link__card'>
		<section className='box__card'>
			<div className='card__stock stock'>
					<h4 className='stock__h4'>{stock}</h4>
			</div>
			<div className='card'>
				<img src={img} className='card__image' alt={title || 'Imagen del producto'}/>
				<div className='card__header'>
					<h3 className='card__title--item'>
						{title}
					</h3>
				</div>
				<div className='card__main'>
						<p className='card__description'>{description}</p>
					</div>
					<div className='card_footer'>
						<div className='card_footer--price'>
						{/* Math.round(price/1.10 */}
							{offer===true? <p className='card__footer--offer'>ARS ${Math.round(price/1.10)}</p> : <p className='card__footer--offer'>ARS ${price}</p>}
							{offer===true? <p className='card__footer--item'>ARS ${price}</p> : null} 
							
							{/* <p className='card__footer--item'>ARS ${price}</p> */}
						</div>
						<Link to={`/item/detail/${id}`} className= {offer===true? 'btn__cart btn__cart--offer' : 'btn__cart btn__cart--nooffer'}>
							<p className='btn__cart--p'>Ver detalle</p>
						</Link>
				</div>
			</div>	
		</section>
	</div>
	);
};

export default Item;
