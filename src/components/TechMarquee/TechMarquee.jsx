import Marquee from 'react-fast-marquee';

const TechMarquee = () => {
    const technologies = [
			'React',
			'JavaScript',
			'HTML5',
			'CSS3',
			'Git',
			'Responsive Design',
			'Redux',
			'TypeScript',
			'Node.js',
			'REST API',
			'Vite',
			'Jest',
			'npm',
			'design enthusiastic',
      'Sketch',
      'Express.js',
		];

    return (
			<div className='tech-marquee-container'>
				<Marquee gradient={false} speed={15} pauseOnHover={true} direction='left'>
					{technologies.map((tech, index) => (
						<span key={`left-${index}`} className='tech-item'>
							{tech}
						</span>
					))}
				</Marquee>

				<Marquee gradient={false} speed={15} pauseOnHover={true} direction='right'>
					{technologies.map((tech, index) => (
						<span key={`right-${index}`} className='tech-item'>
							{tech}
						</span>
					))}
				</Marquee>
			</div>
		);
};

export default TechMarquee;