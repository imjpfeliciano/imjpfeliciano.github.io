import React from "react";
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


interface AppProps {
  theme: 'light' | 'dark';
}

const App: React.FC<AppProps> = ({ theme }) => {

  return (
    <div className={theme}>
      <ParticlesBackground />
      <div className="bg-white dark:bg-black">
        <Navbar />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
