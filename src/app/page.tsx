"use client";

import { rackets } from "@materials/mock";

import clsx from "clsx";
import styles from "./MainPage.module.scss";

import { ProductItem } from "@app/components/ProductItem";
import { Link } from "@app/components/Link";

type Props = {
  className?: string;
};

const MainPage = ({ className }: Props) => {
  return (
    <section className={clsx(styles.mainPage, className)}>
      <div className={styles.mainPage__upper}>
        <h3>Ракетки:</h3>
        <Link href={"/rackets"}>
          <span>Все </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M14 2H5.5L4 3.5l2.836 2.836-6.25 6.25 2.828 2.828 6.25-6.25L12.5 12l1.5-1.5V2Z"
            />
          </svg>
        </Link>
      </div>

      <ul>
        {/* <button className={clsx(styles.buttons, styles.buttonLeft)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="16"
            viewBox="-4.5 0 20 20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.61 20 11 18.594 2.739 9.987l.881-.918-.005.005 7.34-7.647L9.586 0 0 9.987 9.61 20"
            ></path>
          </svg>
        </button>
        <button className={clsx(styles.buttons, styles.buttonRight)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="16"
            viewBox="-4.5 0 20 20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.39 0 0 1.406l8.261 8.607-.881.918.005-.005-7.34 7.647L1.414 20 11 10.013 1.39 0"
            ></path>
          </svg>
        </button> */}
        {rackets.map(({ id, name, imageUrl }) => (
          <li key={id}>
            <ProductItem name={name} imageUrl={imageUrl} id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
