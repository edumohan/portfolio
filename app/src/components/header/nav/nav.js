import React from 'react';
import { Container } from './nav.css';
import { useStaticQuery, graphql, Link } from "gatsby";

const scrollToId = (e) => {
  const {
    id
  } = e.target.dataset;
  document.getElementById(id).scrollIntoView(true);
}
const Nav = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
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
  return (
    <Container>
      <ul>
        <li>
          <Link  activeStyle={{ color: "#000000" }} to="/">Home</Link>
        </li>
        <li className="drop-wrapper">
          <Link activeStyle={{ color: "#000000" }} to="/projects">Projects</Link>
          <div className="projects-list">
            {
              data.projectsJson.projects.map((item,i)=> {
                return <Link key={i} to={`/projects/${item.link}`}>{item.title}</Link>
              })
            }
          </div>
        </li>
        <li>
          <Link activeStyle={{ color: "#000000" }} to="/about">About</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Nav;

