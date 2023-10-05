import clsx from "clsx";
import { useTheme } from "../../state/context/ThemeContext";
import SquareButton from "../ui/SquareButton";
import SquareLink from "../ui/SquareLink";


const Link = ({ href, children, isBold }: { href: string; children: React.ReactNode; isBold?: boolean; }) => {
  return (
    <a href={href} className={clsx("text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-gray-300 mr-[1rem] hover:border-b-2 border-blue-700 dark:border-lime-400", {
      "font-bold": isBold,
    })}>
      {children}
    </a>
  )
}

const Navbar = () => {
  const { changeTheme, activeTheme } = useTheme();

  return (

    <div className="md:max-w-screen-xl flex flex-row justify-between m-auto py-2">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="#" isBold>
          Jonathan Peraza F
        </Link>
        <Link href="#about">Biography</Link>
        <Link href="#services">Services</Link>
        <Link href="#experience">Experience</Link>
        {/* <Link href="#portfolio">Portfolio</Link> */}
        <Link href="#contact">Contact</Link>
      </div>
      <SquareButton onClick={changeTheme}>
        {activeTheme === 'light-content' ? '🌚' : '🌞'}
      </SquareButton>
      <SquareLink href="/assets/docs/resume.pdf" target="_blank">
        Download Resume
      </SquareLink>
    </div>

  );
};

export default Navbar;
