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
				<q>Debugging the present to develop the future</q>
			</blockquote>
			<div className="home-content">
				<p>
					👋🏼 Hi there and welcome to my Web Portfolio! My name is <strong>Juan</strong> , and it is a pleasure to have
					you here. Allow me to share my passion for web development with you.
				</p>
				<p>
					My journey in this field began in 2021 as a developer specializing in the MERN stack. Since then, I have been
					consistently working on front and back end projects to enhance my technical skills, including JavaScript,
					React, Restful APIs, and more. Please, Feel free to explore my projects to gain a better understanding of my
					work.
				</p>
				<p>
					However, being a proficient professional goes beyond technical expertise. Drawing from my experience as a
					Spanish teacher, I have come to realize that interpersonal skills are equally vital. These skills allow
					individuals to stand out as more than just average workers and transform into reliable collaborators.
				</p>
				<p>
					Currently, I am in the process of transitioning my career to web development because I genuinely love it. I am
					thrilled about the prospect of joining a team of colleagues who can help me grow not only as a developer but
					also as a professional. The opportunity to evolve alongside them is truly exciting to me.
				</p>
			</div>
		</motion.section>
	);
}
Home.propTypes = { variants: PropTypes.object };
export default Home;
