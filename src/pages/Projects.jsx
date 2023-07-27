/** @format */
import data from "../data.json";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ImArrowUpRight2 } from "react-icons/im";

const Projects = ({ variants }) => {
	return (
		<motion.div
			className="projects-container"
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<section>
				<h2>My Projects</h2>
				<p>
					Through my personal projects, I try to follow principles and best practices to build modular, scalable and
					maintainable solutions like DRY, SOC and KISS.
				</p>
			</section>
			<section className="projects-section-container">
				{data.user.projects.map((proj) => {
					return (
						<ul key={proj.id} className="card-container">
							{/* <img src={proj.img} alt={`${proj.name}'s screenshot `} style={{ width: "3em" }} /> */}
							<a href={proj.url} target="_blank">
								<motion.h3
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 500, damping: 5 }}
								>
									{proj.name}
									<i>
										<ImArrowUpRight2 />
									</i>
								</motion.h3>
							</a>
							<p className="subtitle">
								{proj.type} Project - {proj.year}
							</p>
							<p className="proj-description">{proj.description}</p>
							<div>
								{proj.techs.map((tech) => (
									<span className="tag" key={tech}>
										{tech}
									</span>
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
