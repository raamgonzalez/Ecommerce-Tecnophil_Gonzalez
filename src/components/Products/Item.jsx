import React from "react";
import { Link } from "react-router-dom";
import './styles/Item.css'

const Item = (props) => {
const { id, title, description, price, img, alt, offer } = props;

	return (
	<Link to={`/item/detail/${id}`}>
		<section className="box__card  first-line:max-w-2xl flex flex-row">
			<div className="card shadow-2xl shadow-slate-900  flex flex-col justify-center align-middle items-center gap-1 bg-white shadow-md rounded-lg max-w-sm dark:bg-rose-900 dark:border-gray-700">
				<img src={img} className="card__image w-72 h-72  rounded-2xl p-4 overflow-clip" alt={alt || "Imagen del producto"}/>
				<div className="px-2 pb-3">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
						{title}
					</h3>
					<div className="flex items-center mt-2.5 mb-5">
						<h4 className="text-slate-300">{description}</h4>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col">
							<span className="text-xl font-bold text-gray-900 dark:text-white">
							${price}</span>
							{offer===true? <p className="text-l font-bold text-gray-900 dark:text-yellow-300 text-right">Oferta!</p> : null}
						</div>
						<a className= {offer===true? 'btn_text cursor-pointer text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800  hover:animate-bounce ' : 'btn_text cursor-pointer  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}>
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
