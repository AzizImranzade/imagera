import { ReactNode } from "react";

export type menu = {
  title: string;
  path: string;
  icon: ReactNode;
};

export type feature = {
  title: string;
  text: string;
  icon: ReactNode;
};

export type howItWork = {
  title: string;
  text: string;
  image: string;
};

export type ImageType = {
  url: URL;
  date: Date;
  id: string;
};
