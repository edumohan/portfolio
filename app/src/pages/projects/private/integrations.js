import React, {useEffect,useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

export default function Integrations({data}) {
    const htmlRef = useRef();
    useEffect(() => {
        htmlRef.current.innerHTML = data.integrationsJson.content.childMarkdownRemark.html;
      });
    return (
        <Layout>
            <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
        </Layout>
    )
}
export const query = graphql`
  query IntegrationsQuery {
    integrationsJson {
      id
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
