import styled from 'styled-components';

const SquareLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.font.color.secondary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.75rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primaryDark};
  }
`;

export default SquareLink;