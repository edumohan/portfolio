import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import Nav from 'components/footer/nav';


const Footer = () => (
    <Container>
      <Nav />
      <div className="footer-note">
        All information in the projects are my own and does not necessarily reflect the views of respective companies. All the projects complies to the NDA
      </div>
    </Container>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
