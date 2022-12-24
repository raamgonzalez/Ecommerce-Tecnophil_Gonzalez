import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../../../../context/CarritoContext'
import '../CartWidget/CartWidget.css'    


const CartWidget = () => {


    const {carrito} = useContext(CarritoContext)
    
    return (
    <>
        <div className='flex flex-col items-baseline my-auto'>
            <NavLink to='/cart'><FontAwesomeIcon className="nav__cart text-neutral-100 text-2xl px-4 py-2 rounded-lg ml-2" style = {{cursor:"pointer"}} icon={faCartShopping} /></NavLink>
        </div>
        <div className='counter'>
                <h3>{carrito.length}</h3>
            </div>
    </>
        )
}

export default CartWidget