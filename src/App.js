import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './components/Global/PageNotFound/Error404';
import Layout from './components/Global/Layout/Layout';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import CarritoContextProvider from './context/CarritoContext';
import Cart from './components/Cart/Cart';



function App() {
	return (

		<Router>
			<CarritoContextProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<ItemListContainer/>}/>
						<Route path='/category/:categoria' element={<ItemListContainer/>} />
						<Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
						<Route path='/cart' element={<Cart/>} />
						<Route path='*' element={<Error404/>} />
					</Routes>
				</Layout>
			</CarritoContextProvider>
		</Router>
	);
}

export default App;
