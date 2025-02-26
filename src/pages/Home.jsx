/** @format */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Avatar from '../assets/AvatarSVG.svg?react';
import { useEffect, useRef } from 'react';
import TechMarquee from '../components/TechMarquee/TechMarquee';

function Home({ variants }) {
	const avatarRef = useRef(null);

	useEffect(() => {
		const font = new FontFace('Moogalator', 'url(/src/assets/fonts/moogalator.woff2)');
		font.load().then(() => {
			document.fonts.add(font);
		});

		// Zoom effect relative to the scroll position
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const maxScroll = 1000;
			if (avatarRef.current) {
				const scale = Math.max(0.6, 1 - scrollPosition / maxScroll);
				avatarRef.current.style.transform = `scale(${scale})`;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial='hidden' // Set the initial state to variants.hidden
			animate='enter' // Animated state to variants.enter
			exit='exit' // Exit state (used later) to variants.exit
			transition={{ ease: 'linear', duration: 0.5, x: { duration: 1 } }}
		>
			<div className='hero-container'>
				<blockquote className='quote'>
					Hello, my <br />
					name is <strong>Juan</strong>
				</blockquote>
				<div className='hero-illustration' ref={avatarRef}>
					<Avatar className='hero-svg' />
				</div>
			</div>

			<TechMarquee />

			<div className='home-content'>
				<p>
					Frontend web developer with two years of hands-on experience in projects using React, JavaScript, HTML and
					CSS. I am passionate about creating applications with responsive design and intuitive and functional
					interfaces.
				</p>
				<p>
					I complement my frontend skills with basic backend knowledge (Node.js, Express, MongoDB) and I am constantly
					learning relevant technologies such as TypeScript and PostgreSQL.
				</p>
				<p>
					My experience as a B2B Technical Support Engineer has provided me with valuable skills in frontend and backend
					team collaboration, Git workflow management, deployment and code reviews.
				</p>
				<p>
					As a teammate, I am a curious, reflective, and honest person who thrives in environments that foster
					creativity, innovation, and mutual learning.
				</p>
			</div>
		</motion.section>
	);
}
Home.propTypes = { variants: PropTypes.object };
export default Home;
