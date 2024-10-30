interface ThemeModel {
  light: {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
    primary: string;
  };
  dark: {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
    primary: string;
  };
}

type Props = {
  children: React.ReactNode;
  themeValue: "light" | "dark";
};


interface ThemeContextModel {
  theme: "light" | "dark";
  setTheme: () => void;
}
