import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Container } from "@app/components/Container";
import { Link } from "@app/components/Link";

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <Container>
        <div className={styles.footerControl}>
          <Link href="/">
            <h2>Tennis Store</h2>
          </Link>
          <p>©2025 Tennis Store. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};
