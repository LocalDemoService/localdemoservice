import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn } from '../components/styled/common'
import Contact from '../components/Forms/contact'

const About = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <h1>About Local Demo Service</h1>
        <p>Adipisicing cillum consectetur aliquip elit sit est. Dolore labore ex nostrud ea do pariatur dolore. Eiusmod tempor voluptate id duis amet et duis excepteur elit mollit.</p>
        <p>Fugiat nulla occaecat Lorem magna laborum excepteur et laborum commodo commodo mollit occaecat veniam quis. Ipsum excepteur velit mollit cillum fugiat enim mollit qui quis. Exercitation non voluptate et occaecat cillum aute eu irure velit culpa id proident qui. Minim quis amet amet consectetur in nisi officia adipisicing cillum exercitation minim. Commodo ipsum fugiat fugiat consequat eu consequat nostrud tempor non exercitation incididunt consectetur officia excepteur. Anim consequat irure reprehenderit occaecat aliqua anim commodo do in irure in. Commodo pariatur nostrud eiusmod proident non labore deserunt enim.</p>
        <p>Sunt laboris laboris labore et ad enim in veniam nisi irure. Amet culpa id occaecat nulla eiusmod aute consequat. Officia ipsum elit minim consectetur labore sunt pariatur velit fugiat qui eu ullamco aliqua sit. Est consequat nulla ipsum ut.</p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default About;