import './Projects.css'

import droneImg from '../assets/projects/drone/drone.png'
import watchImg from '../assets/projects/sleepacta/watch.png'
import robotImg from '../assets/projects/yk-robotics/yk-robotics.jpg'

const proj = [
  {
    id: 1,
    title: "Aerial manipulator",
    description: `Assembled, and configured a custom-built quadcopter from the ground up,
    leveraging open-source external C/C++ libraries to handle complex flight dynamics, sensor fusion,
    and hardware control. The goal of the project was to gain hands-on experience with hardware-software 
    integration, low-level microcontroller programming`,
    technologies: ["Microcontroller", "C++", "ROS"],
    link: "https://github.com/tuonome/app-meteo",
    image: droneImg,
  },
  {
    id: 2,
    title: "Robotics plants design",
    description: `Designed a complete robotic cell.  
    The project encompassed everything from initial cell layout design and precision mechatronics 
    engineering to managing key supply chains, aligning software streams, and managing customer 
    requirements through final testing and deployment.`,
    technologies: ["Design", "Robot Programming"],
    link: "https://github.com/tuonome/todo-list",
    image: robotImg
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This site built up with Vite and React.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://github.com/tuonome/portfolio",
    image: "https://placehold.co/400x300"
  },
   {
    id: 4,
    title: "Sleepacta",
    description: "...",
    technologies: ["Design"],
    link: "https://github.com/tuonome/portfolio",
    image: watchImg,
   }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My projects</h2>
      <div className="projects-grid">
        {proj.map((proj) => (
          <div className="project-card" key={proj.id}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-tags">
              {proj.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Have a look at the project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects