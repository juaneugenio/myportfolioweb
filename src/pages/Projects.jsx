/** @format */
import data from "../data.json";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Projects = ({ variants }) => {
	return (
		<motion.div
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<section>
				<h2>My Projects</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur voluptatem assumenda qui optio eos
					nobis libero, perspiciatis eius temporibus illo quis incidunt unde veli sint odit maxime aut recusandae
					similique placeat culpa accusantium eveniet. Modi, ipsum quod. Fugtis quisquam? Aliquam
				</p>
			</section>
			<section className="parent-container">
				{data.user.projects.map((proj) => {
					return (
						<ul key={proj.id}>
							<img src={proj.img} alt="LALALA" style={{ width: 180 }} />
							<li>{proj.name}</li>
							<li>{proj.year}</li>
							<div>
								{proj.techs.map((tech) => (
									<p key={tech} style={{ display: "inline-block" }}>
										{tech}
									</p>
								))}
							</div>
						</ul>
					);
				})}
			</section>
		</motion.div>
	);
};
Projects.propTypes = { variants: PropTypes.object };
export default Projects;
