import Head from "next/head";

import { CustomThemeProvider } from "../state/context/ThemeContext";
import App from "../../src/App";

const Home = () => {
  return (
    <CustomThemeProvider>
      <Head>
        <title>imjpfeliciano.dev</title>
      </Head>
      <App />
    </CustomThemeProvider>
  );
};

export default Home;
