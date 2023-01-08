import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../../firebase/hook/useFirebase'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const { getProduct} = useFirebase()
	const { productos } = useFirebase()  


    useEffect(() => {
        getProduct(id)
    
        return () => {
            
    }
    }, [])
    

    const filter = id? productos.filter((product) => product.id === id) : null

    return (
        <>
            {filter.map(({id, title, stock, description, descriptiondetail, category, price, offer, img}) => (
                <div className='products_detail'>
                    <ItemDetail
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