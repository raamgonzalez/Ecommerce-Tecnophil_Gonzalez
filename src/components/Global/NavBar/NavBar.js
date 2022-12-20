import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'

import './NavBar.css'


const NavBar = () => {
	return (
	<nav className="navbar flex flex-row justify-between w-full border-b border-gray-400">
		<div className="nav_div--title" id="brand ">
			<NavLink to='/'><img src='../logo.svg' alt='Logo de tecnophill' className='w-32 h-16'></img></NavLink>
			{/* <h1 className="title text-3xl text-slate-300 underline">tecnophil</h1> */}
		</div>
		<ul className="nav__list flex flex-row gap-4 my-auto" >
			{/* <li className="nav__link text-slate-300 py-2 rounded-lg mr-32"><a href="#">Home</a></li> */}
<<<<<<< HEAD:src/components/NavBar/NavBar.js
			{/*Agregar rutas faltantes de caterogias*/}
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to='/asds' activeClassName="active">Moviles</NavLink></li>
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to='/tvav' activeClassName="active">TV & AV</NavLink></li>
				<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><NavLink to='/noteboks' activeClassName="active">Notebooks</NavLink></li>
=======
				<li className="nav__link text-neutral-100 py-2 rounded-lg text-lg"><NavLink to='/category/moviles'>Moviles</NavLink></li>
				<li className="nav__link text-neutral-100 py-2 rounded-lg text-lg"><NavLink to='/category/tv'>TV & AV</NavLink></li>
				<li className="nav__link text-neutral-100 py-2 rounded-lg text-lg"><NavLink to='/category/notebooks'>Notebooks</NavLink></li>
>>>>>>> itemlist:src/components/Global/NavBar/NavBar.js
				<CartWidget/>
		</ul>
	</nav>
	)
}

export default NavBar