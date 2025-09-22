import clsx from "clsx";

import styles from "./ProductItem.module.scss";
import { Link } from "@app/components/Link";
import Image from "next/image";

type Props = {
  className?: string;
  id?: number;
  name?: string;
  imageUrl?: string;
};

export const ProductItem = ({ className, id, name, imageUrl }: Props) => {
  return (
    <Link href={`${id}`} className={clsx(styles.productItem, className)}>
      <Image src={`${imageUrl}`} alt={`${name}`} width={350} height={400} />
      <p>{name}</p>
    </Link>
  );
};
