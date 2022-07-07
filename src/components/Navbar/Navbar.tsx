import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 20px;
    height: 60px;
`;

const Button = styled.button`
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
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
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
            </LinkContainer>
            <Button>Download Resume</Button>
        </NavbarContainer>
    );
};

export default Navbar;