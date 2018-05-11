import React from 'react';
import styled from 'styled-components'
import { HomePageWrapper, Border, colors } from '../components/styled/common'

const locations = {
  idaho: {
    location: 'Sandpoint, Idaho',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png'
  },
  hawaii: {
    location: 'Maui, Hawaii',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png'
  },
  washington: {
    location: 'Spokane, Washington',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png'
  }
}

const Location = ({ location }) => (
  <LocationWrapper>
    <TextContainer>
      <Name>{location.location}</Name>
      hello
    </TextContainer>
    <MapContainer><img src={location.mapUrl} /></MapContainer>
  </LocationWrapper>
)

const Locations = () => {
  return (
    <HomePageWrapper>
      {Object.keys(locations).map(l => (
        <div>
          <Location location={locations[l]} />
        </div>
      ))}
    </HomePageWrapper>
  );
};

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

const TextContainer = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
  margin-right: 10px;
`

const Name = styled.div`
  font-size: 24px;
`

const MapContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  img {
    width: 250px;
  }
`

export default Locations;