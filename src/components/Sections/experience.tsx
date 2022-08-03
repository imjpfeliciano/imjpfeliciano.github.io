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
        description: 'Commodo nisi enim ut ad. Esse mollit ad eu aliquip sint ad Lorem eiusmod id pariatur laboris. Aliquip minim proident pariatur dolor culpa anim nulla sunt. Pariatur consequat eiusmod ut ad labore occaecat ut sint ad. Sunt duis fugiat eiusmod incididunt magna.',
        companyUrl: 'https://humanapi.co',
        companyLogo: 'https://avatars.githubusercontent.com/u/4932106?s=200&v=4',
        location: 'San Francisco, CA',
        color: '#0d6cfb',
    },
    {
        color: '#e93d44',
        title: 'Software Engineer III',
        companyLogo: 'https://avatars.githubusercontent.com/u/6192875?s=200&v=4',
        company: 'Wizeline',
        date: '2017',
        description: 'Et veniam culpa aliqua ipsum sit amet enim veniam reprehenderit consectetur laboris sunt. Eu do ut do cupidatat laborum esse velit est dolor minim duis consectetur anim id. Occaecat magna anim quis voluptate proident culpa. Do nisi incididunt magna qui irure Lorem culpa nisi commodo Lorem id. Quis velit incididunt laboris consectetur pariatur dolor consequat officia occaecat amet dolor. Minim minim nisi deserunt non elit exercitation do sint ad dolore cupidatat. Do duis dolore sit reprehenderit ea aute aliqua ea duis consequat sint aliqua fugiat exercitation.'
    },
    {
        color: '#80388D',
        title: 'Software Developer',
        company: 'SalesUp!',
        companyLogo: 'https://www.comparasoftware.es/wp-content/uploads/2018/10/LogoSalesUP.png',
        date: '2016',
        description: 'Elit incididunt do reprehenderit dolore sunt ex amet dolore mollit nulla. Ullamco deserunt dolor in magna sint magna sit fugiat ad nulla aliqua eiusmod cupidatat. Pariatur ex fugiat voluptate incididunt. Aliqua exercitation amet enim anim enim cupidatat aute aute adipisicing aute cupidatat voluptate. Dolor esse commodo quis cupidatat ad nostrud. Ad proident culpa ad Lorem magna ad et incididunt. Eiusmod incididunt ut aliquip reprehenderit proident labore occaecat labore.'
    },
    {
        color: '#ea0074',
        title: 'Software Developer Intern',
        company: 'PriceTravel Holding',
        companyLogo: 'https://scontent.fgdl13-1.fna.fbcdn.net/v/t1.6435-9/59642737_10157072782465340_2547879483088568320_n.png?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHSe2pjiapjylnffy44AKR5OAdPMbEj7Sk4B08xsSPtKbFJLmFECbW_rThEot8loWiSdLxHXpbXcugg3JmrjCTX&_nc_ohc=YgpgfcGU3WcAX_bzanc&_nc_ht=scontent.fgdl13-1.fna&oh=00_AT80WZ3wloQmdN7DyluYe9IGxU3qLgUc7MPFrAmEPcqwEA&oe=630E4DBB',
        date: '2015',
        description: 'Elit dolore cupidatat mollit et cillum cupidatat. Ea officia commodo incididunt in nostrud. Proident culpa occaecat dolor Lorem aliquip voluptate magna sint nulla deserunt tempor nisi. Consectetur duis do aute proident dolore voluptate sit aliqua qui aliquip veniam laborum Lorem ullamco.'
    },
    {
        color: '#0ED3CF',
        title: 'Software Developer Intern',
        company: 'Turicun',
        companyLogo: 'https://pbs.twimg.com/profile_images/3765046803/293b7ba896e864a4ba57b66805559c50_400x400.jpeg',
        date: '2012',
        description: 'Ullamco occaecat anim aliquip in minim voluptate eiusmod ut officia incididunt. Ipsum amet ut proident commodo incididunt elit incididunt tempor id reprehenderit laboris laborum. Cupidatat quis do deserunt Lorem do ut consequat laboris cillum velit. Minim aute mollit sunt eu Lorem.'
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
