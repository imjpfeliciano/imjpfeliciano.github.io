import styled from 'styled-components';
import SquareButton from '../ui/SquareButton';

// FIXME: Sticky navbar
const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 20px;
    height: 60px;
`;

interface LinkProps {
    isBold?: boolean;
}

const Link = styled.a<LinkProps>`
    color: ${props => props.isBold ? props.theme.colors.white : props.theme.colors.indigo200};
    text-decoration: none;
    font-weight: ${props => props.isBold ? 'bold' : 'normal'};
    margin-right: 1rem;
    font-size: 1.25rem;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <LinkContainer>
                <Link href="/" isBold >Jonathan Peraza F</Link>
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#experience">Experience</Link>
                {/* <Link href="#portfolio">Portfolio</Link> */}
                {/* <Link href="#contact">Contact</Link> */}
            </LinkContainer>
            <SquareButton onClick={() => {}}>Download Resume</SquareButton>
        </NavbarContainer>
    );
};

export default Navbar;