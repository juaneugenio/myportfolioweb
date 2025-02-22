/** @format */

import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import App from './App';
import { pageTransition } from './config/animations';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home variants={pageTransition} />,
			},
			{
				path: 'about',
				element: <About variants={pageTransition} />,
			},
			{
				path: 'projects',
				element: <Projects variants={pageTransition} />,
			},
			{
				path: 'contact',
				element: <Contact variants={pageTransition} />,
			},
			{
				// Redirecting all unknown routes to the home page
				path: '*',
				element: <Navigate to='/' replace />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
