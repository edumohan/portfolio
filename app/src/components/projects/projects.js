import React from 'react';
import { Container } from './projects.css';
import { useStaticQuery, graphql, Link } from "gatsby";

const ProjectsGrid = ({ items }) => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projectsJson {
        projects {
          title
          desc
          date
          image
          link
          id
          bgColor
          color
        }
      }
    }
  `)
  return (<Container>
  {
    data.projectsJson.projects.map((item, i) => {
      const {
        title,
        date,
        desc,
        image,
        link,
        bgColor,
        color
      } = item;
      return (<Link className="project-link" key={i} to={`/projects/${link}`}>
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
  </Container>)
};

export default ProjectsGrid;
