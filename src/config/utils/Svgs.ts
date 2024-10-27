import logo from '@/assets/images/svg/logo.svg';
import welcome from '@/assets/images/svg/welcome.svg';
import otp  from '@/assets/images/svg/otp.svg';
import password  from '@/assets/images/svg/password.svg';
import pin  from '@/assets/images/svg/pin.svg';

export const SvgIcons = {
logo: logo,
welcome: welcome,
otp: otp,
password: password,
pin: pin
}


export type SvgName = keyof typeof SvgIcons;