import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Error404 from '../views/Error/Error404'
import Cart from '../views/Cart/Cart'
import Product from '../views/Product/Product'

const Rutas = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/category/:categoria' element={<Category/>} />
                <Route path='/item/detail/:id' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
    )
}

export default Rutas