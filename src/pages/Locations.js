import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, Border, colors, MainColumn, SideColumn, Row, Column, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const locations = {
  idaho: {
    city: 'Sandpoint, Idaho',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png',
    places: ['Super1 Foods', 'Winter Ridge Groceries', 'Yokes Fresh Market']
  },
  hawaii: {
    city: 'Maui, Hawaii',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png',
    places: []
  },
  washington: {
    city: 'Spokane, Washington',
    mapUrl: 'https://googlemaps.github.io/js-map-label/screenshot.png',
    places: []
  }
}

const Location = ({ location }) => (
  <LocationWrapper>
    <TextContainer>
      <Name>{location.city}</Name>
      <ul>
        {location.places.map(place => <Place>{place}</Place>)}
      </ul>
    </TextContainer>
    <MapContainer><img src={location.mapUrl} /></MapContainer>
  </LocationWrapper>
)

const Locations = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Locations</Title>
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

const LocationWrapper = styled(Row) `
  margin: 15px 50px;
  padding: 15px 25px;
  border-bottom: 3px solid ${colors(0.1).black};
  
  `

const TextContainer = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
  margin-right: 10px;
  
  @media (min-width: 489px) {
    width: 300px;
  }
`

const Name = styled.div`
  font-size: 2rem;
  text-align: right;
`

const Place = styled.li`
  font-size: 1rem;
  list-style: none;
  padding: 5px 0;
`

const MapContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  img {
    width: 250px;
  }
`

export default Locations;