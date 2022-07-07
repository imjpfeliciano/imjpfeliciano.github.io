import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

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