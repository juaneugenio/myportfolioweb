/** @format */

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<>
			<div className='horizontal-border-top' />
			<div className='app-container'>
				<header>
					<Navbar />
				</header>
				<main className='content'>
					<Outlet />
				</main>
			</div>
			<div className='horizontal-border-bottom' />
		</>
	);
}

export default App;
