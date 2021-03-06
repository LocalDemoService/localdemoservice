import React from 'react';
import styled from 'styled-components'
import { Button, Input, Title, colors } from '../styled/common'


// const blah = () => (
//   <form name="new-contact-test" action="/" netlify=>
// <p><label>Email: <input name="email"></label></p>
// <p><label>Message: <textarea name="message"></textarea></label></p>
// <p><label>file!<input type="file" name="pic"></input></label></p>
// </form>
// )

const CareersForm = () => {
  return (
    <CareerFormWrapper>
      <Title>Contact Us</Title>
      <form
        name="careers"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        enctype="multipart/form-data">
        <input type="hidden" name="form-name" value="careers" />

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
          <label>Attach Resume</label>
          <input type="file" name="resume" />
        </Input>
        <Input>
          <label>Cover Letter</label>
          <textarea
            name="message"
            cols="30"
            rows="10" />
        </Input>
        <Button type='submit'>Send</Button>
      </form>
    </CareerFormWrapper>
  );
}

const InputFile = styled.label`
  color: ${colors(1).black};
  font-size: 1.5rem;
  padding: 5px 15px !important;
  margin: 5px auto;
  background-color: ${colors(0.5).green};
  cursor: pointer;
`


const CareerFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`
export default CareersForm;