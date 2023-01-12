import './App.css';
import Layout from './layout/Layout'
import CarritoContextProvider from './context/CarritoContext';
import Rutas from './rutas/Rutas';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
	return (
		<>
			<Router>
				<CarritoContextProvider>
					<Layout>
						<Rutas/>
					</Layout>
				</CarritoContextProvider>
			</Router>
		</>
	);
}

export default App;
