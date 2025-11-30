import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Freelance, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`; 

const profiles = [
  {
    name: 'Codeforces',
    title: 'Specialist',
    rating: 1451, 
    color: '#00A3E0',
    link: 'https://codeforces.com/profile/kartikey_20cs',
    icon: 'https://sta.codeforces.com/s/23429/images/codeforces-logo-with-telegram.png', // Codeforces icon
  },
  {
    name: 'LeetCode',
    title: 'Knight',
    rating: 1644, 
    color: '#FF6A00',
    link: 'https://leetcode.com/u/kartikey_20bhardwaj/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
  },
  {
    name: 'CodeChef',
    title: '* * *',
    rating: 1669, 
    color: '#5B8DFE',
    link: 'https://www.codechef.com/users/kartikey_20cs',
    icon: 'https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.png',
  },
];

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />  
      <>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Coding Profiles
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          padding: '20px 40px',
        }}
      >
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'center',
              width: '220px',
              maxWidth: '90vw',
              padding: '10px',
              borderRadius: '8px',
              transition: 'transform 0.3s',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={profile.icon}
                alt={profile.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <h3 style={{ margin: 0 }}>{profile.name}</h3>
              <p
                style={{
                  marginTop: '5px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: profile.color,
                }}
              >
                {profile.title}
              </p>
              <p style={{ marginTop: '0px', fontSize: '20px' }}>Rating: {profile.rating}</p>
            </div>
          </a>
        ))}
      </div>
    </>
      <Featured />
      <Projects /> 
      <Freelance/>
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
