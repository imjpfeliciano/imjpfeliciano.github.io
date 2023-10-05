import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  AboutSection,
  ExperienceSection,
  ServicesSection
} from "./components/Sections";


interface AppProps {
  theme: 'light' | 'dark';
}

const App: React.FC<AppProps> = ({ theme }) => {

  return (
    <div className={theme}>
      {/* <ParticlesBackground /> */}
      <div className="bg-white dark:bg-black">
        <Navbar />
        <main className="flex flex-col gap-8 pb-[8rem]">
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
