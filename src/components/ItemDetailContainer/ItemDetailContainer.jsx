import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const { getProduct, productos} = useFirebase()


    useEffect(() => {
        getProduct(id)
    
        return () => {
            
    }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    

    const filter = id? productos.filter((product) => product.id === id) : null

    return (
        <>
            {filter.map(({id, title, stock, description, descriptiondetail, category, price, offer, img}, index) => (
                <div className='products_detail'>
                    <ItemDetail
                    key={index}
                    id={id}
                    title={title} 
                    descriptiondetail={descriptiondetail}
                    description={description}
                    price={price}
                    img={img}
                    offer={offer}
                    category={category}
                    stock={stock}
                    />
                </div>
            ))}
        </>
    )
}

export default ItemDetailContainer