
import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './ItemCart.css'

const ItemCart = (item) => {

    const {product:{id,quantity,item:{title, description, price, img}}} = item

    console.log(title)
    const {borrarProducto} = useContext(CarritoContext)

    return (
        <div>
            <img src={img} alt={title} />
            <div>
                <h2 className='test'>{title}</h2>
                <p className='test'>{description}</p>
                <p className='test'>{price}</p>
                <p className='test'>${quantity * price}</p>
                <button className='btn__cart' onClick={() => borrarProducto(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart