import React, {useEffect,useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

export default function ProjectA({data}) {
    const htmlRef = useRef();
    useEffect(() => {
        htmlRef.current.innerHTML = data.projectAJson.content.childMarkdownRemark.html;
      });
    return (
        <Layout>
            <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
        </Layout>
    )
}
export const query = graphql`
  query ProjectAQuery {
    projectAJson {
      id
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
