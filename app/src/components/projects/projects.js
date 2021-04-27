import React from 'react';
import { Container } from './projects.css';
import { Link } from 'gatsby';

const ProjectsGrid = ({ items }) => (
  <Container>
  {
    items.map((item, i) => {
      const {
        title,
        date,
        desc,
        image,
        link,
        bgColor,
        color
      } = item;
      return (<Link className="project-link" key={i} to={`/project/?id=${link}`}>
        <div id="projectContainer" style={{backgroundColor:`${bgColor}`, color:`${color}`}}  className="project-item">
          <div className="project-left">
            <h1>{title}</h1>
            <p className="project-desc">{desc}</p>
            <p className="project-date">{date}</p>
    
          </div>
          <div className="projecy-image">
            <img src={image} alt={title} />
          </div>
        </div>
      </Link>)
    })
  }
  </Container>
);

export default ProjectsGrid;
