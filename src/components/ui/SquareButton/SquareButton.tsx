import React from 'react';
import styled from 'styled-components';

const SquareButtonContainer = styled.button`
    color: ${props => props.theme.font.color.secondary};
    background-color: transparent;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid ${props => props.theme.colors.primaryDark};
    padding: 10px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primaryDark};
    }
`;

interface SquareButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const SquareButton: React.FC<SquareButtonProps> = ({ children, onClick }) => {
    return (
        <SquareButtonContainer onClick={onClick}>{children}</SquareButtonContainer>
    )
}

export default SquareButton;