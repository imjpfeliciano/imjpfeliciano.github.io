import { useTheme } from "./state/context/ThemeContext";
import Themes from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import {
  AboutSection,
  ServicesSection,
  ExperienceSection,
  ContactSection,
} from "./components/Sections";
import ParticlesBackground from "./components/ui/ParticlesBackground";

const AppContent = styled.div`
  background: ${(props) => props.theme.colors.bgColor};
`;

const App = () => {
  const { activeTheme } = useTheme();
  const currentTheme = Themes[activeTheme];

  return (
    <ThemeProvider theme={currentTheme}>
      <ParticlesBackground />
      <AppContent>
        <Navbar />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </AppContent>
    </ThemeProvider>
  );
};

export default App;
