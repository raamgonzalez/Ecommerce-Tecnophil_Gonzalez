import './App.css';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';

const cards = [
	{
		title: 'Apple Macbook Pro',	
		description: 'This is a description of the product',
		price: 340000,
		img: "/media/appleMacbookPro.jpg",
		alt: "Apple Macbook Pro",
	},
	{
		title: 'Samsung TV 55"',
		description: 'This is a description of the product',
		price: 102000,
		btnText: 'Oferta!',
		img: "/media/samsungTV55.jpg",
		alt: "Samsung TV 55",
	},
	{		
		title: 'Celular Xiaomi 64GB',	
		description: 'This is a description of the product',
		price: 80000,
		btnText: '',
		img: "./media/celularXiaomi.jpg",
		alt: ""
	},
]

function App(props) {
	return (
		<Layout className="App">
			<main className="flex flex-row flex-wrap justify-around gap-4 mx-64 my-16">
				{cards.map(({title, description, price, btnText, img, alt},index) => (
				<Card
				key={index}	
				title={title} 
				description={description} 
				price={price}
				//Solucionar import de imagenes
				img={img}
				alt={alt}
				/>))}
			
			</main>
			<ItemListContainer/>
		</Layout>
	);
}

export default App;
