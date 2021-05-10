import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul className="project-links">
      <li>
        <Link to="/project/?id=qlCaseStudy" >HackerEarth</Link>
      </li>
      <li>
        <Link to="/project/?id=aldenCaseStudy">Alden</Link>
      </li>
      <li>
        <Link to="/project/?id=botbuilderCaseStudy" >Bot Buiilder</Link>
      </li>
    </ul>
    <div className="more-questions">
      <p>More questions?</p>
      <p>Contact Me</p>
    </div>
    <ul className="foot-nav">
      <li>
        <Link
          to="/"
          >Home</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <a href='/edu_mohan_resume_2020.pdf' target='_blank' >View resume</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
