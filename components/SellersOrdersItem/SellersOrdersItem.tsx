import Image from "next/image";
import Link from "next/link";
import { Order } from "@/types/orders";
import css from "./SellersOrderItem.module.css";
import Triangle from "@/public/triangle.svg";
import { getUserById } from "@/lib/user";
import { useEffect, useState } from "react";

type SellersOrdersItemProps = {
  order: Order;
};

const SellersOrdersItem = ({ order }: SellersOrdersItemProps) => {
  const { createdAt, customerId, totalPrice } = order;

  const [userName, setUsername] = useState();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getUserById(customerId);
        setUsername(user.customerName);
      } catch {}
    };
    loadUser();
  }, [customerId]);

  const date = new Date(createdAt).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Kyiv",
  });

  return (
    <li className={css["purchase-item"]}>
      <div className={css["svg-wrapper"]}>
        <Triangle className={css["triangle-svg"]} />
      </div>
      <div className={css["purchase-info"]}>
        <div className={css["data-container"]}>
          <p className={css["data-para"]}>Date</p>
          <h3 className={css["date-number"]}>{date}</h3>
        </div>
        <div className={css["data-container"]}>
          <p className={css["data-para"]}>Customer name</p>
          <h3 className={css["date-number"]}>{userName}</h3>
        </div>
        <div className={css["data-container"]}>
          <p className={css["data-para"]}>Total price</p>
          <h3 className={css["total-price-number"]}>{totalPrice} $</h3>
        </div>
      </div>
    </li>
  );
};

export default SellersOrdersItem;
