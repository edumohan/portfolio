import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

const Project = ({ data }) => {
  const browserWindow = typeof window === 'undefined' ? {} : window;
  let selectedPage = {
    content: {
      childMarkdownRemark: {
        html: ``,
      },
    },
  };
  if (browserWindow.location) {
    const urlParams = new URLSearchParams(browserWindow.location.search);
    const id = urlParams.get('id');
    selectedPage = data.projectJson.projects.filter(item => item.id === id)[0];
  }
  const { content } = selectedPage;
  return (
    <Layout>
      <div
        className="project-wrapper"
        dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
      ></div>
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const query = graphql`
  query ProjectQuery {
    projectJson {
      projects {
        id
        bgColor
        color
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
