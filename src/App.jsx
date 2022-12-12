import { useTheme } from "./state/context/ThemeContext";
import Themes from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";

import {
  AboutSection,
  ServicesSection,
  ExperienceSection,
  ContactSection,
} from "./components/sections";
const App = () => {
  const { activeTheme } = useTheme();
  const currentTheme = Themes[activeTheme];

  return (
    <ThemeProvider theme={currentTheme}>
      <Navbar />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </ThemeProvider>
  );
};

export default App;
