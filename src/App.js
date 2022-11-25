import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

function App() {
	return (
		<div className="App">
				<NavBar/>
				<main className="flex flex-row flex-wrap justify-start gap-6 mx-64 my-16">
					<Card/>
					<Card/>
					<Card/>
				</main>
		</div>
	);
}

export default App;
