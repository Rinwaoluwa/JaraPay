
import { AppColors } from "../utils/Colors";
import "./type";

export const Theme: ThemeModel = {
  light: {
    text: AppColors.black,
    background: AppColors.white,
    tint: AppColors.primary100,
    icon: AppColors.white,
    tabIconDefault: AppColors.grey,
    tabIconSelected: AppColors.primary,
    primary: AppColors.primary,
  },
  dark: {
    //NO DARK MODE SPECIFICATIONS FOR THIS APP
    text: AppColors.white,
    background: AppColors.grey,
    tint: AppColors.primary100,
    icon: AppColors.black,
    tabIconDefault: AppColors.grey,
    tabIconSelected: AppColors.primary,
    primary: "",
  },
};
