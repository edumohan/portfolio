import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import logo from "./logo.png";

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
    <Container>
      <Link className="logo-app" to="/">
        <img alt="Logo of Edu Mohan" src={logo}/>
      </Link>

      <Nav />
    </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
