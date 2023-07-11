/** @format */
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Home({ variants }) {
	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<blockquote className="quote">
				👋🏼 Hello! <br />I am <strong>Juan</strong>, welcome to my Portfolio
				{/* <q>Debugging the present to develop the future</q> */}
			</blockquote>
			<div className="home-content">
				<p>
					My journey as a developer began back in 2021, when I dived into the exciting realm of the Javascript MERN
					stack. Since then, I have been constantly improving my functional and Obejct-oriented programming skills,
					focusing on projects with ReactJS and responsive web design. On the backend, I'm comfortable with Express,
					Node, MongoDB, REST API and server-side rendering.
				</p>
				<p>
					But technical knowledge alone is not enough, is it? During my career as a Spanish teacher, I developed the
					ability to listen carefully to the learning needs of my students and to offer effective solutions to the
					challenges they face in their learning process. <br /> I am confident that the combination of my technical and
					interpersonal skills will help me to work effectively with both clients and development teams.
				</p>
				<p>
					My immediate goal as a career move is to secure a full-time position in web development, ideally within a
					dynamic team that appreciates my communication, analytical and problem-solving skills. <br />
					If you are interested, please do not hesitate to contact me to provide you with more information on how my
					qualifications can have a valuable impact on your organisation.
				</p>
			</div>
		</motion.section>
	);
}
Home.propTypes = { variants: PropTypes.object };
export default Home;
