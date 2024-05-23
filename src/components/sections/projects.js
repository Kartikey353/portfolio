import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
// 
const StyledProjectsSection = styled.section`
  /* Your styles here */
`;

const StyledProject = styled.li`
  /* Your styles here */
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Your animation logic using sr.reveal
  }, []);

  const projects = data.projects.edges.filter(({ node }) => node);
  // Define your logic for projectsToShow here

  const projectInner = node => {
    // Your project inner content
  };

  return <StyledProjectsSection>{/* Your JSX content */}</StyledProjectsSection>;
};

export default Projects;
