interface ThemeProps {
  [key: string]: {
    name: string;
    colors: {
      [key: string]: string;
    };
    font: {
      color: {
        [key: string]: string;
      };
    };
  };
}

const LightTheme = {
  name: "light-content",
  colors: {
    primary: "#7f9cf5",
    primaryDark: "#5a67d8",
    white: "#ffffff",
    indigo200: "#c3dafe",
    indigo500: "#667eea",
    gray: "#718096",
    blueGray: "#e4e4e7",
    black: "#000000",
    cardBg: "#ffffff",
    bgColor: "#f7fafc",
    buttonText: "white",
    shadow: "#0000001a",
  },
  font: {
    color: {
      primary: "#718096",
      secondary: "#ddd",
      title: "white",
      serviceTitle: "black",
      sectionTitle: "black",
      linkHover: "#5a67d8",
    },
  },
};

const DarkTheme = {
  name: "dark-content",
  colors: {
    primary: "#000",
    primaryDark: "greenyellow",
    white: "#000",
    indigo200: "#000",
    indigo500: "#000",
    gray: "#000",
    blueGray: "#000",
    black: "#000",
    cardBg: "rgb(51 65 85);",
    bgColor:
      "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,15,15,1) 40%, rgba(31,41,43,1) 100%);",
    buttonText: "white",
    shadow: "#0000001a",
  },
  font: {
    color: {
      primary: "#718096",
      secondary: "#ddd",
      title: "white",
      serviceTitle: "#6b7280",
      sectionTitle: "white",
      linkHover: "greenyellow",
    },
  },
};

const Themes: ThemeProps = {
  "light-content": LightTheme,
  "dark-content": DarkTheme,
};

export default Themes;
