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

export const red = new Color('#ec635c');
export const darkRed = red.desaturate(20).darken(35);

export const blue = new Color('#74798D');
export const darkBlue = blue.saturate(10).darken(30);

// export const aqua = new Color('#65b9c1');
export const aqua = new Color('#7BCFD5');
export const darkaqua = aqua.desaturate(20).spin(5).darken(40);
// 323a3e
// 65b9c1

export const green = new Color('#838D7C');
export const darkGreen = green.darken(30);

export const tan = new Color('#DEDBD1');
export const darkTan = tan.desaturate(10).spin(-15).darken(60);

export const salmon = new Color('#E4967D');
export const darkSalmon = salmon.desaturate(25).spin(-10).darken(35);

export const white = new Color('#fff');
export const offWhite = new Color('#f6f6f6');
export const lightGray = new Color('#e5e5e5');
export const gray = new Color('#a7a7a7');
export const darkGray = new Color('#222');
export const black = new Color('#111');

// export const bgLight = new Color('#f5f4ff');
export const bgLight = offWhite;
export const bgDark = blue.darken(35);

export const lightTheme = {
  bg: bgLight,
  text: darkGray,
  red,
  blue,
  aqua,
  green,
  tan,
  salmon,
  white,
  offWhite,
  lightGray,
  gray,
  darkGray,
  black,
  dark: darkGray,
  light: offWhite
}

export const darkTheme = {
  ...lightTheme,
  bg: bgDark,
  text: white,
  red: darkRed,
  blue: darkBlue,
  aqua: darkaqua,
  green: darkGreen,
  tan: darkTan,
  salmon: darkSalmon,
  dark: offWhite,
  light: black
}
