/** @format */

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import App from "./App";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		// loader: rootLoader,
		// action: rootAction,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/about",
				element: <About />,
				// loader: contactLoader,
			},
			{
				path: "/projects",
				element: <Projects />,
				// loader: contactLoader,
			},
			{
				path: "/contact",
				element: <Contact />,
				// loader: contactLoader,
				// action: editAction,
				// errorElement: <ErrorPage />,
			},
		],
	},
]);

export default router;
