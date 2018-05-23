import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { SLink } from '../styled/common'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/lib/fa'


const Footer = ({logoSmall}) => {
  return (
    <FooterContainer>
    <Logo sizes={logoSmall} />
      <FooterWidth>
        <FooterContact>
          <SLink to={'tel:808-722-5492'}>808-722-5492</SLink>
          <SLink to={'/contact'}>Message Us</SLink>
        </FooterContact>
        <FooterLinks>
          <SLink to={'/about'}>About</SLink>
          <SLink to={'/locations'}>Locations</SLink>
          <SLink to={'/meet-the-team'}>Meet The Team</SLink>
          <SLink to={'/careers'}>Careers</SLink>
        </FooterLinks>
        <FooterSocial>
          <SLink to={'https://www.facebook.com/LocalDemoService'}><FaFacebookSquare size={50} /></SLink>
          <SLink to={'https://www.linkedin.com/company/local-demo-service/'}><FaLinkedin size={50} /></SLink>
          <SLink to={'https://twitter.com/LocalDemoServic'}><FaTwitter size={50} /></SLink>
          <SLink to={'https://www.instagram.com/localdemoservice/'}><FaInstagram size={50} /></SLink>
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
    padding: 0 5px;
  }
`
const FooterWidth = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`

const Logo = styled(Img)`
  align-self: flex-start;
  height: 100%;
  widht: 150px;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px 15px;

  @media (max-width: 480px) {
    font-size: 10px;  
  }
`


export default Footer;