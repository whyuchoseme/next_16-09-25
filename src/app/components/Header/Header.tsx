"use client";

import clsx from "clsx";

import styles from "./Header.module.scss";
import { Container } from "@app/components/Container";
import { usePathname } from "next/navigation";
import { Link } from "@app/components/Link/Link";

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  const pathName = usePathname();
  return (
    <header className={clsx(styles.header, className)}>
      <Container>
        <div className={styles.headerControl}>
          <div className={styles.headerControl__left}>
            <Link href="/">
              <h2>Tennis Store</h2>
            </Link>
          </div>
          <div className={styles.headerControl__right}>
            <Link
              href={"/"}
              viewVariant={pathName === "/" ? "primary" : "base"}
            >
              Главная
            </Link>
            <Link
              href={"/rackets"}
              viewVariant={pathName === "/rackets" ? "primary" : "base"}
            >
              Ракетки
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
