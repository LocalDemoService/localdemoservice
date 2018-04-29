import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/lib/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWidth>
        <FooterContact>
          <a href='tel:808-722-5492'>808-722-5492</a>
          <a href='mailto:info@localdemoservice.com'>info@localdemoservice.com</a>
        </FooterContact>
        <FooterLinks>
          <Link to={'/about'}>About</Link>
          <Link to={'/locations'}>Locations</Link>
          <Link to={'/meet-the-team'}>Meet The Team</Link>
          <Link to={'/careers'}>Careers</Link>
        </FooterLinks>
        <FooterSocial>
          <a href='https://facebook.com'><FaFacebookSquare size={50} svg /></a>
          <a href=''><FaLinkedin size={50} svg /></a>
          <a href=''><FaTwitter size={50} svg /></a>
          <a href=''><FaInstagram size={50} svg /></a>
        </FooterSocial>
      </FooterWidth>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  border-bottom: 5px solid #99ca3b;
  border-top: 5px solid #86622e;
  background-color: rgba(153, 202, 59, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 8rem;

  a {
    color: #333;
  }
`
const FooterWidth = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`

const FooterContact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  margin: 0 25px;
`

const FooterSocial = styled.div`
  flex: 1;
  fisplay: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px 15px;
`


export default Footer;