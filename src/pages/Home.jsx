/** @format */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Avatar from '../assets/AvatarSVG.svg?react';
import { useEffect } from 'react';

function Home({ variants }) {
	useEffect(() => {
		const font = new FontFace('Moogalator', 'url(/src/assets/fonts/moogalator.woff2)');
		font.load().then(() => {
			document.fonts.add(font);
		});
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
				<div className='hero-illustration'>
					<Avatar className='hero-svg' />
				</div>
			</div>
			<div className='home-content'>
				<p>
					My journey into the world of web development began in 2021, when I decided to pivot my career and immerse
					myself in the MERN universe. Since then, I have maintained a continuous and steady focus on growing as a
					developer.
				</p>
				<p>
					Prior to this, I was a Spanish teacher at several prominent institutions in Germany. Now, instead of
					explaining grammar, I dedicate myself to creating applications that combine intuitive design with
					functionality, as I am especially motivated by the knowledge that development can improve the digital
					experience for others.
				</p>
				<p>
					2023 was an interesting year, as it marked the start of my professional career as a technical support
					engineer, where I learned a great deal about teamwork and customer service. In this context, helping clients
					or users resolve their technical issues is not so different from explaining the uses of the subjunctive to my
					former students 😅.
				</p>
				<p>
					I find satisfaction in working with people who value teaching and learning, and who consider not only the
					company's objectives but also individual professional and personal development. As a teammate, I am a curious,
					reflective, and honest person who thrives in environments that foster creativity, innovation, and mutual
					learning.
				</p>
				<p>
					If my profile interests you, please don't hesitate to reach out. I am open to new opportunities and
					professional connections.
				</p>
			</div>
		</motion.section>
	);
}
Home.propTypes = { variants: PropTypes.object };
export default Home;
