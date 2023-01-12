import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Cart from '../components/CartList/CartList'
import Error404 from '../components/Global/PageNotFound/Error404'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


const Rutas = () => {
    return (
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoria' element={<ItemListContainer/>} />
                <Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
    )
}

export default Rutas