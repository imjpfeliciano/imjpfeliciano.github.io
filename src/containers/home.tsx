'use client';

import App from "../../src/App";
import { themes, useTheme } from "../state/context/ThemeContext";

const Home = () => {
  const { activeTheme } = useTheme();
  console.log({ activeTheme })

  return (
    <App theme={activeTheme === themes.light ? 'light' : 'dark'} />

  );
};

export default Home;
