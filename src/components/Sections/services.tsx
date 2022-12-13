import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import SectionDescription from '../ui/SectionDescription';
import Card from '../ui/Card';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    overflow: hidden ;
`;

const ServiceItemCardContent = styled.div`
    margin: 0;

    display: flex;
    flex-direction: column;
`;

const ServiceContent = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        width: 48%;
    }

    @media (min-width: 1366px) {
        width: 33%;
    }
`;

const ServiceTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    height: 33%;

    color: ${({ theme }) => theme.font.color.serviceTitle};
`;

const ServiceDescription = styled.p`
    color: #718096;
    font-size: 1rem;
    text-align: center;
    height: 33%;
`;

const ServiceImage = styled.img`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    width: -webkit-fill-available;
    height: 250px;

    & svg {
        path {
            fill: red;
        }
    }
`;

const services = [
    {
        title: 'Responsive Design & Web Development',
        description: 'I have experience on different projects since mobile optimization, developed plugins for different CMS platforms, React & Vue advanced level. Figma & Zeplin for web design.',
        image: '/assets/services/web-mobile.svg',
    },
    {
        title: 'Migrate your source code to version control',
        description: 'Migrate your codebase to cloud environments using git protocol, allowing your collaborators to easily contribute in the development process.',
        image: '/assets/services/version-control.svg',
    },
    {
        title: 'Migrate your infraestructure to cloud environments',
        description: 'Automation of procceses to validate the quality of the project by setting up unit and functional testing checks and coverage, code standards, automatic builds and automatic deployments to cloud environments.',
        image: '/assets/services/launch.svg',
    },
    {
        title: 'Staff Training',
        description: 'I have imparted different workshops related to new technologies, best practices and product development, which can boost your team by taking them to the next level of collaboration.',
        image: '/assets/services/mentoring.svg',
    },
    {
        title: 'Technical Interview',
        description: 'I have experience in the technical interview process, I can help you to find the best candidates for your team, I can also help you to prepare for your next interview.',
        image: '/assets/services/interview.svg',
    },
    {
        title: 'Analysis & Optimization',
        description: 'Get a detailed report of your website performance, I can help you to improve your website performance and user experience.',
        image: '/assets/services/analytics.svg',
    }
];

const ServicesSection = () => {
    return (
        <Container id="services">
            <SectionDescription
                title="What Can I Do"
                description="My Services"
            />
            <CardContainer>
                {
                    services.map((service, index) => (
                        <ServiceContent key={index}>
                            <Card>
                                <ServiceItemCardContent>
                                    <ServiceImage src={service.image} />
                                    <ServiceTitle>{service.title}</ServiceTitle>
                                    <ServiceDescription>{service.description}</ServiceDescription>
                                </ServiceItemCardContent>
                            </Card>

                        </ServiceContent>

                    ))
                }
            </CardContainer>
        </Container>
    )
}

export default ServicesSection;
