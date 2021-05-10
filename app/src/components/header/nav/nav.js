import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const scrollToId = (e) => {
  console.log(e,"element_container")
  const {
    id
  } = e.target.dataset;
  document.getElementById(id).scrollIntoView(true);
}
const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link  activeStyle={{ color: "#000000" }} to="/">Home</Link>
      </li>
      <li className="drop-wrapper">
        <Link activeStyle={{ color: "#000000" }} to="/projects">Projects</Link>
        <div className="projects-list">
          <Link  to="/project/?id=qlCaseStudy">HackerEarth</Link>
          <Link  to="/project/?id=aldenCaseStudy">Alden</Link>
          <Link  to="/project/?id=botbuilderCaseStudy">Bot Builder</Link>
        </div>
      </li>
      <li>
        <Link activeStyle={{ color: "#000000" }} to="/about">About</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
