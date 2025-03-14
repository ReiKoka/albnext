//prettier-ignore
import { HiOutlineArrowTrendingUp, HiOutlineHome, HiOutlineQuestionMarkCircle, HiOutlineServerStack} from "react-icons/hi2";
import { NavigationLinkType } from "./types";

export const navigationLinks: NavigationLinkType[] = [
  {
    path: "/",
    text: "home",
    icon: HiOutlineHome,
  },
  {
    path: "/why-albania",
    text: "why Albania",
    icon: HiOutlineArrowTrendingUp,
  },
  {
    path: "/how-it-works",
    text: "how it works",
    icon: HiOutlineQuestionMarkCircle,
  },
  {
    path: "/services",
    text: "services",
    icon: HiOutlineServerStack,
  },
];
