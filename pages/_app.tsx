import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #edf2f7;
  height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}

export default MyApp
