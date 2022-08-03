import styled from 'styled-components';

const FooterContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.indigo500};
    color: ${props => props.theme.colors.white};

    padding: 2rem;
`;

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterContainer>© Copyright {currentYear}. All Rights Reserved.</FooterContainer>
    )
}

export default Footer;