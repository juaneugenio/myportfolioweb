/** @format */

import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import soundClick from "../assets/bubble-click.wav";
import profilPict from "../assets/profile-pic.png";

// See for Info about useSound: https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/#rising-pitch-11

function Navbar() {
	const [play] = useSound(soundClick, { volume: 0.1 });

	const handleMouseEnter = () => {
		play();
	};

	const menuLinks = [
		{ name: "home", path: "/" },
		{ name: "projects", path: "/projects" },
		{ name: "career", path: "/about" },
		{ name: "contact", path: "/contact" },
	];

	return (
		<nav className="menubar">
			<img className="nav-picture" src={profilPict} alt="profile picture" />
			{menuLinks.map((item) => (
				<NavLink key={item.path} to={item.path} className="menulink" onMouseEnter={handleMouseEnter}>
					{item.name}
				</NavLink>
			))}
		</nav>
	);
}

export default Navbar;
