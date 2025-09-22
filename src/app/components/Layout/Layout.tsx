import { Header } from "@app/components/Header";
import { Container } from "@app/components/Container";
import { Footer } from "@app/components/Footer";

import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.layoutHeader} />
      <main className={styles.layoutContent}>
        <Container>{children}</Container>
      </main>
      <Footer className={styles.layoutFooter} />
    </div>
  );
};
