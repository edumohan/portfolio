import { graphql } from 'gatsby';
import Layout from 'components/layout';


import React, {useEffect,useRef } from 'react';

function AldenCaseStudy({ data }) {
  const htmlRef = useRef();
  useEffect(() => {
    htmlRef.current.innerHTML = data.aldenCaseStudyJson.content.childMarkdownRemark.html;
  });

  return (
    <Layout>
    <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
  </Layout>
  );
}

export default AldenCaseStudy;

export const query = graphql`
  query AldenCaseStudyQuery {
    aldenCaseStudyJson {
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
`;
