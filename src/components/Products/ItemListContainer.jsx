import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import config from '../../config.json';
<<<<<<< HEAD:src/components/ItemListContainer/ItemListContainer.js
import Spinner from '../UI/Spinner/Spinner.js';
import Card from '../Card/Card.js';
import './ItemListContainer.css'
import '../Layout/Layout.css'
=======
import Item from './Item';
import Spinner from '../UI/Spinner/Spinner'
import './styles/ItemListContainer.css'
>>>>>>> itemlist:src/components/Products/ItemListContainer.jsx


const ItemListContainer = () => {

	const {categoria} = useParams()
    const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(false)

	const filter = categoria? cards.filter((product) => product.category === categoria ) : cards

	const getCards = () =>{
		setLoading(true)
		const operacion = new Promise ((resolve, reject) => {
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

<<<<<<< HEAD:src/components/ItemListContainer/ItemListContainer.js
    return (
    <div className="content__products"> 
        {cards.length < 1}
        <section className="flex flex-row flex-wrap justify-center mx-64 my-16 gap-6">
=======


    return ( 
	<section className='products'>
        {cards.length < 1}
        <div className="products__container flex flex-row flex-wrap justify-center mx-96 my-16 h-full">
>>>>>>> itemlist:src/components/Products/ItemListContainer.jsx
            {loading && <Spinner/>}
            {!loading && cards.length > 0 ? filter.map(({id, title, description, price, offer, img, alt, stock},index) => (
                <Item
                id={id}
                key={index}	
                title={title} 
                description={description} 
                price={price}
                img={img}
                alt={alt}
				stock={stock}
                offer={offer}
                />) 
                ) : !loading && cards.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
            }
<<<<<<< HEAD:src/components/ItemListContainer/ItemListContainer.js
        </section>
        <Title greeting= 'Listado de productos'/>
    </div>

=======
        </div>
        {/* <Title greeting= 'Listado de productos'/> */}
	</section>
>>>>>>> itemlist:src/components/Products/ItemListContainer.jsx
    )
}

export default ItemListContainer