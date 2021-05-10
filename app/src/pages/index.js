import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Projects from 'components/projects';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <div className="intro-wrapper">
      <div>
        Hi, {`I'm`} <span className="strong">Edu.</span>
      </div>
      <br />
      <div className="intro-box">
        <p className="me-into-p">
          {`I understand `}
          <strong className="double-strong"> problems </strong>
          {`people face and also the people who have the power to`}
          <strong className="double-strong"> solve </strong>
          {`them. When they don’t sync well I try to communicate, guide and negotiate to `}
          <i className="">bridge the gaps.</i>
        </p>
        <p className="intro-footer">
          <Link to="/about">
            {`If everything's fine, you can find me `} <i>racing motorcycles</i>
          </Link>
        </p>
        {/*<Modal>
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Modal>*/}
      </div>
    </div>
    <div>
      {/*<div style={{ height: '50vh' }} />
      <IOExample />
    <Gallery items={data.homeJson.gallery} />*/}
      <Projects items={data.homeJson.projects} />
    </div>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
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
`;
