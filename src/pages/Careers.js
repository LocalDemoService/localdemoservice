import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, MainColumn, SideColumn, Title, colors } from '../components/styled/common'
import CareersForm from '../components/Forms/CareersForm'

// format:
// {
//   location: 'Oahu, Hawaii',
//   title: 'Product Demonstration',
//   description: 'Est est nulla non et exercitation minim do consectetur. Commodo sunt sunt minim duis. Officia commodo esse nulla sunt. Magna ea culpa adipisicing exercitation aliquip deserunt eiusmod nulla et officia deserunt veniam veniam.'
// }, //remember the comma!

const jobOpenings = [
  {
    location: 'Big Island, Hawaii',
    title: 'Product Demonstration',
    description: 'Local Demo Service is looking for demo specialists who can cover Hilo & Kona area. If you can cover one or both of these areas, please send your resume!'
  },
  {
    location: 'Spokane, Washington',
    title: 'Product Demonstration',
    description: 'Local Demo Service is looking for a demo specialist in Spokane Washington! Covering CDA is preferred but not required. For all qualified participants, please send your resume!'
  }
]

const Job = ({ location, title, description }) => (
  <JobContainer>
    <Location>{location}</Location>
    <JobTitle>{title}</JobTitle>
    <div>{description}</div>
  </JobContainer>
)

const Careers = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        {!jobOpenings || jobOpenings.length === 0 ? <NoJobs>There are currently no jobs available. Please feel free to leave your information and we will keep your resume on file.</NoJobs>
          :
          <Openings>
            <Title>Job Openings</Title>
            <Text>Are you an awesome demo specialist or brand ambassador? Do you have sales talent? Have you represented brands at conferences or events? Send us your resume, some photos from your brand ambassading experience, your location, and why you would love to represent Local Demo Service.</Text>
            {jobOpenings.map(j => (
              <Job
                location={j.location}
                title={j.title}
                description={j.description} />
            ))}
          </Openings>
        }
      </MainColumn>
      <SideColumn>
        <CareersForm />
      </SideColumn>
    </SubpageWrapper>
  );
};

const NoJobs = styled.div`
  margin-top: 50px;
  font-size: 2rem;
  width: 80%
`
const Text = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Openings = styled.div`
  margin-top: 50px;
`

const JobContainer = styled.div`
  margin: 25px 25px;
  padding: 15px 25px;
  border: 3px solid ${colors(0.1).black};
  border-radius: 2px;
  width: 65%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Location = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`

const JobTitle = styled.div`
  font-size: 1.5rem;
  padding: 5px 0;
  font-weight: 400;
`

export default Careers;
