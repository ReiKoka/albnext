import { ElementType } from "react";
import { IconType } from "react-icons";

export type Theme = "light" | "dark";

export type NavigationLinkType = {
  path: string;
  text: string;
  icon?: IconType;
};

export type SingleSlideType = {
  icon: ElementType;
  title: string;
  text: string;
};
