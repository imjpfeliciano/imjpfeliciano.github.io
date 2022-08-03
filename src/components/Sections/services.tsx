import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import SectionDescription from '../ui/SectionDescription';
import Card from '../ui/Card';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: center;
`;

const ServiceItemCard = styled(Card)`
    flex-direction: column;
    padding: 1rem;
`;

const ServiceTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`;

const ServiceDescription = styled.p`
    color: #718096;
    font-size: 1rem;
    text-align: center;
`;

// TODO: Fix image size for mobile devices
const ServiceImage = styled.img`
    max-height: 150px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.25rem;
`;

const ServicesSection = () => {
    return (
        <Container id="services">
            <SectionDescription
                title="What Can I Do"
                description="My Services"
            />
            <CardContainer>
                <ServiceItemCard>
                    <ServiceImage src="/assets/web-mobile.svg" alt="web-mobile" />
                    <ServiceTitle>Responsive Design & Web Development</ServiceTitle>
                    <ServiceDescription>
                        I have experience on different projects since mobile optimization, developed plugins for different CMS platforms, React & Vue advanced level. Figma & Zeplin for web design.
                    </ServiceDescription>
                </ServiceItemCard>

                <ServiceItemCard>
                    <ServiceImage src="/assets/version-control.svg" alt="version-control" />
                    <ServiceTitle>Migrate your source code to version control</ServiceTitle>
                    <ServiceDescription>
                        Migrate your codebase to cloud environments using git protocol, allowing your collaborators to easily contribute in the development process.
                    </ServiceDescription>
                </ServiceItemCard>

                <ServiceItemCard>
                    <ServiceImage src="/assets/launch.svg" alt="launch-to-cloud" />
                    <ServiceTitle>Migrate your infraestructure to cloud environments</ServiceTitle>
                    <ServiceDescription>
                        Automation of procceses to validate the quality of the project by setting up unit and functional testing checks and coverage, code standards, automatic builds and automatic deployments to cloud environments.
                    </ServiceDescription>
                </ServiceItemCard>

                <ServiceItemCard>
                    <ServiceImage src="/assets/mentoring.svg" alt="mentoring" />
                    <ServiceTitle>Staff Training</ServiceTitle>
                    <ServiceDescription>
                        I have imparted different workshops related to new technologies, best practices and product development, which can boost your team by taking them to the next level of collaboration.
                    </ServiceDescription>
                </ServiceItemCard>
            </CardContainer>
        </Container>
    )
}

export default ServicesSection;
