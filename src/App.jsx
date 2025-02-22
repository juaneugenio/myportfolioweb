/** @format */
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	useEffect(() => {
		// Inicializar el tema al cargar la aplicación
		const savedTheme =
			localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', savedTheme);
	}, []);

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
