import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Facebook, Twitter } from 'react-svg-logos' 

const Footer = () => {
  return (
    <FooterContainer>
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
        <Facebook />
      </FooterSocial>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 34em;
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
`

const FooterSocial = styled.div`
  flex: 1;
`


export default Footer;