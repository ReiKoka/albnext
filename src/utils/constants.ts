//prettier-ignore
import { HiOutlineArrowTrendingUp, HiOutlineHome, HiOutlineQuestionMarkCircle, HiOutlineServerStack} from "react-icons/hi2";
import { NavigationLinkType, SingleSlideType } from "./types";
import bag from "../assets/images/discount-bag.json";

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

export const sliderData: SingleSlideType[] = [
  {
    icon: bag,
    title: "Least tax burden country in Europe 0",
    text: "Whether you’re an high-growth scaling company, or an established multi-national, Albania is the ideal location for your business to grow. ",
    extraText: "Our diverse talent-pool, world-class infrastructure and pro-business environment allows business to grow with ease."
  },
  {
    icon: bag,
    title: "Least tax burden country in Europe 1",
    text: "Whether you’re an high-growth scaling company, or an established multi-national, Albania is the ideal location for your business to grow. ",
    extraText: "Our diverse talent-pool, world-class infrastructure and pro-business environment allows business to grow with ease."
  },
  {
    icon: bag,
    title: "Least tax burden country in Europe 2",
    text: "Whether you’re an high-growth scaling company, or an established multi-national, Albania is the ideal location for your business to grow. ",
    extraText: "Our diverse talent-pool, world-class infrastructure and pro-business environment allows business to grow with ease."
  },
];
