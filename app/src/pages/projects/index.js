import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ProjectsGrid from 'components/projects';

const Projects = ({ data }) => (
  <Layout>
    <ProjectsGrid />
  </Layout>
);

export default Projects;
