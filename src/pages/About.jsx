/** @format */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Timeline, Events, Event } from 'vertical-timeline-component-react';
import { work, education } from '../dataAbout';

function About({ variants }) {
	const customTheme = {
		borderDotColor: '#fd7e14',
		descriptionColor: '#F7F7F2',
		dotColor: '#30292f',
		eventColor: '#E4E6C3',
		lineColor: '#fd7e14',
		subtitleColor: '#C5D86D',
		titleColor: '#E4E6C3',
		yearColor: '#C5D86D',
	};

	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial='hidden' // Set the initial state to variants.hidden
			animate='enter' // Animated state to variants.enter
			exit='exit' // Exit state (used later) to variants.exit
			transition={{ ease: 'linear', duration: 0.5, x: { duration: 1 } }}
		>
			<h2>A Glimpse Into My Background</h2>

			<p>
				Since I was a child, I’ve been fascinated by how things work. Whenever something broke, I would analyze it and
				figure out how to fix it. No toy or device escaped my hands— I even took apart my grandmother’s TV! 🫣
			</p>
			<p>
				With the same motivation and curiosity, I completed my studies in Electronics at a technical school, where I
				expanded my practical skills in the real world. Years later, at university, I chose to pursue a path closer to
				the humanities, first studying Communication and then Psychology. These disciplines helped me hone my
				communication, resilience, active listening, and empathy skills—tools I continue to apply in both my personal
				and professional life.
			</p>
			<p>
				Almost a year after finishing university, I decided to move to Germany, where I worked as a Spanish teacher.
				This role allowed me to leverage my teaching skills while developing new ones, such as adapting to new
				environments, working in multidisciplinary teams, and planning. It also gave me the chance to connect with
				people from various backgrounds and cultures, and to understand different approaches to problem-solving and
				collaborative work.
			</p>
			<p>
				However, my passion for technology never faded, so I decided to change my professional path and focus on web
				development. In 2023, I had the opportunity to immerse myself in the world of programming as a technical support
				engineer, where I learned, among many other skills, to understand user needs and expectations. This is crucial
				for creating web applications that truly make a difference.
			</p>
			<p>
				In my role as a technical support engineer, I also encountered stressful situations, such as resolving urgent
				problems under pressure. However, I’ve grown accustomed to handling them calmly and effectively, communicating
				clearly and proactively with the team to find quick solutions and keep everything under control.
			</p>

			<h3>Work experience</h3>

			<Timeline lang='en' theme={customTheme} dateFormat='only-number' collapse withoutDay>
				{work.map((institut) => {
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

			<Timeline lang='en' theme={customTheme} dateFormat='only-number' collapse withoutDay>
				{education.map((institut) => {
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
