/** @format */

import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './HamburgerMenu.css';

const HamburgerMenu = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button className={`hamburger-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label='Toggle menu'>
				{isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
			</button>

			<div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

			<nav className={`mobile-menu ${isOpen ? 'active' : ''}`}>{children}</nav>
		</>
	);
};

export default HamburgerMenu;
