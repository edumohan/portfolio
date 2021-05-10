import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Resume from 'components/resume';

const About = ({ data }) => (
  <Layout>
    <div id="aboutContainer" className="about-wrapper">
      <div className="banner-wrap">
        <img
          src="/images/Aboutme/IMG_20210330_122946_349.jpg"
          alt="edu mohan standing near by a cliff ;)"
        />
      </div>
      <div className="about-desc">
        <div className="about-head">
          <h3>Hey there!</h3>
        </div>
        <div className="about-desc-left">
          <p>{`I’m Edu, I like to believe that I’m a problem solver.`}</p>
          <p>{`I grew up with a passion for creation and an eye for beauty in everything around me, I believe every product should serve two purposes; primarily solve a problem and a visual appeal. I like to play around areas where there is a fine balance of technology and design. I enjoy exploring new ways to solve a challenge, blending form and function. I aspire to innovate and I get inspired when people challenge me with logic, rational and data.`}</p>
          <p className="para-space">{`Feel free to contact me or ping me if you would like to get in touch`}</p>
          <p className="contact-row">+91 86557 84668 | edumohan@gmail.com</p>
        </div>
      </div>

      <Resume />
    </div>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
