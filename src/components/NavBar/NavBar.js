import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Counter from '../Counter/Counter'
import './NavBar.css'

const NavBar = () => {
	return (
	<nav className="nav flex flex-row justify-between p-4 mx-64 border-b border-gray-400">
		<div className="nav_div--title" id="brand ">
			<h1 className="title text-3xl text-slate-300 underline">tecnophil</h1>
		</div>
		<ul className="nav__list flex flex-row justify-between" >
			<li className="nav__link text-slate-300 px-4 py-2 rounded-lg mx-2"><a href="#">Notebooks</a></li>
			<li className="nav__link text-slate-300  px-4 py-2 rounded-lg mx-2"><a href="#">Moviles</a></li>
			<li className="nav__link text-slate-300  px-4 py-2 rounded-lg mx-2"><a href="#">TV & AV</a></li>
			<li className="nav__link text-slate-300  px-4 py-2 rounded-lg ml-2"><a href="#">Pantallas </a></li>
			<CartWidget/>
			<Counter/>
		</ul>
	</nav>
	)
}

export default NavBar