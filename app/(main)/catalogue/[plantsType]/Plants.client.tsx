"use client";

import { PlantsTypes } from "@/constants/plantsTypes";
import { getPlants } from "@/lib/plants";
import { useQuery } from "@tanstack/react-query";

import ProductsList from "@/components/ProductsList/ProductsList";
import css from "./Plants.module.css";
import { ProductCardData } from "@/components/ProductCard/ProductCard";

type Props = {
  type: PlantsTypes;
};

const PlantsClient = ({ type }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", type],
    queryFn: () => getPlants({ page: 1, type }),
  });
  const products = data?.plants.map((plant): ProductCardData => ({
    id: plant._id,
    name: plant.name,
    price: plant.price,
    productImage: plant.productImage,
    href: `/catalogue/${type}/${plant._id}`,
    type: plant.type,
    amount: 1,
  }));
  return (
    <>
      <div className="wrapper">
        <div className={css["page-info"]}>
          <h2 className="page-heading">Products catalogue</h2>
          <h3 className={css["product-category"]}>Category/{type}</h3>
        </div>
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default PlantsClient;
