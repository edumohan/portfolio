import React, {useEffect,useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

export default function IntegrationsPrivate({data}) {
    const htmlRef = useRef();
    useEffect(() => {
        htmlRef.current.innerHTML = data.integrationsPrivateJson.content.childMarkdownRemark.html;
      });
    return (
        <Layout>
            <div ref={htmlRef}  id="projectWrapper" className="project-wrapper"></div>
        </Layout>
    )
}
export const query = graphql`
  query IntegrationsPrivateQuery {
    integrationsPrivateJson {
      id
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
