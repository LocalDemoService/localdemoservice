import React from 'react';
import styled from 'styled-components'

const locations = {
  idaho: {
    location: 'Sandpoint, Idaho',
    mapUrl: ''
  },
  hawaii: {
    location: 'Maui, Hawaii',
    mapUrl: ''
  },
  washington: {
    location: 'Spokane, Washington',
    mapUrl: ''
  }
}

const Location = ({ location }) => (
  <LocationWrapper>
    <Name>{location.location}</Name>
    <MapContainer>{location.mapUrl}</MapContainer>
  </LocationWrapper>
)

const Locations = () => {
  return (
    <div>
      {Object.keys(locations).map(l => (
        <div>
          <div>Hello</div>
          <Location location={locations[l]} />
        </div>
      ))}
    </div>
  );
};

const LocationWrapper = styled.div`

`

const Name = styled.div`

`

const MapContainer = styled.div``

export default Locations;