import React from "react";
import './Card.css'


const Card = (props) => {
  const {title, description, price, img, btnText, alt} = props
  return (
    <div className="box__card first-line:max-w-2xl flex flex-row">
      <div className="card shadow-slate-900 shadow-2xl flex flex-col justify-center align-middle items-center bg-white shadow-md rounded-lg max-w-sm dark:bg-rose-900 dark:border-gray-700">
          <img src={img} className="card__image w-72 h-72  rounded-2xl p-8 overflow-clip" alt={alt || "Imagen del producto"}/>
        <div className="px-2 pb-3">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {title}
            </h3>
          <div className="flex items-center mt-2.5 mb-5">
            <h4 className="text-slate-300">{description}</h4>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a className="btn_text cursor-pointer  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {btnText || "Agregar al Carrito"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
