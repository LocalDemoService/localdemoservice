import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { SLink, mq } from '../styled/common'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/lib/fa'

const iconSize = () => {

}

const Footer = ({ logoSmall }) => {
  return (
    <FooterContainer>
      <FooterWidth>
        <LogoContainer>
          <SLink to={'/'}><Logo sizes={logoSmall.sizes} /></SLink>
        </LogoContainer>
        <FooterContact>
          <a href={'tel:808-722-5492'}>808-722-5492</a>
          <SLink to={'/contact'}>Message Us</SLink>
        </FooterContact>
        <FooterLinks>
          <SLink to={'/about'}>About</SLink>
          <SLink to={'/locations'}>Locations</SLink>
          <SLink to={'/team'}>Meet The Team</SLink>
          <SLink to={'/careers'}>Careers</SLink>
        </FooterLinks>
        <FooterSocial>
          <a href='https://www.facebook.com/LocalDemoService'><FaFacebookSquare /></a>
          <a href='https://www.linkedin.com/company/local-demo-service/'><FaLinkedin /></a>
          <a href='https://twitter.com/LocalDemoServic'><FaTwitter /></a>
          <a href='https://www.instagram.com/localdemoservice/'><FaInstagram /></a>
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

  a {
    color: #333;
    padding: 0 5px;
    text-decoration: none;
  }
`
const FooterWidth = styled.div`
  width: ${mq.large}px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 8.75rem;

  @media (max-width: ${mq.small}px) {
    flex-direction: column;
    padding: 15px 0;
  }
`

const LogoContainer = styled.div`
  position: absolute;
  left: 15px;

  @media (max-width: ${mq.small}px) {
    position: static;
    padding: 10px 0;
    order: 10;
  }
`

const Logo = styled(Img) `
  align-self: center;
  height: 7rem;
  width: 7rem;
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

  @media (max-width: ${mq.small}px) {
    margin: 15px 0;
  }
`

const FooterSocial = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px 15px;
  font-size: 50px;

  @media (max-width: ${mq.medium}px) {
    flex: .65;
  }

  @media (max-width: ${mq.medium}px) {
    font-size: 25px;
  }
`


export default Footer;