import ColorLib from 'tinycolor2';

ColorLib.prototype.constructor = ColorLib;

export default class Color extends ColorLib {
  _applyModification(...args:any) {
    // @ts-ignore
    return super._applyModification.apply(this.clone(), args)
  }

  setAlpha(...args:any) {
    return super.setAlpha.apply(this.clone(), args);
  }
}

export const red = new Color('#EB4037');
export const darkRed = red.desaturate(30).darken(30);

export const blue = new Color('#74798D');
export const darkBlue = blue.saturate(10).darken(30);
// 323a3e

export const green = new Color('#838D7C');
export const darkGreen = green.darken(30);

export const tan = new Color('#F7D5AE');
export const darkTan = tan.desaturate(55).spin(5).darken(45);

export const salmon = new Color('#E4967D');
export const darkSalmon = salmon.desaturate(25).spin(-10).darken(35);

export const white = new Color('#fff');
export const offWhite = new Color('#f6f6f6');
export const lightGray = new Color('#e5e5e5');
export const gray = new Color('#a7a7a7');
export const darkGray = new Color('#353535');
export const black = new Color('#222');

export const bgLight = new Color('#f5f4ff');
export const bgDark = blue.darken(35);

export const lightTheme = {
  bg: bgLight,
  text: black,
  red: red,
  blue: blue,
  green: green,
  tan: tan,
  salmon: salmon,
  white: white,
  offWhite: offWhite,
  lightGray: lightGray,
  gray: gray,
  darkGray: darkGray,
  black: black
}

export const darkTheme = {
  bg: bgDark,
  text: white,
  red: darkRed,
  blue: darkBlue,
  green: darkGreen,
  tan: darkTan,
  salmon: darkSalmon,
  white: black,
  offWhite: darkGray,
  lightGray: gray,
  gray: lightGray,
  darkGray: offWhite,
  black: white
}
