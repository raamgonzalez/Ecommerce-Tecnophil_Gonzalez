import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import config from '../../config.json';
import Item from './Item';
import useFirebase from '../../firebase/hook/useFirebase';

const ItemList = () => {


    // const [cards, setCards] = useState([])
	const {categoria} = useParams()
	const [loading, setLoading] = useState(false)

	const {productos} = useFirebase()  

	const filter = categoria? productos.filter((product) => product.category === categoria ) : productos

	// const getCards = () =>{
	// 	setLoading(true)
	// 	const operacion = new Promise ((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve({
	// 				status:200,
	// 				data:config.cards,
	// 			})
	// 		},500)
	// 	})
	
	// 	operacion.then((result, error) => {
	// 		setCards(result.data)
	// 	})
	// 	.catch((error) => {
	// 		alert("Algo salío mal!")
	// 	})
	// 	.finally(() => {
	// 		setLoading(false)
	// 	})
	// }

	// useEffect(() => {
	// 	getCards()

	// 	return () => {
	// 		setCards([])
	// 	}
	// }, [])


    return ( 
    <section className='products'>
        {productos.length < 1}
        <div className="products__container">
            {loading && <Spinner/>}
            { !loading &&  productos.length > 0 ? filter.map(({id, title, description, price, offer, img, alt, stock},index) => (
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
                ) : !loading && productos.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
            }
        </div>
        {/* <Title greeting= 'Listado de productos'/> */}
	</section>
    )
}

export default ItemList