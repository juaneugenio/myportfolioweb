/** @format */
import data from "../data.json";

const Projects = () => {
	return (
		<>
			<section>
				<h2>My Projects</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur voluptatem assumenda qui optio eos
					nobis libero, perspiciatis eius temporibus illo quis incidunt unde veli sint odit maxime aut recusandae
					similique placeat culpa accusantium eveniet. Modi, ipsum quod. Fugtis quisquam? Aliquam
				</p>
			</section>
			<section>
				{data.user.projects.map((proj) => {
					return (
						<ul key={proj.id}>
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
		</>
	);
};

export default Projects;
