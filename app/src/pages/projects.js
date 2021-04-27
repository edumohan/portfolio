import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ProjectsGrid from 'components/projects';

const Projects = ({ data }) => (
  <Layout>
    <ProjectsGrid items={data.projectsJson.projects} />
  </Layout>
);

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
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
