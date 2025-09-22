import NextLink from "next/link";

import { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.scss";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  viewVariant?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, href, viewVariant }: Props) => {
  return (
    <NextLink
      href={href}
      className={clsx(className, viewVariant && styles[viewVariant])}
    >
      {children}
    </NextLink>
    
    // Пушу сервер
  );
};
