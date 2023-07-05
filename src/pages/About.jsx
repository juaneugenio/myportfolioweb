/** @format */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Timeline, Events, Event } from "vertical-timeline-component-react";
import about from "../dataAbout";
console.log("👉 Line-6 ▶︎▶︎", about);

function About({ variants }) {
	const customTheme = {
		borderDotColor: "#f0a202",
		descriptionColor: "#a9a8a8",
		dotColor: "#30292f",
		eventColor: "#a9a8a8",
		lineColor: "#f0a202",
		subtitleColor: "#a9a8a8",
		titleColor: "#f0a202",
		yearColor: "#a9a8a8",
	};
	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<h2>About me</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique placeat, ab quas odit excepturi culpa
				laboriosam aspernatur ea deserunt? Illum, a possimus nemo dolorum necessitatibus esse reiciendis natus placeat!
				Debitis, accusamus fuga, dolorum maxime quis veritatis officiis praesentium corrupti, quo asperiores
			</p>

			<Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
				{about.map((institut) => {
					console.log("👉 Line-37 ▶︎▶︎", typeof endDate);
					return (
						<Events
							title={institut.institution}
							subtitle={institut.role.toUpperCase()}
							startDate={institut.startDate}
							endDate={institut.endDate}
							defaultClosed
							key={institut.id}
						>
							<Event title={institut.taskTitle} description={institut.tasks} />
						</Events>
					);
				})}
			</Timeline>
		</motion.section>
	);
}
About.propTypes = { variants: PropTypes.object.isRequired };
export default About;
