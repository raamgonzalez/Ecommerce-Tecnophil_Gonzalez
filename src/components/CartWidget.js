import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'


const CartWidget = (props) => {

    const { totalProductos } = useContext(CarritoContext)

    
    return (
        <>
            <div className='nav__link my-auto'>
                <Link to='/cart' activeClassName='active'><FontAwesomeIcon className="nav__cart" style = {{cursor:"pointer"}} icon={faCartShopping} /></Link>
            </div>
            <div className='counter__products'>
                <h3>{totalProductos()}</h3>
            </div>
            <div className='nav__cart text-neutral-100 text-2xl py-2 rounded-lg ml-2'></div>
        </>
    )
}

export default CartWidget