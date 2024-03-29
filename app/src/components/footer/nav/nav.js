import React from 'react';
import { Container } from './nav.css';
import { useStaticQuery, graphql, Link } from "gatsby";
const Nav = () => {
  const data = useStaticQuery(graphql`
    query NonPageFooterQuery {
      projectsJson {
        projects {
          title
          link
          id
        }
      }
    }
  `)
  return (<Container>
    <ul className="project-links">
      <li>
        <Link
          to="/"
          >Home</Link>
      </li>
      {
        data.projectsJson.projects.map((item,i)=> {
          return (<li key={i} ><Link to={`/projects/${item.link}`}>{item.title}</Link></li>)
        })
      }
    </ul>
    <ul className="foot-nav">
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <a href='/edu_mohan_resume_2020.pdf' target='_blank' >View resume</a>
      </li>
    </ul>
  </Container>)
};

export default Nav;
