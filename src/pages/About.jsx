/** @format */
import { motion } from "framer-motion";
function About() {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: 0 },
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
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cumque nobis maxime asperiores magnam repellat
				quae, nisi nemo explicabo placeat ea, alias, sed quasi. Consequuntur ducimus dolorem harum accusantium dolorum.
				Perferendis, eius et amet aperiam atque eaque nesciunt accusamus at in iure, dolorum qui reprehenderit sapiente
				possimus, illo molestias debitis officiis. Molestias commodi explicabo dolore earum pariatur, non ea optio?
				Fugiat, ipsa obcaecati vel quo consequuntur libero ipsum similique, iure in cumque qui voluptatum illo sunt
				neque veritatis odit laboriosam totam, repellendus provident. Rem omnis placeat enim ipsum unde id? Perspiciatis
				dolor repellat quibusdam dolorum cupiditate. Dolor, accusamus. Eius beatae alias officiis cumque. Blanditiis,
				quos amet! Corporis hic esse consectetur magni tempore id reprehenderit. Ipsum incidunt autem fugit
				exercitationem fugiat!
			</p>
		</motion.section>
	);
}

export default About;
