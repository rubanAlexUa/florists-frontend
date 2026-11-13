"use client";

import { PlantsTypes } from "@/constants/plantsTypes";
import { getPlants } from "@/lib/plants";
import { useQuery } from "@tanstack/react-query";

import ProductsList from "@/components/ProductsList/ProductsList";
import css from "./Plants.module.css";
import { ProductCardData } from "@/components/ProductCard/ProductCard";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";

type Props = {
  type: PlantsTypes;
};

const PlantsClient = ({ type }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["products", type, currentPage],
    queryFn: () => getPlants({ page: currentPage, type }),
  });

  const totalPages = data?.totalPages ?? 0;

  const products = data?.plants.map((plant): ProductCardData => ({
    id: plant._id,
    name: plant.name,
    price: plant.price,
    productImage: plant.productImage,
    href: `/catalogue/${type}/${plant._id}`,
    type: plant.type,
    amount: 1,
    state: plant.state,
  }));
  return (
    <>
      <div className="wrapper">
        <div className={css["page-info"]}>
          <h2 className="page-heading">Products catalogue</h2>
          <h3 className={css["product-category"]}>Category/{type}</h3>
        </div>
        <ProductsList products={products} />
        {totalPages !== 0 && isSuccess && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default PlantsClient;
