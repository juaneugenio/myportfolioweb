/** @format */
// For the icons i used React Icons IcoMoon Free -> https://react-icons.github.io/react-icons/icons?name=im. And i
// passed the same "Name declarations" in the file: data.json.
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import data from "../data.json";

import { ImGithub, ImMail4, ImLinkedin, ImFileText } from "react-icons/im";

const iconMap = {
  ImLinkedin: ImLinkedin,
  ImMail4: ImMail4,
  ImGithub: ImGithub,
  ImFileText: ImFileText,
};

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
            I'm <strong>Juan Carlos</strong>, and thank you for exploring my
            portfolio!
          </p>
          <p>
            If you have any questions or a project in mind, feel free to get in
            touch.
          </p>
        </div>

        <ul>
          {data.user.contacts.map((contact) => {
            // Iteramos sobre los contactos
            const IconComponent = iconMap[contact.icon]; // Obtenemos el componente de icono del mapa
            const className = contact.icon.replace(/^Im/, "").toLowerCase(); // Generamos un className dinámico (ej: "linkedin", "mail4")

            return (
              <motion.li
                key={contact.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 5 }}
              >
                <a
                  className={`${className} hoverable`} // Usamos el className dinámico
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(contact.icon === "ImFileText" && { download: true })} // Añadimos 'download' solo si es ImFileText
                >
                  {IconComponent && <IconComponent />} <br />{" "}
                  {/* Renderizamos el componente de icono */}
                  <span>{contact.name}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
        <div className="footer">
          <h4>
            Made by{" "}
            <span className="tooltip">
              EUGENIO
              <span className="tooltiptext">The developer of this Site</span>
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
