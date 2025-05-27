import {ColorSchemeName} from 'react-native';

// 🔹 Colors
const lightColors = {
  primary: '#3D5AFE',
  background: '#FFFFFF',
  text: '#333333',
  gray: '#A9A9A9',
  success: '#4CAF50',
  danger: '#f44336',
  backDrop: '#00000033',
};

const darkColors = {
  primary: '#7986CB',
  background: '#121212',
  text: '#F4F4F4',
  gray: '#F4F4F4',
  success: '#81C784',
  danger: '#EF5350',
  backDrop: '#FFFFFF1A',
};

export type ColorSet = typeof lightColors;

// 🔹 Font Sizes
const fontSizes = {
  sm: 14,
  md: 16,
  lg: 20,
};

export type FontSizes = typeof fontSizes;

// 🔹 Spacing
const padding = {
  sm: 8,
  md: 16,
  lg: 24,
};

export type Padding = typeof padding;

// 🔹 Radius
const radius = {
  sm: 6,
  md: 10,
  lg: 16,
};

export type Radius = typeof radius;

// 🔹 Final Theme Type
export interface ThemeType {
  colors: ColorSet;
  fontSizes: FontSizes;
  padding: Padding;
  radius: Radius;
}

// 🔹 Get Theme Based on Scheme
export const getTheme = (scheme: ColorSchemeName = 'dark'): ThemeType => {
  const colorSet = scheme === 'dark' ? darkColors : lightColors;

  return {
    colors: colorSet,
    fontSizes,
    padding,
    radius,
  };
};
