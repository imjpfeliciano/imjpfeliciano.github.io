import type { AppProps } from "next/app";
import styled from "styled-components";
import "../styles/globals.css";

const AppContainer = styled.div``;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
