import { ReactNode } from "react";

interface NavBarProps {
  links: string[];
  onLinkClick: (link: string) => void;
}

interface NavLinkProps {
  path: string;
  component: ReactNode|null;
}
export type { NavBarProps, NavLinkProps };
