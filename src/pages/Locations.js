import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, Border, colors, MainColumn, SideColumn, Row, Column, Title, mq } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const locations = {
  sandpoint: {
    city: 'Sandpoint, Idaho',
    places: ['Super1 Foods', 'Winter Ridge Groceries', 'Yokes Fresh Market', 'Safeway']
  },
  maui: {
    city: 'Maui, Hawaii',
    places: ['Mana Foods', 'Maui Farmers', 'Farmers Market Lahaina', 'Whole Foods', 'Foodland', 'Down to Earth']
  },
  oahu: {
    city: 'Oahu, Hawaii',
    places: ['Whole Foods', 'Down to earth', 'Foodland/R.Field', 'Kokua Market', 'Dole Plantation', 'Hallmark', 'Neiman Marcus', 'Safeway']
  },
  spokane: {
    city: 'Spokane, Washington',
    places: [`Huckleberry's`, 'Safeway', 'Yokes', 'Super 1', 'My Fresh Basket', 'Rosauers']
  },
  coeurdalene: {
    city: `Couer d'Alene, Idaho`,
    places: ['Natural Grocers', 'Safeway', `Huckleberry's`, 'Pilgrims']
  },
  sanFransico: {
    city: 'Seattle, Washington',
    places: ['Met Markets', 'PCC', 'Pharmaca', 'New Seasons', 'REI', 'QFC', 'Kens Market']
  },
  farmington: {
    city: 'Boise, Idaho',
    places: ['Natural Grocers', 'Boise Coop', 'Albertsons', 'Fred Meyer']
  },
  durango: {
    city: 'Big Island, Hawaii',
    places: ['Island Naturals', `Abundant Life`, 'Foodland', 'Sack n Save']
  },
  Portland: {
    city: `Portland, Oregon`,
    places: ['Natural Grocers', 'Zupans Market', `New Seasons Market`, 'Green Zebra', 'QFCs']
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
        <p>Local Demo Service specialists are located in Hawaii, Idaho, Washington, California, New Mexico, Montana, Colorado, and more! Want demos in another state? Please go to the ‘contact’ page and let us know which state so we can meet your marketing needs!</p>
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
  padding: 15px 25px;
  border: 3px solid ${colors(0.1).black};
  border-radius: 2px;  
  width: 65%;

  @media (min-width: ${mq.small}px) {
    margin-top: 25px;
  }

`

const TextContainer = styled.div`
  display: flex;
`

const Name = styled.div`
  align-self: flex-start;
  margin-left: 100px;
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: ${mq.small}px) {
    margin-left: 50px;
  }
`

const Place = styled.li`
  flex: 1;
  font-size: 1rem;
  list-style: none;
  padding: 5px 0;
  text-align: left;
  padding-left: 50px;

  @media (max-width: ${mq.small}px) {
    padding-left: 0;
  }
`

export default Locations;
