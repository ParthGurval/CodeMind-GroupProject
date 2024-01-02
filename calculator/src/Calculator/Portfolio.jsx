import React, { useState } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import './Portfolio.css';

const Portfolio = () => {
 const [projectIndex, setProjectIndex] = useState(0);
 const projectArray = [
    {
      name: 'Project 1',
      description: 'Project 1 Description',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 2',
      description: 'Project 2 Description',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 3',
      description: 'Project 3 Description',
      imgUrl: 'https://via.placeholder.com/150',
    },
 ];

 const nextProject = () => {
    if (projectIndex === projectArray.length - 1) {
      setProjectIndex(0);
    } else {
      setProjectIndex(projectIndex + 1);
    }
 };

 const prevProject = () => {
    if (projectIndex === 0) {
      setProjectIndex(projectArray.length - 1);
    } else {
      setProjectIndex(projectIndex - 1);
    }
 };

 useState(() => {
    gsap.to('.project', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
 }, []);

 return (
    <div className="portfolio">
      <div className="project" key={projectArray[projectIndex].name}>
        <h2 className="project-name">{projectArray[projectIndex].name}</h2>
        <img
          className="project-image"
          src={projectArray[projectIndex].imgUrl}
          alt={projectArray[projectIndex].name}
        />
        <p className="project-description">
          {projectArray[projectIndex].description}
        </p>
      </div>
      <button className="next-button" onClick={nextProject}>
        Next Project
      </button>
      <button className="prev-button" onClick={prevProject}>
        Previous Project
      </button>
    </div>
 );
};

export default Portfolio;