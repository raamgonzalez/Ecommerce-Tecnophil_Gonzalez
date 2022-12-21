import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import config from '../../config.json';
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [cardsdetail, setCardsDetail] = useState([])



    const getCardsDetail = () =>{
		const operacion = new Promise ((resolve) => {
			setTimeout(() => {
				resolve({
					status:200,
					data:config.cards,
				})
			},)
		})
	
		operacion.then((result, error) => {
			setCardsDetail(result.data)
		})
		.catch((error) => {
			alert("Algo salío mal!")
		})
	}

	useEffect(() => {
		getCardsDetail()

		return () => {
			setCardsDetail([])
		}
	}, [id])

    const filter = id? cardsdetail.filter((product) => product.id === Number(id)) : null


    return (
        <>
            {filter.map(({id, title, description, descriptiondetail, category, price, offer, img, alt},index) => (
                <div className='products_detail'>
                    <ItemDetail
                    id={id}
                    key={index}	
                    title={title} 
                    descriptiondetail={descriptiondetail} 
                    description={description}
                    price={price}
                    img={img}
                    alt={alt}
                    offer={offer}
                    category={category}
                    />
                </div>
            ))}

        </>
    )
}

export default ItemDetailContainer