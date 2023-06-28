/** @format */
import { useState } from "react";
import { motion } from "framer-motion";
const variants = {
	hidden: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
};
function Contact() {
	const [formStatus, setFormStatus] = useState("Send");
	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus("Submitting...");
		const { name, email, message } = e.target.elements;
		let conFom = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		console.log(conFom);
	};
	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<h2>Contact</h2>
			<p>Email</p>
			<a href="mailto: leuviah77@gmail.com">Send Email</a>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" required />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" required />
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea id="message" required />
				</div>
				<button type="submit">{formStatus}</button>
			</form>
		</motion.section>
	);
}

export default Contact;
