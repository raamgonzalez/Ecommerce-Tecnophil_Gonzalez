import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Counter from '../Counter/Counter'

const CartWidget = () => {
    return (
        <div className='flex flex-col items-baseline my-auto'>
            <FontAwesomeIcon className="nav__cart text-slate-100 text-2xl px-4 py-2 rounded-lg ml-2" style = {{cursor:"pointer"}} icon={faCartShopping} />
        </div>
        )
}

export default CartWidget