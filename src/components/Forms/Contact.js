import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button, Input, Title, Row, mq } from '../styled/common'

class Contact extends Component {
  render() {
    return (
      <Center>
        <ContactFormWrapper>
          <SmallTitle>Contact Us</SmallTitle>
          <div>{this.props.children}</div>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <Input>
              <label>Name</label>
              <input
                type="text"
                name={'name'}
                placeholder={'First Last'} />
            </Input>
            <Input>
              <label>Email</label>
              <input
                name={'email'}
                placeholder={'a@a.com'}
                type="email" />
            </Input>
            <Input>
              <label>Message</label>
              <textarea
                name="message" />
            </Input>
            <Input>
              <Button type='submit'>Send</Button>
            </Input>
          </form>
        </ContactFormWrapper>
      </Center>
    );
  }
}

const Center = styled(Row) `
  justify-content: center;
`

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;

  @media (max-width: ${mq.small}px) {
    padding: 15px;
  }
`

const SmallTitle = styled(Title) `
  font-size: 1.5rem;
`

export default Contact