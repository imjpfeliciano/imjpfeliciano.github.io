import type { AppProps } from "next/app";
import styled from "styled-components";
import "../styles/globals.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../src/utils/particles";

const AppContainer = styled.div``;

function MyApp({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback((main: any): any => {
    loadFull(main);
  }, []);

  return (
    <AppContainer>
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        style={{ zIndex: -1 }}
      />
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
