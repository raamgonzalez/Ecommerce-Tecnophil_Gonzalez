import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Checkout from './components/Checkout/Checkout';
import Error404 from './components/404/Error404';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'




function App(props) {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<ItemListContainer/>}/>
				<Route path='/category/:id' element={<ItemListContainer/>} />
				<Route path='/item/detail/:id' element={<ItemDetailsContainer/>} />
				<Route path='/cart' element={<CartWidget/>} />
				<Route path='/checkout' element={<Checkout/>} />
				<Route path='*' element={<Error404/>} />
			</Routes>
		</Router>
	);
}

export default App;
