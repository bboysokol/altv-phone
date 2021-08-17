import { extendTheme } from '@chakra-ui/react';

const dev = import.meta.env.NODE_ENV;
export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    cssVarPrefix: 'altv',
  },
  colors: {
    brand: {
      50: '#E9519D',
      100: '#E9519D',
      200: '#E9519D',
      300: '#E9519D',
      400: '#E9519D',
      500: '#E9519D',
      600: '#E9519D',
      700: '#E9519D',
      800: '#E9519D',
      900: '#E9519D',
      primary: '#E9519D',
      mazebank: '#E80A0B',
      window: {
        header: 'rgb(236, 9, 140)',
        sub: 'rgba(255, 255, 255, 0.09)',
        bg: 'rgba(0, 0, 0, 0.8)',
      },
      green: {
        dark: 'rgb(48, 209, 88)',
        light: 'rgb(52, 199, 89)',
      },
      yellow: {
        dark: 'rgb(255, 204, 0)',
        light: 'rgb(255, 214, 10)',
      },
      blue: {
        dark: 'rgb(10, 132, 255)',
        light: 'rgb(0, 122, 255)',
      },
      red: {
        dark: 'rgb(255, 69, 58)',
        light: 'rgb(255, 59, 48)',
      },
    },
    gray: {
      50: 'rgb(229, 229, 234)',
      100: 'rgb(209, 209, 214)',
      200: 'rgb(199, 199, 204)',
      300: 'rgb(174, 174, 178)',
      400: 'rgb(142, 142, 147)',
      500: 'rgb(99, 99, 102)',
      600: 'rgb(72, 72, 74)',
      700: 'rgb(58, 58, 60)',
      800: 'rgb(44, 44, 46)',
      900: 'rgb(28, 28, 30)',
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          color: 'white',
        },
      },
      defaultProps: {
        focusBorderColor: 'brand.primary',
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
        _active: {
          filter: 'brightness(0.75)',
          boxShadow: 'none',
        },
      },
      defaultProps: {
        color: 'white',
      },
    },
    Checkbox: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
        _active: {
          boxShadow: 'none',
        },
      },
    },
  },
  styles: {
    global: {
      'html, body, #react_root': {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        userSelect: 'none',
        background: dev === 'development' ? 'url("/assets/images/devbg.jpg")' : 'transparent',
      },
      option: {
        fontFamily: 'Inter !important',
      },
      p: {
        margin: 0,
      },
      '#chakra-toast-manager-bottom .chakra-toast__inner': {
        maxWidth: '60vw !important',
        minWidth: '0 !important',
      },
      '#chakra-toast-manager-bottom': {
        padding: 0,
      },
      '#react_root': {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Inter !important',
        pointerEvents: 'none',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },

      '::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: 'transparent',
      },

      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  space: {
    space: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
});
