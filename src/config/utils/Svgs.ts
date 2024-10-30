import logo from "@/assets/images/svg/logo.svg";
import welcome from "@/assets/images/svg/welcome.svg";
import otp from "@/assets/images/svg/otp.svg";
import password from "@/assets/images/svg/password.svg";
import pin from "@/assets/images/svg/pin.svg";
import demoLoading from "@/assets/images/svg/demo_loading_animation.svg";
import home from "@/assets/images/svg/home.svg";
import history from "@/assets/images/svg/history.svg";
import settings from "@/assets/images/svg/settings.svg";
import transfer from "@/assets/images/svg/transfer.svg";
import qrCode from "@/assets/images/svg/qr_code.svg";

export const SvgIcons = {
  logo: logo,
  welcome: welcome,
  otp: otp,
  password: password,
  pin: pin,
  "demo-loading": demoLoading,
  home: home,
  history: history,
  settings: settings,
  transfer: transfer,
  "qr-code": qrCode,
};

export type SvgName = keyof typeof SvgIcons;
