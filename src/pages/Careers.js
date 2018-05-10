import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import CareersForm from '../components/Forms/CareersForm'

const jobOpenings = [
  {
    location: 'Oahu, Hawaii',
    title: 'Product Demonstration',
    description: 'Est est nulla non et exercitation minim do consectetur. Commodo sunt sunt minim duis. Officia commodo esse nulla sunt. Magna ea culpa adipisicing exercitation aliquip deserunt eiusmod nulla et officia deserunt veniam veniam.'
  },
  {
    location: 'Sandpoint, Idaho',
    title: 'Product Demonstration',
    description: 'Est est nulla non et exercitation minim do consectetur. Commodo sunt sunt minim duis. Officia commodo esse nulla sunt. Magna ea culpa adipisicing exercitation aliquip deserunt eiusmod nulla et officia deserunt veniam veniam.'
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

const Openings = styled.div`
  margin-top: 50px;
`

const JobContainer = styled.div`
  margin: 25px 25px;
  width: 80%;
`

const Location = styled.div`
  font-size: 1.25rem;
`

const JobTitle = styled.div`
  font-size: 1.5rem;
`

export default Careers;