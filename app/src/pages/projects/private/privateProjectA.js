import React, {useEffect,useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

export default function PrivateProjectA({data}) {
  const htmlRef = useRef();
    useEffect(() => {
      htmlRef.current.innerHTML = data.privateProjectAJson.content.childMarkdownRemark.html;
    });
  return (
      <Layout>
          <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
      </Layout>
  )
}
export const query = graphql`
  query PrivateProjectAQuery {
    privateProjectAJson {
      id
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;