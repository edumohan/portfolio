import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

import React, { useEffect, useRef } from 'react';

function Project({ data }) {
  const htmlRef = useRef();
  useEffect(() => {
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
      selectedPage = data.projectJson.projects.filter(
        item => item.id === id
      )[0];
    }
    const { content } = selectedPage;
    htmlRef.current.innerHTML = content.childMarkdownRemark.html;
  });

  return (
    <Layout>
      <div ref={htmlRef} id="projectWrapper" className="project-wrapper"></div>
    </Layout>
  );
}

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
