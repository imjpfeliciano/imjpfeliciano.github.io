import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../../utils/particles";
import { useTheme } from "../../../state/context/ThemeContext";
import Themes from "../../../utils/theme";

const ParticlesBackground = ({ color }: { color: string }) => {
  const particlesInit = useCallback((main: any): any => {
    loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        ...particlesConfig,
        particles: {
          ...particlesConfig.particles,
          color: {
            value: color,
          },
          links: {
            ...particlesConfig.particles.links,
            color,
          },
        },
      }}
      init={particlesInit}
      style={{ zIndex: -1 }}
    />
  );
};

const ParticlesWrapper = () => {
  const { activeTheme } = useTheme();

  return <ParticlesBackground color={Themes[activeTheme].colors.particles} />;
};

export default ParticlesWrapper;
