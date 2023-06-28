/** @format */

import { Link } from "react-router-dom";

/** @format */
Link;
function Navbar() {
	return (
		<nav className="menubar">
			<Link to="/" className="menulink">
				home
			</Link>
			<Link to="/projects" className="menulink">
				projects
			</Link>
			<Link to="/about" className="menulink">
				about
			</Link>
			<Link to="/contact" className="menulink">
				contact
			</Link>
		</nav>
	);
}

export default Navbar;
