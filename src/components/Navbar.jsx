/** @format */

import { Link } from "react-router-dom";
import { useState } from "react";
import useSound from "use-sound";
import soundClick from "../assets/bubble-click.wav";

// See this, for Info about useSound: https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/#rising-pitch-11

function Navbar() {
	const [isHovering, setIsHovering] = useState(false);
	const [play] = useSound(soundClick, { volume: 0.1 });

	console.log("%c 👉 Line-12", "font-size:13px; background:#993441; color:#ffb8b1;", isHovering);
	return (
		<nav className="menubar">
			<img className="nav-picture" src="src/assets/profile-pic.png" alt="profile picture" />
			<Link
				to="/"
				className="menulink"
				onMouseEnter={() => {
					setIsHovering(true);
					play();
				}}
			>
				home
			</Link>
			<Link
				to="/projects"
				className="menulink"
				onMouseEnter={() => {
					setIsHovering(true);
					play();
				}}
			>
				projects
			</Link>
			<Link
				to="/about"
				className="menulink"
				onMouseEnter={() => {
					setIsHovering(true);
					play();
				}}
			>
				about
			</Link>
			<Link
				to="/contact"
				className="menulink"
				onMouseEnter={() => {
					setIsHovering(true);
					play();
				}}
			>
				contact
			</Link>
		</nav>
	);
}

export default Navbar;
