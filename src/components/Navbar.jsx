/** @format */

import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="menubar">
			<img className="nav-picture" src="src/assets/profile-pic.png" alt="profile picture" />
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
