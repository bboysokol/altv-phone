import '@emotion/react';

type DarkLightColor = {
  dark: string;
  light: string;
};

type FiftyToNineColors = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      brand: {
        FiftyToNineColors;
        primary: string;
        window: {
          header: string;
          sub: string;
          bg: string;
        };
        green: DarkLightColor;
        yellow: DarkLightColor;
        blue: DarkLightColor;
      };
      gray: FiftyToNineColors;
    };
  }
}
