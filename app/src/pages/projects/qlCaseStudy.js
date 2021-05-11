import { graphql } from 'gatsby';
import Layout from 'components/layout';


import React, {useEffect,useRef } from 'react';

function QlCaseStudy({ data }) {
  const htmlRef = useRef();
  useEffect(() => {
    htmlRef.current.innerHTML = data.qlCaseStudyJson.content.childMarkdownRemark.html;
  });

  return (
    <Layout>
    <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
  </Layout>
  );
}

export default QlCaseStudy;

export const query = graphql`
  query QlCaseStudyQuery {
    qlCaseStudyJson {
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
