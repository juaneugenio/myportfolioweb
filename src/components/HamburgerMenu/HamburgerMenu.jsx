/** @format */
import { updateCursorPosition } from '../../utils/cursorShape';
import React, { useState, useEffect } from 'react';
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

	const toggleMenu = (e) => {
		updateCursorPosition(e);
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

    const handleNavigation = (e) => {
			const isNavLink = e.target.closest('.menulink');
			const isThemeToggle = e.target.closest('.theme-toggle');

			if (isNavLink || isThemeToggle) {
				closeMenu();
			}
		};

	return (
		<>
			<button
				className={`hamburger-btn hoverable ${isOpen ? 'active' : ''}` }
				onClick={toggleMenu}
				aria-label='Toggle menu'
				onMouseMove={(e) => updateCursorPosition(e)}
			>
				{isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
			</button>

			<div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

			<nav className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={handleNavigation}>
				{children}
			</nav>
		</>
	);
};

export default HamburgerMenu;
