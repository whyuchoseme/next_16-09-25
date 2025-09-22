import styles from "./Container.module.scss";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  viewVariant?: string;
};

export const Container = ({ children, className, viewVariant }: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        viewVariant && styles[viewVariant],
        className
      )}
    >
      {children}
    </div>
  );
};
