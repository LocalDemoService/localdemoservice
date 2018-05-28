import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, Border, colors, MainColumn, SideColumn, Row, Column, Title, mq } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const locations = {
  sandpoint: {
    city: 'Sandpoint, Idaho',
    places: ['Super1 Foods', 'Winter Ridge Groceries', 'Yokes Fresh Market']
  },
  maui: {
    city: 'Maui, Hawaii',
    places: ['Mana Foods', 'Maui Farmers', 'Market Lahaina']
  },
  oahu: {
    city: 'Oahu, Hawaii',
    places: ['Whole Foods', 'Down to earth', 'Foodland/R.Field', 'Kokua Market', 'Dole Plantation']
  },
  spokane: {
    city: 'Spokane, Washington',
    places: [`Huckleberry's`, 'Safeway', 'Yokes', 'Super 1']
  },
  coeurdalene: {
    city: `Couer d'Alene, Idaho`,
    places: ['Natural Grocers', 'Safeway', `Huckleberry's`]
  },
  sanFransico: {
    city: 'San Francisco, California',
    places: ['Rainbow Grocers', 'Whole Foods']
  },
  farmington: {
    city: 'Farmington, New Mexico',
    places: ['Natural Grocers']
  },
  durango: {
    city: 'Durango, Colorado',
    places: ['Natural Grocers']
  }
}

const Location = ({ location }) => (
  <LocationWrapper>
    <Name>{location.city}</Name>
    <ul>
      {location.places.map(place => <Place>{place}</Place>)}
    </ul>
  </LocationWrapper>
)
// <MapContainer><img src={location.mapUrl} /></MapContainer>

const Locations = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Locations</Title>
        <p>Local Demo Service specialists are located in Hawaii, Idaho, Washington, and California. Want demos in another state? Please go to the ‘contact’ page and let us know which state so we can train someone in that area!</p>
        {Object.keys(locations).map(l => (
          <Location key={l.location} location={locations[l]} />
        ))}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const LocationWrapper = styled(Column) `
  border-bottom: 3px solid ${colors(0.1).black};
  align-items: center;  
  margin-right: 10px;
  width: 300px;
  margin-top: 15px;
  @media (min-width: ${mq.small}px) {
    width: 400px;
    margin-top: 25px;
  }

`

const TextContainer = styled.div`
  display: flex;
`

const Name = styled.div`
  flex: 1;
  font-size: 1.5rem;
`

const Place = styled.li`
  flex: 1;
  font-size: 1rem;
  list-style: none;
  padding: 5px 0;
  text-align: left;
  padding-left: 50px;
`

export default Locations;