/** @format */
// For the icons i used React Icons IcoMoon Free -> https://react-icons.github.io/react-icons/icons?name=im. And i passed the same "Name declarations" in the file: data.json.
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import data from "../data.json";

import { ImGithub, ImMail4, ImLinkedin } from "react-icons/im";

function Contact({ variants }) {
	const year = new Date().getFullYear();
	return (
		<motion.section
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ ease: "linear", duration: 0.5, x: { duration: 1 } }}
		>
			<h2>Contact</h2>
			<div className="contact-container">
				<div className="contact-header">
					<p>
						If you are interested, please do not hesitate to contact me to provide you with more information on how my
						qualifications can have a valuable impact on your organisation.
					</p>
				</div>

				<ul>
					{data.user.contacts.map((contact) => {
						switch (contact.icon) {
							case "ImLinkedin":
								return (
									<motion.li
										key={contact.id}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: "spring", stiffness: 500, damping: 5 }}
									>
										<a className="linkedin" href={contact.url} target="_blank">
											<ImLinkedin /> <br />
											<span>{contact.name}</span>
										</a>
									</motion.li>
								);
								break;
							case "ImMail4":
								return (
									<motion.li
										key={contact.id}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: "spring", stiffness: 500, damping: 5 }}
									>
										<a className="gmail" href={contact.url}>
											<ImMail4 />
											<br />
											<span>{contact.name}</span>
										</a>
									</motion.li>
								);
								break;
							case "ImGithub":
								return (
									<motion.li
										key={contact.id}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: "spring", stiffness: 500, damping: 5 }}
									>
										<a className="github" href={contact.url} target="_blank">
											<ImGithub />
											<br />
											<span>{contact.name}</span>
										</a>
									</motion.li>
								);
								break;

							default:
								break;
						}
					})}
				</ul>
				<div className="footer">
					<h4>
						Made by{" "}
						<span className="tooltip">
							EUGENIO<span className="tooltiptext">The developer of this Site</span>
						</span>
					</h4>
					<p> COPYRIGHT ⓒ 2023 - {year}</p>
				</div>
			</div>
		</motion.section>
	);
}
Contact.propTypes = {
	variants: PropTypes.object,
};
export default Contact;
