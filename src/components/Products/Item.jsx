import React from "react";
import { Link } from "react-router-dom";
import './styles/Item.css'

const Item = (props) => {
const { id, title, description, price, img, alt, offer } = props;

	return (
	<Link to={`/item/detail/${id}`}>
		<section className="box__card  first-line:max-w-2xl flex flex-row">
			<div className="card shadow-2xl shadow-slate-900  flex flex-col justify-center align-middle items-center gap-1 bg-white shadow-md rounded-lg max-w-sm dark:border-gray-700">
				<img src={img} className="card__image w-72 h-72  rounded-2xl p-4 overflow-clip" alt={alt || "Imagen del producto"}/>
				<div className="card__footer px-6 pb-3 ">
					<h3 className="text-slate-800 font-semibold text-xl tracking-tight">
						{title}
					</h3>
					<div className="flex items-center mt-2.5 mb-5">
						<h4 className="text-slate-800">{description}</h4>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col">
							<span className="text-xl font-bold text-slate-800"/>
							<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail font-bold">ARS ${price}</p> : null}
						</div>
						{/*Editar las clases y manejar por css*/}
						<a className= {offer===true? 'btn__cart btn__cart--offer hover:animate-bounce' : 'btn__cart btn__cart--nooffer'}>
							Agregar al Carrito
						</a>
					</div>
				</div>
			</div>
		</section>
	</Link>
	);
};

export default Item;
