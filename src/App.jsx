/** @format */

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<div className='app-container'>
			<header>
				<Navbar />
			</header>
			<main className='content'>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
