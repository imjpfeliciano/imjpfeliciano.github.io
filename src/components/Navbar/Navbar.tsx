import styled from "styled-components";
import { useTheme } from "../../state/context/ThemeContext";
import SquareButton from "../ui/SquareButton";
import SquareLink from "../ui/SquareLink";

interface LinkProps {
  isBold?: boolean;
}

// const Link = styled.a<LinkProps>`
//   color: ${({ isBold, theme }) =>
//     isBold ? theme.font.color.title : theme.font.color.secondary};
//   text-decoration: none;
//   font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
//   margin-right: 1rem;
//   font-size: 1.25rem;

//   &:hover {
//     color: ${(props) => props.theme.font.color.linkHover};
//   }
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
// `;

const Link = ({ href, children, isBold }: { href: string; children: React.ReactNode; isBold?: boolean; }) => {
  return (
    <a href={href} className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" style={{ marginRight: '1rem' }}>
      {children}
    </a>
  )
}

const Navbar = () => {
  const { changeTheme } = useTheme();

  return (

    <div className="md:max-w-screen-xl flex flex-row justify-between m-auto py-2">
      <div className="flex flex-wrap itemx-center justify-between">
        <Link href="/" isBold>
          Jonathan Peraza F
        </Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#experience">Experience</Link>
        {/* <Link href="#portfolio">Portfolio</Link> */}
        <Link href="#contact">Contact</Link>
      </div>
      <SquareButton onClick={changeTheme}>Change Theme</SquareButton>
      <SquareLink href="/assets/docs/resume.pdf" target="_blank">
        Download Resume
      </SquareLink>
    </div>

  );
};

export default Navbar;
