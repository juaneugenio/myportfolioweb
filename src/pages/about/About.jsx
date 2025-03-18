/** @format */
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {Timeline, Events, Event} from 'vertical-timeline-component-react';
import './About.css';
import {work, education, skills} from '@/dataAbout.js';
import {ImHtmlFive, ImCss3} from 'react-icons/im';
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io5';
import {
  SiTypescript,
  SiReact,
  SiGit,
  SiGithub,
  SiPnpm,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiSketch,
  SiVisualstudiocode,
  SiJson,
} from 'react-icons/si';
import {VscEditorLayout} from 'react-icons/vsc';

function About({variants}) {
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
  
  const iconComponents = {
    ImHtmlFive: ImHtmlFive,
    ImCss3: ImCss3,
    IoLogoJavascript: IoLogoJavascript,
    IoLogoNodejs: IoLogoNodejs,
    SiTypescript: SiTypescript,
    SiReact: SiReact,
    SiGit: SiGit,
    SiGithub: SiGithub,
    SiPnpm: SiPnpm,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    SiRedux: SiRedux,
    VscEditorLayout: VscEditorLayout,
    SiSketch: SiSketch,
    SiVisualstudiocode: SiVisualstudiocode,
    SiJson: SiJson,
  };
  
  return (
     <motion.section
        variants={variants} // Pass the variant object into Framer Motion
        initial='hidden' // Set the initial state to variants.hidden
        animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ease: 'linear', duration: 0.5, x: {duration: 1}}}
     >
       <h2>About Me</h2>
       
       <p>
         My passion for programming began in 2021, when I decided to switch careers and fully commit to application
         development. A six-month intensive bootcamp in web development solidified my conviction that
         programming was the right career path for me.
       </p>
       
       <p>
         Since then, I've been focusing on personal projects to enhance my frontend skills. I've also had the
         opportunity to work in B2B technical support, where I gained invaluable experience collaborating with software
         engineering teams and directly interacting with customers.
       </p>
       
       <h3>Skills</h3>
       
       <motion.section variants={variants} initial='hidden' animate='enter' exit='exit' transition={{duration: 0.4}}>
         <div className='skills-section'>
           <div className='skills-container'>
             {['Frontend', 'Backend', 'Tools'].map((category, index)=>(
                <motion.div
                   key={category}
                   className='skills-category'
                   initial={{opacity: 0, y: -20}}
                   animate={{opacity: 1, y: 0}}
                   transition={{
                     duration: 0.2,
                     delay: index * 0.2,
                     ease: 'easeOut',
                   }}
                >
                  <h4>{category}</h4>
                  <div className='skills-list'>
                    {skills[category.toLowerCase()].map((skill, skillIndex)=>{
                      const IconComponent = iconComponents[skill.icon];
                      return (
                         <motion.div
                            key={skill.id}
                            className='skill-item'
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.2 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                         >
                           {IconComponent && <IconComponent className='skill-icon'/>}
                           <span className='skill-name'>{skill.name}</span>
                           <span className='skill-stars'>{skill.level}</span>
                         </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
             ))}
           </div>
         </div>
       </motion.section>
       
       <h3>Work experience</h3>
       
       <motion.section variants={variants} initial='hidden' animate='enter' exit='exit' transition={{duration: 0.4}}>
         <div className='experience-section'>
           {work.map((job, index)=>(
              <motion.div
                 key={job.id}
                 className='experience-card'
                 initial={{opacity: 0, x: -20}}
                 animate={{opacity: 1, x: 0}}
                 transition={{
                   duration: 0.3,
                   delay: index * 0.2,
                   ease: 'easeOut',
                 }}
              >
                <div className='experience-header'>
                  <h4>{job.institution}</h4>
                  <span className='experience-role'>{job.role}</span>
                </div>
                <div className='experience-dates'>
								<span>
									{job.startDate} - {job.endDate}
								</span>
                </div>
                <div className='experience-description'>
                  <ul className="education-tasks">
                    {job.tasks.map((task, taskIndex)=>(
                       <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
           ))}
         </div>
       </motion.section>
       
       <h3>Education & Certifications</h3>
       
       <motion.section variants={variants} initial='hidden' animate='enter' exit='exit' transition={{duration: 0.4}}>
         <div className='experience-section'>
           {education.map((edu, index)=>(
              <motion.div
                 key={edu.id}
                 className='experience-card'
                 initial={{opacity: 0, x: -20}}
                 animate={{opacity: 1, x: 0}}
                 transition={{
                   duration: 0.3,
                   delay: index * 0.2,
                   ease: 'easeOut',
                 }}
              >
                <div className='experience-header'>
                  <h4>{edu.institution}</h4>
                  <span className='experience-role'>{edu.role}</span>
                </div>
                <div className='experience-dates'>
								<span>
									{edu.startDate} - {edu.endDate}
								</span>
                </div>
                <div className='experience-description'>
                  <ul className='education-tasks'>
                    {edu.tasks.map((task, taskIndex)=>(
                       <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
           ))}
         </div>
       </motion.section>
     </motion.section>
  );
}

About.propTypes = {variants: PropTypes.object.isRequired};
export default About;
