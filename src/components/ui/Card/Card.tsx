import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 0;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.colors.cardBg};
    border-radius: 5px;
    
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};
    padding: 1rem;
    height: 100%;
    width: 100%;

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <CardContainer>{children}</CardContainer>
    )
};

export default Card;