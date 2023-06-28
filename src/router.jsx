/** @format */

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import App from "./App";

// From framer-motion config passed as props
const variants = {
	hidden: { opacity: 0, x: -1, y: 2 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		// loader: rootLoader,
		// action: rootAction,
		children: [
			{ index: true, element: <Home variants={variants} /> },
			{
				path: "/about",
				element: <About variants={variants} />,
				// loader: contactLoader,
			},
			{
				path: "/projects",
				element: <Projects variants={variants} />,
				// loader: contactLoader,
			},
			{
				path: "/contact",
				element: <Contact variants={variants} />,
				// loader: contactLoader,
				// action: editAction,
				// errorElement: <ErrorPage />,
			},
		],
	},
]);

export default router;
