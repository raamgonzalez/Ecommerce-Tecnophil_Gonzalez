import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartWidget from './components/Global/NavBar/CartWidget/CartWidget';
import Error404 from './components/Global/PageNotFound/Error404';
import Layout from './components/Global/Layout/Layout';
import ItemListContainer from './components/Products/ItemListContainer';

import ItemDetailContainer from './components/Products/ItemDetailContainer';





function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<ItemListContainer/>}/>
					<Route path='/category/:categoria' element={<ItemListContainer/>} />
					<Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
					<Route path='/cart' element={<CartWidget/>} />
					<Route path='*' element={<Error404/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
