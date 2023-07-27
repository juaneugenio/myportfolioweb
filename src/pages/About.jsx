/** @format */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Timeline, Events, Event } from "vertical-timeline-component-react";
import { work, education } from "../dataAbout";
console.log("👉 Line-6 ▶︎▶︎", work);

function About({ variants }) {
	const customTheme = {
		borderDotColor: "#fd7e14",
		descriptionColor: "#a9a8a8",
		dotColor: "#30292f",
		eventColor: "#a9a8a8",
		lineColor: "#fd7e14",
		subtitleColor: "#a9a8a8",
		titleColor: "#fd7e14",
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
				Here I mainly present my <strong> work and educational </strong>biography. But quickly, let me tell you a bit
				more about myself.
			</p>
			<p>
				Ever since I was a kid, I’ve always been fascinated by taking things apart and putting them back together to
				understand how they work. I remember my friends and neighbors often came to me to have their gadgets fixed.
			</p>
			<p>
				I finished high school with a degree in electronics, but also studied electricity, mechanics and carpentry. I
				really enjoyed the practical technical projects, although this required knowledge of mathematics, chemistry and
				physics too. However, in college I decided to strengthen my human skills by studying communication and
				psychology.
			</p>
			<p>
				At the end of 2006, I visited Germany for a few weeks and fell in love with the country. So I decided to move
				there a year later, aware of the cultural, professional and linguistic challenges ahead. Since then, I have
				enjoyed working as a Spanish teacher in several Bavarian public and private institutions.
			</p>
			<p>
				However, with the advances in current technology, I think it’s time to revisit my technical roots, which have
				always been part of me. I’m sure software development is the right way for me.
			</p>
			<h3>Work experience</h3>

			<Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
				{work.map((institut) => {
					// console.log("👉 Line-37 ▶︎▶︎", typeof endDate);

					return (
						<Events
							title={institut.institution}
							subtitle={institut.role.toUpperCase()}
							startDate={institut.startDate}
							endDate={institut.endDate}
							// defaultClosed
							key={institut.id}
						>
							<Event title={institut.taskTitle} description={institut.tasks} />
						</Events>
					);
				})}
			</Timeline>
			<h3>Education & Certifications</h3>

			<Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
				{education.map((institut) => {
					console.log("👉 Line-37 ▶︎▶︎", typeof endDate);
					console.log("👉 Line-75 ▶︎▶︎", institut.url);

					return (
						<Events
							title={institut.institution}
							subtitle={institut.role.toUpperCase()}
							startDate={institut.startDate}
							endDate={institut.endDate}
							// defaultClosed
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
