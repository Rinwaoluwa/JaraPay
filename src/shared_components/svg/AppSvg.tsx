import { SvgIcons } from "@/src/config/utils/Svgs";
import { SvgProp } from "./type";

export default function AppSvg({
  name,
  size = 24,
  showBackgroundColor,
  borderRadius,
  opacity,
  backgroundColor,
  ...props
}: SvgProp) {
  const SvgIcon = SvgIcons[name];
  return SvgIcon ? <SvgIcon {...props} /> : null;
}
