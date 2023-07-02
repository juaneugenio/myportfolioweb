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
					My journey as a developer began back in 2021, when I dived into the exciting realm of the MERN stack. Since
					then, I&apos;ve been consistently improving my skills through both front-end and back-end projects, focusing
					on JavaScript, React, RESTful APIs, CRUD operatins and more.
				</p>
				<p>
					However, being a proficient professional extends beyond technical expertise alone. During my career as a
					Spanish teacher, I developed the ability to listen carefully to the learning needs of my students and to offer
					effective solutions to the challenges they face in their learning process. I am confident that the combination
					of my technical and interpersonal skills will help me to work effectively with both clients and development
					teams.
				</p>
				<p>
					My immediate objective as a career changer is to secure a full-time position in web development, ideally
					within a dynamic team that appreciates my drive and dedication. <br />
					If you would like to learn more about how my qualifications can contribute to your organization, I welcome the
					opportunity to connect and discuss further.
				</p>
			</div>
		</motion.section>
	);
}
Home.propTypes = { variants: PropTypes.object };
export default Home;
