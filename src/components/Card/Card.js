import React from "react";

const Card = (props) => {
  const {title, description, price, img, btnText, alt} = props
  return (
    <div className="max-w-2xl">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img src={img} className="rounded-t-lg p-8" alt={alt || "Imagen del producto"}/>
        </a>
        <div className="px-2 pb-3">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {title}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <h4 className="dark:text-white">{description}</h4>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a href="#" className= "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {btnText || "Agregar al Carrito"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
