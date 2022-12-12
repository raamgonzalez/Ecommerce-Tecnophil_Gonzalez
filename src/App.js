import './App.css';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import config from './config.json';
import { useState, useEffect } from "react";
import Spinner from './components/Spinner/Spinner';
import Counter from './components/Counter/Counter';



function App(props) {

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
			console.log(error, "ERROR EN EL CATCH");
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
			<section className="flex flex-row flex-wrap justify-around mx-64 my-16 h-full">
				{loading && <Spinner/>}
				{!loading && cards.length > 0 ? cards.map(({id, title, description, price, btnText, img, alt},index) => (
					<Card
					id={id}
					key={index}	
					title={title} 
					description={description} 
					price={price}
					img={img}
					alt={alt}
					/>) 
					) : !loading && cards.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
				}
			</section>
			<ItemListContainer/>
		</Layout>
	);
}

export default App;
