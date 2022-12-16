import React from 'react'
import Title from '../Title/Title.js'
import { useEffect, useState } from 'react'
import config from '../../../config.json';
import Layout from '../Layout/Layout.js';
import Spinner from '../../UI/Spinner/Spinner.js';
import Card from '../Card/Card.js';


const ItemListContainer = () => {

    const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(false)

	const getCards = () =>{
		setLoading(true)
		const operacion = new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve({
					status:200,
					data:config.cards,
				})
			},3000)
		})
	
		operacion.then((result, error) => {
			setCards(result.data)
		})
		.catch((error) => {
			alert("Algo salío mal!")
		})
		.finally(() => {
			setLoading(false)
		})
	}

	useEffect(() => {
		getCards()

		return () => {
			setCards([])
		}
	}, [])

    return (
    <Layout className="App"> 
        {cards.length < 1}
        <section className="flex flex-row flex-wrap justify-center mx-64 my-16 h-full gap-6">
            {loading && <Spinner/>}
            {!loading && cards.length > 0 ? cards.map(({id, title, description, price, offer, img, alt},index) => (
                <Card
                id={id}
                key={index}	
                title={title} 
                description={description} 
                price={price}
                img={img}
                alt={alt}
                offer={offer}
                />) 
                ) : !loading && cards.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
            }
        </section>
        <Title greeting= 'Listado de productos'/>
    </Layout>

    )
}

export default ItemListContainer