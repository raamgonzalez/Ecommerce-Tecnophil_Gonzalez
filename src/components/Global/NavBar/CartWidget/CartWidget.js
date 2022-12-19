import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
            <div className='flex flex-col items-baseline my-auto'>
                <NavLink to='/cart'><FontAwesomeIcon className="nav__cart text-neutral-100 text-2xl px-4 py-2 rounded-lg ml-2" style = {{cursor:"pointer"}} icon={faCartShopping} /></NavLink>
            </div>
        )
}

export default CartWidget