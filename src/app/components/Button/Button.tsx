import styles from "./Button.module.scss";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  buttonType?: string;
  viewVariant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  buttonType,
  viewVariant,
  disabled,
  ...rest
}: Props) => {
  console.log("buttonType", buttonType);
  // const typeClass =
  //   buttonType && buttonType in styles
  //     ? styles[buttonType as keyof typeof styles]
  //     : undefined;

  return (
    <button
      className={clsx(
        className,
        viewVariant && styles[viewVariant],
        buttonType && styles[buttonType],
        disabled && styles.disabled
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
