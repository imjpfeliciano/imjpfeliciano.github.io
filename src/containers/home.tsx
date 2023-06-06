import Head from "next/head";

import { CustomThemeProvider } from "../state/context/ThemeContext";
import App from "../../src/App";

const Home = () => {
  return (
    <CustomThemeProvider>
      <Head>
        <title>imjpfeliciano.dev</title>
        <meta
          name="description"
          content="Welcome to Jonathan's personal page!"
        />
      </Head>
      <App />
    </CustomThemeProvider>
  );
};

export default Home;
