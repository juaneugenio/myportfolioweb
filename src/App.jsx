/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { motion } from "framer-motion";
const variants = {
	hidden: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
};
function App() {
	return (
		<div className="app-container">
			<header>
				<Navbar />
			</header>
			<motion.main
				className="content"
				variants={variants} // Pass the variant object into Framer Motion
				initial="hidden" // Set the initial state to variants.hidden
				animate="enter" // Animated state to variants.enter
				exit="exit" // Exit state (used later) to variants.exit
				transition={{ ease: "linear", delay: 0.3, duration: 1, x: { duration: 1 } }}
			>
				<Outlet variants={variants} />
			</motion.main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
