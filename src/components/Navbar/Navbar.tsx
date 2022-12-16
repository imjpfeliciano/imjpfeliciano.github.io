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
      <SquareButton onClick={() => {}}>Download Resume</SquareButton>
    </NavbarContainer>
  );
};

export default Navbar;
