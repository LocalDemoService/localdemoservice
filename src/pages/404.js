import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title, SLink } from '../components/styled/common'

import Contact from '../components/Forms/Contact'

const About = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Hmm, something went wrong&hellip;</Title>
        <p>The page you're looking for doesn't exists. Let's get you <SLink to={'/'}>Home</SLink></p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default About;