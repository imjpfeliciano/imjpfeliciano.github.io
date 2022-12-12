import React from 'react';
import styled from 'styled-components';

const SectionDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.font.color.title};
`;

const Description = styled.h3`
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-bottom: 0;
    font-weight: inherit;

    &:before {
        display: inline-block;
        content: "";
        width: 2rem;
        height: 3px;
        margin: 0 1rem 0 0;
        transform: translateY(-5px);
        background: linear-gradient(90deg,#c3dafe, ${({ theme }) => theme.colors.primaryDark});
    }
`;

const Title = styled.h2`
    font-size: 1.875rem;
    text-transform: capitalize;
`

interface SectionDescriptionProps {
    title: string;
    description: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ title, description }) => {
    return (
        <SectionDescriptionContainer>
            <Description>{description}</Description>
            <Title>{title}</Title>
        </SectionDescriptionContainer>
    )
}

export default SectionDescription;