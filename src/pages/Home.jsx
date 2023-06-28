/** @format */
import { motion } from "framer-motion";
function Home() {
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
			<h2>Welcome</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae quam consequuntur eum, doloremque
				ducimus exercitationem dolore, voluptatum assumenda inventore veniam eos illo quibusdam provident animi dolorem
				maxime laudantium ut! Consequuntur quis ratione maxime amet, modi voluptas beatae, asperiores rem, ipsam aperiam
				minima aut soluta inventore corporis exercitationem ut consectetur? Laborum eveniet exercitationem aspernatur
				ullam fuga neque error consectetur illo! Tempora voluptates minus quia quos in repudiandae eligendi sunt,
				tenetur natus? Quidem aperiam repellat eligendi, quam dolores a exercitationem blanditiis atque praesentium
				sequi hic ab nobis reiciendis itaque. Obcaecati, blanditiis. Ad iste maxime nesciunt. Explicabo quisquam eos
				laudantium alias esse a itaque laborum quis similique consequatur, impedit, magnam voluptatum, natus recusandae
				in repellendus assumenda ex cumque vel? Voluptas, eos recusandae! Labore dolores laborum dolore quod? Vel iure
				accusamus similique voluptates ducimus libero possimus fugiat expedita odit temporibus commodi voluptate eum
				pariatur, nihil et repudiandae. Nulla neque accusamus pariatur odio eligendi. Repudiandae, delectus! Eum
				repudiandae fugit at rem hic voluptatibus atque asperiores tempora libero. Numquam iure facere, asperiores fugit
				officia veritatis ipsam itaque laboriosam doloribus, ullam quas tenetur deleniti modi est. Quidem officia nobis
				nemo dignissimos maxime, eos repellendus est nihil delectus corporis ut temporibus minus ab doloribus eligendi.
				Recusandae reprehenderit est quos deleniti temporibus deserunt ducimus, inventore placeat consequatur omnis?
				Corporis, velit. Ex saepe qui voluptatem reiciendis minima quisquam mollitia voluptas commodi temporibus eos
				facilis facere non nesciunt aliquid, natus a cumque molestiae reprehenderit veniam cupiditate corporis,
			</p>
		</motion.section>
	);
}

export default Home;
