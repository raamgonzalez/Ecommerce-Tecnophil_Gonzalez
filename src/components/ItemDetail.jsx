import Categorias from './Categorias'
import ItemCount from './ItemCount'
import 'react-toastify/dist/ReactToastify.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemDetail = (item) => {
	const { title, description, descriptiondetail,category, price, img, offer } = item

    return (
		<>
			<section className="detail__box">
					<Link to='/' className='detail__volver--link'><FontAwesomeIcon className="detail__icon" style = {{cursor:"pointer"}} icon={faArrowLeft} /></Link>
					<img className='detail__img' src={img} alt={title || "Imagen del producto"}/>
				<div className='detail__description description'>
					<ul className='description__main main'>
						<li className='detail__title'> 
							<h3>{title}</h3>
							<span className='detail__category'>{<Categorias category={category} />}</span>
						</li>
						<li className='detail__body body'>
							<p className='body__description'>{description}</p><br/>
							<h3 className='body__h3'>Descripción</h3>
							<p className='body__descriptiondetail'>{descriptiondetail}</p>
						</li>
						<li className='detail__price'>
							<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail">ARS ${price}</p> : null}
						</li>
					</ul>
						<ItemCount item={item}/>
				</div>
			</section>
		</>
    )
}

export default ItemDetail