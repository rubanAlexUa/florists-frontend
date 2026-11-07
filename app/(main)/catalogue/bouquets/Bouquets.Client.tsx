"use client";

import { PlantsTypes } from "@/constants/plantsTypes";
import { getPlants } from "@/lib/plants";
import { useQuery } from "@tanstack/react-query";

import ProductsList from "@/components/ProductsList/ProductsList";
import css from "@/app/(main)/catalogue/[plantsType]/Plants.module.css";
import { getBouquets } from "@/lib/bouquets";
import { ProductCardData } from "@/components/ProductCard/ProductCard";

const BouquetsClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bouquets"],
    queryFn: () => getBouquets(1),
  });
  const products = data?.bouquets.map((bouquet): ProductCardData => ({
    id: bouquet._id,
    name: bouquet.name,
    price: bouquet.price,
    productImage: bouquet.productImage,
    href: `/catalogue/bouquets/${bouquet._id}`,
    type: "bouquet",
    amount: 1,
  }));
  return (
    <>
      <div className="wrapper">
        <div className={css["page-info"]}>
          <h2 className={css["product-heading"]}>Products catalogue</h2>
          <h3 className={css["product-category"]}>Category/bouquets</h3>
        </div>
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default BouquetsClient;
