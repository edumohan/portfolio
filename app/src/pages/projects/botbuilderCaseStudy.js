import { graphql } from 'gatsby';
import Layout from 'components/layout';


import React, {useEffect,useRef } from 'react';

function BotbuilderCaseStudy({ data }) {
  const htmlRef = useRef();
  useEffect(() => {
    htmlRef.current.innerHTML = data.botbuilderCaseStudyJson.content.childMarkdownRemark.html;
  });

  return (
    <Layout>
    <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
  </Layout>
  );
}

export default BotbuilderCaseStudy;

export const query = graphql`
  query BotbuilderCaseStudyQuery {
    botbuilderCaseStudyJson {
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
