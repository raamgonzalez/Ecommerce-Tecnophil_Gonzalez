import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import '../CartWidget/CartWidget.css'    


const CartWidget = (props) => {

    const {carrito, totalProductos} = useContext(CarritoContext)
    console.log("carrito en cartwidget", carrito)

    
    return (
    <>
        <div className='nav__link flex flex-col items-baseline my-auto'>
            <Link to='/cart' activeClassName='active'><FontAwesomeIcon className="nav__cart text-neutral-100 text-2xl py-2 rounded-lg ml-2" style = {{cursor:"pointer"}} icon={faCartShopping} /></Link>
        </div>
        <div className='counter nav__link'>
            <h3>{totalProductos()}</h3>
        </div>
    </>
        )
}

export default CartWidget