import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


const NavBar = (props) => {
	
	return (
	<nav className="navbar">
		<div className="navbar__brand">
			<NavLink to='/'><img src='../logo.svg' alt='Logo de tecnophill' className='navbar__img'></img></NavLink>
		</div>
		<ul className="navbar__list">
				<li className="navbar__link"><NavLink to='/category/moviles' activeClassName='active'>Moviles</NavLink></li>
				<li className="navbar__link"><NavLink to='/category/tv' activeClassName='active'>TV & AV</NavLink></li>
				<li className="navbar__link"><NavLink to='/category/notebooks' activeClassName='active'>Notebooks</NavLink></li>
				<CartWidget/>
		</ul>
	</nav>
	)
}

export default NavBar