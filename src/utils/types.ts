import { IconType } from "react-icons";

export type Theme = "light" | "dark";

export type NavigationLinkType = {
  path: string;
  text: string;
  icon?: IconType;
};

export type SingleSlideType = {
  icon: object;
  title: string;
  text: string;
  extraText: string;
};
