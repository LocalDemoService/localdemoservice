import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button, Input, Title } from '../styled/common'

class Contact extends Component {
  render() {
    return (
      <ContactFormWrapper>
        <Title>Contact Us</Title>
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
              name="message"
              cols="30"
              rows="10" />
          </Input>
          <Button type='submit'>Send</Button>
        </form>
      </ContactFormWrapper>
    );
  }
}

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`

export default Contact