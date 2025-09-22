"use client";

import { rackets } from "@materials/mock";

import clsx from "clsx";
import styles from "./RacketsPage.module.scss";

import { ProductItem } from "@app/components/ProductItem";
import { useState } from "react";
import { Button } from "@app/components/Button";

type Props = {
  className?: string;
};

const RacketsPage = ({ className }: Props) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const uniqueBrands = rackets.reduce<{ id: number; name: string }[]>(
    (acc, { brand }) => {
      if (!acc.find((b) => b.id === brand.id)) {
        acc.push(brand);
      }
      return acc;
    },
    []
  );

  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  const filteredRackets =
    selectedBrands.length > 0
      ? rackets.filter(({ brand: { name } }) => selectedBrands.includes(name))
      : rackets;

  const racketsAmount = filteredRackets.length;

  return (
    <section className={clsx(styles.racketsPage, className)}>
      <div
        className={clsx(styles.racketsPage__control, styles.racketsPageControl)}
      >
        <aside
          className={clsx(
            styles.racketsPageControl__left,
            styles.racketsPageControlLeft
          )}
        >
          <h3 className={styles.racketsPageControlLeft__title}>Бренд:</h3>
          <ul
            className={clsx(
              styles.racketsPageControlLeft__filters,
              styles.racketsPageControlLeftFilters
            )}
          >
            <Button
              viewVariant="filterResetButton"
              onClick={() => setSelectedBrands([])}
              buttonType={selectedBrands.length === 0 ? "active" : undefined}
            >
              All
            </Button>

            {uniqueBrands.map(({ id, name }) => (
              <li key={id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(name)}
                    onChange={() => toggleBrand(name)}
                  />
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.racketsPageControl__right}>
          <h1>Ракетки:</h1>
          <ul>
            {filteredRackets.map(({ id, name, imageUrl }, idx) => (
              <li
                key={id}
                className={
                  racketsAmount % 3 === 1 && idx === racketsAmount - 1
                    ? styles.lastItem
                    : racketsAmount % 3 === 2 &&
                      (idx === racketsAmount - 2 || idx === racketsAmount - 1)
                    ? styles.lastTwoItems
                    : undefined
                }
              >
                <ProductItem name={name} imageUrl={imageUrl} id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RacketsPage;
