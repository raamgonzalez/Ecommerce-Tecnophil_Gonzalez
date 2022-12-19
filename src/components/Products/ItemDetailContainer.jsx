import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import config from '../../config.json';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams()
    console.log(id)
    const [cards, setCards] = useState([])
    console.log(cards)



    const getCards = () =>{
		const operacion = new Promise ((resolve) => {
			setTimeout(() => {
				resolve({
					status:200,
					data:config.cards,
				})
			},500)
		})
	
		operacion.then((result, error) => {
			setCards(result.data)
		})
		.catch((error) => {
			alert("Algo salío mal!")
		})
	}

	useEffect(() => {
		getCards()

		return () => {
			setCards([])
		}
	}, [])

    const filter = id? cards.filter((product) => product.id == id) : null

    return (
        <>
            {filter.map(({id, title, descriptiondetail, category, price, offer, img, alt},index) => (
                <ItemDetail
                id={id}
                key={index}	
                title={title} 
                descriptiondetail={descriptiondetail} 
                price={price}
                img={img}
                alt={alt}
                offer={offer}
                category={category}
                />
            ))}

        </>
    )
}

export default ItemDetailContainer