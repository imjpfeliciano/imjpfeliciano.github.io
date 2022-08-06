import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import Container from '../ui/Container/Container';
import SectionDescription from '../ui/SectionDescription';
import Timeline from '../ui/Timeline';

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const experiences = [
    {
        title: 'Senior Software Engineer',
        company: 'Human API',
        date: '2021',
        description: '',
        companyUrl: 'https://humanapi.co',
        companyLogo: 'https://avatars.githubusercontent.com/u/4932106?s=200&v=4',
        color: '#0d6cfb',
    },
    {
        color: '#e93d44',
        title: 'Software Engineer III',
        companyLogo: 'https://avatars.githubusercontent.com/u/6192875?s=200&v=4',
        company: 'Wizeline',
        date: '2017',
        description: `
            <p>As Interviewer, I was responsible for the technical evaluation of candidates, and as a mentor, I was responsible for the technical development of the team.</p>
            <p>Developed with Vuejs & Apollo Client, a Social Network for a private university in Mexico, which impacts thousands of students.</p>
            <p>Developed with PHP and vanilla javascript a plugin to customize a CMS to post company offices locations and contacts to call in case of emergencies.</p>
            <p>Developed with React, I helped to develop an internal tool which impacts the company in a positive way giving the collaborators to ask questions to e-staff members directly.</p>
        `
    },
    {
        color: '#80388D',
        title: 'Software Developer',
        company: 'SalesUp!',
        companyLogo: 'https://www.comparasoftware.es/wp-content/uploads/2018/10/LogoSalesUP.png',
        date: '2016',
        description: 'I helped by improving the framework to serve the frontend pages using technologies such as vanilla javascript and handlebars templates, but also I helped with a migration of the file management system by doing a re-platform for the system always thinking in a cloud environment using AWS services such as SQS, EC2, Lambdas.'
    },
    {
        color: '#ea0074',
        title: 'Software Developer Intern',
        company: 'PriceTravel Holding',
        companyLogo: 'https://scontent.fgdl13-1.fna.fbcdn.net/v/t1.6435-9/59642737_10157072782465340_2547879483088568320_n.png?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHSe2pjiapjylnffy44AKR5OAdPMbEj7Sk4B08xsSPtKbFJLmFECbW_rThEot8loWiSdLxHXpbXcugg3JmrjCTX&_nc_ohc=YgpgfcGU3WcAX_bzanc&_nc_ht=scontent.fgdl13-1.fna&oh=00_AT80WZ3wloQmdN7DyluYe9IGxU3qLgUc7MPFrAmEPcqwEA&oe=630E4DBB',
        date: '2015',
        description: `
            <p>As a trainee, I helped to develop a web platform which displays product sales into a dashboard by accessing the location of each item sold and placing it in a world map. For this project we used leaflet as our map provides and webRTC for the real time sockets connection</p>
            <p>Also as a trainee, I helped in the replatform of a web-mobile application by separating concerns into server-side and client-side improving the load time from almost 10s to 200ms.</p>
        `
    },
    {
        color: '#0ED3CF',
        title: 'Software Developer Intern',
        company: 'Turicun',
        companyLogo: 'https://pbs.twimg.com/profile_images/3765046803/293b7ba896e864a4ba57b66805559c50_400x400.jpeg',
        date: '2012',
        description: 'As an Intern, I helped with some bash scripting to migrate SQL files to get information from those and migrating it to KML files to be consumed in a web application to display public transportation routes into a map of the city.'
    },
];


const ServicesSection = () => {
    return (
        <Container id="experience">
            <SectionDescription
                title="Professional Experience"
                description="My Resume"
            />

            <Card>
                <TimelineContainer>
                    <Timeline items={experiences} />
                </TimelineContainer>
            </Card>
            
        </Container>
    )
}

export default ServicesSection;