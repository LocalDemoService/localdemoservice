import React, { Component } from 'react';
import styled from 'styled-components'
import Modal from 'react-overlays/lib/Modal'
import { HomePageWrapper, Border, Column, colors, mq } from '../../components/styled/common'
import { log } from 'util';

class Partner extends Component {
  state = {
    showModal: false
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { image, testimonial } = this.props
    return (
      <PartnerContainer>
        <PartnerImage>
          <Image src={image} />
        </PartnerImage>
        <Testimonial>
          {testimonial.snippet && (
            <div onClick={this.open}>{testimonial.snippet}</div>
          )}
        </Testimonial>
        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <Column style={dialogStyle()} >
            <Image src={image} />
            <FullTestimonial>{testimonial.text}</FullTestimonial>
            <Attribution>&mdash; {testimonial.attribution}</Attribution>
          </Column>
        </Modal>
      </PartnerContainer>
    )
  }
}

const PartnerContainer = styled.div`
  max-width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PartnerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  img {
    width: 200px;
    align-self: center;
  }
`

const Image = styled.img`
  flex: 1;  
  width: 200px;
  align-self: center;
  padding: 15px;

  @media (max-width: ${mq.small}px) {
    width: 150px; 
    padding: 5px;
  }
`

const Testimonial = styled.div`
  color: ${colors().black};
  font-size: 14px;
  flex: 1;
  width: 65%;
  font-style: italic;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${colors(0.5).black};
  }

  @media (max-width: ${mq.small}px) {
    padding-bottom: 10px;
  }
`

const FullTestimonial = styled.div`
  font-size: 1rem;
  width: 75%;
  margin: 5px auto 25px;
`

const Attribution = styled.div`
  font-size: smaller;
  font-weight: 600;
  align-self: flex-start;
  margin-left: 35px;
`

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0,
  overflow: 'scroll',
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function () {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50;
  let left = 50;

  return {
    position: 'absolute',
    fontSize: '1.1rem',
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};


export default Partner;