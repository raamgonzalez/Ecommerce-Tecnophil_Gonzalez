import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/Products/ItemListContainer';
import CartWidget from './components/Global/NavBar/CartWidget/CartWidget';
import Error404 from './components/Global/PageNotFound/Error404';
import ItemDetailsContainer from './components/Products/ItemDetailContainer'
import Home from './components/Home/Home';
import Layout from './components/Global/Layout/Layout';





function App(props) {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/category/:id' element={<ItemListContainer/>} />
					<Route path='/item/detail/:id' element={<ItemDetailsContainer/>} />
					<Route path='/cart' element={<CartWidget/>} />
					<Route path='*' element={<Error404/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
