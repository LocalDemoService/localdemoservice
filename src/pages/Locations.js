import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, Border, colors, MainColumn, SideColumn } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

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

    </TextContainer>
    <MapContainer><img src={location.mapUrl} /></MapContainer>
  </LocationWrapper>
)

const Locations = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <p>Local Demo Service specialists are located in Hawaii, Idaho, Washington, and California. Want demos in another state? Please go to the ‘contact’ page and let us know which state so we can train someone in that area!</p>
        {Object.keys(locations).map(l => (
          <div key={l.location}>
            <Location location={locations[l]} />
          </div>
        ))}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
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