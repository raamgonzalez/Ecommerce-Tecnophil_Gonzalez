import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Checkout from './components/Checkout/Checkout';
import Error404 from './components/404/Error404';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import Layout from './components/Layout/Layout';
=======
import CartWidget from './components/Global/NavBar/CartWidget/CartWidget';
import Error404 from './components/Global/PageNotFound/Error404';
import Layout from './components/Global/Layout/Layout';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
>>>>>>> itemlist






function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<ItemListContainer/>}/>
<<<<<<< HEAD
					<Route path='/category/:id' element={<ItemListContainer/>} />
					<Route path='/item/detail/:id' element={<ItemDetailsContainer/>} />
					<Route path='/cart' element={<CartWidget/>} />
					<Route path='/checkout' element={<Checkout/>} />
=======
					<Route path='/category/:categoria' element={<ItemListContainer/>} />
					<Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
					<Route path='/cart' element={<CartWidget/>} />
>>>>>>> itemlist
					<Route path='*' element={<Error404/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
