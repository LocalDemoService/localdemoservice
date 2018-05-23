import React from 'react';
import styled from 'styled-components'
import Contact from '../components/Forms/Contact'
import { HomePageWrapper, Border, colors } from '../components/styled/common'

const ContactPage = () => {
  return (
    <ContactWrapper>
      <ContactWidth>
        <Contact>
          <Text>If you would like to meet with us about our services, please send us a message.</Text>
        </Contact>
      </ContactWidth>
    </ContactWrapper>
  );
};

const Text = styled.div`
  font-size: 1.2rem;
  padding: 10px 0;
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContactWidth = styled.div`
  width: 25%;
`

export default ContactPage;