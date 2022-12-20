import styled from "styled-components";
import SquareButton from "../ui/SquareButton";
import { useTheme } from "../../state/context/ThemeContext";

// FIXME: Sticky navbar
const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 20px;
  min-height: 60px;

  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryDark};
`;

interface LinkProps {
  isBold?: boolean;
}

const Link = styled.a<LinkProps>`
  color: ${({ isBold, theme }) =>
    isBold ? theme.font.color.title : theme.font.color.secondary};
  text-decoration: none;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const SquareLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.font.color.secondary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.font.color.secondary};
  }
`;

const Navbar = () => {
  const { changeTheme } = useTheme();

  return (
    <NavbarContainer>
      <LinkContainer>
        <Link href="/" isBold>
          Jonathan Peraza F
        </Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#experience">Experience</Link>
        {/* <Link href="#portfolio">Portfolio</Link> */}
        <Link href="#contact">Contact</Link>
      </LinkContainer>
      <SquareButton onClick={changeTheme}>Change Theme</SquareButton>
      <SquareLink href="/assets/docs/resume.pdf" target="_blank">
        Download Resume
      </SquareLink>
    </NavbarContainer>
  );
};

export default Navbar;
