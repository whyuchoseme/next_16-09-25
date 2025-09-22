"use client";

import { useParams } from "next/navigation";
import styles from "./RacketItem.module.scss";

type Props = {
  params: Promise<{ id: number }>;
  className?: string;
};

const RacketItem = ({ params, className }: Props) => {
  const { id } = useParams();
  console.log("id", id);
  return <div>racket_item_page__{id} </div>;
};

export default RacketItem;
