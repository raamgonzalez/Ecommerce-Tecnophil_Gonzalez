import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import useFirebase from '../../firebase/hook/useFirebase'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const {producto, getProduct} = useFirebase()
	const {productos} = useFirebase()  
    console.log("producto", producto)
    // const navigate = useNavigate()


    useEffect(() => {
        getProduct(id)
    
        return () => {
            
    }
    }, [])
    

    // const getCardsDetail = () =>{
	// 	const operacion = new Promise ((resolve) => {
	// 		setTimeout(() => {
	// 			resolve({
	// 				status:200,
	// 				data:config.cards,
	// 			})
	// 		},)
	// 	})
	
	// 	operacion.then((result, error) => {
	// 		setCardsDetail(result.data)
	// 	})
	// 	.catch((error) => {
	// 		alert("Algo salío mal!")
	// 	})
	// }

    const filter = id? productos.filter((product) => product.id === id) : null
    console.log("filtrado", filter)



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