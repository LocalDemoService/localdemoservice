import React from 'react';
import styled from 'styled-components'
import Contact from '../components/Forms/Contact'
import { MainColumn, Border, colors } from '../components/styled/common'

const ContactPage = () => {
  return (
    <ContactWrapper>
      <MainColumn>
        <Contact>
          <Text>If you would like to meet with us about our services, call us at
          <br />
            <a href='tel:808-722-5492'>808-722-5492</a>
            <br />
            or send us a message below.</Text>
        </Contact>
      </MainColumn>
    </ContactWrapper>
  );
};

const Text = styled.div`
  font-size: 1.2rem;
  padding: 10px 0;
  text-align: center;
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContactWidth = styled.div`
`

export default ContactPage;