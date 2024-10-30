export class AppColors {
  static grey10 = "#E0E0E7";
  static grey = "#6C757D";
  static white = "#fff";
  static black = "11181C";
  static blueGray = "#687076";
  //transparent
  static transparent = "rgba(0,0,0,0)";
  
  //
  static red = "#F44336";

  //PRIMARY COLOR VARIANTS
  static primary = "#50B780";
  static primary50 = "#E2F3EA";
  static primary100 = "#73C599";
  static primary200 = "#ABDCC2";
  static primary300 = "#C7E8D6";
  static primary400 = "#E3F3EB";
}


export type AppColorPallete = keyof typeof AppColors;