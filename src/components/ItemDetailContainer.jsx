import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const { getProduct, productos, loading} = useFirebase()


    useEffect(() => {
        getProduct(id)
    
        return () => {
            
    }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    

    const filter = id? productos.filter((product) => product.id === id) : null

    return (
        <>
            <section className='products__container'>
                {loading && <Spinner/>}
                    {filter.map(({id, title, stock, description, descriptiondetail, category, price, offer, img}, index) => (
                        <div className='products__detail'>
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
            </section>
        </>
        
    )
}

export default ItemDetailContainer