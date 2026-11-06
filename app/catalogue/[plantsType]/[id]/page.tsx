import Image from "next/image";
import { getPlantById } from "@/lib/plants";
import css from "./Plant.module.css";
import AddToCart from "@/components/AddToCart/AddToCart";
import { getPlantsTypeByBackend } from "@/constants/plantsTypes";

type Props = {
  params: Promise<{ id: string }>;
};

const PlantIdPage = async ({ params }: Props) => {
  const { id } = await params;
  const plant = await getPlantById(id);
  const type = getPlantsTypeByBackend(plant.type);
  const plantURL = plant.productImage
    ? plant.productImage
    : "/default-plant-img.png";
  return (
    <div className="wrapper">
      <div className={css["main-info"]}>
        <div className={css["image-wrappers"]}>
          <Image
            className={css["plant-image"]}
            src={plantURL}
            alt="plant image"
            width={400}
            height={500}
          />
        </div>
        <div className={css["product-info"]}>
          <h2 className={css["plant-name"]}>{plant.name}</h2>

          <div className={css["little-info"]}>
            <h3 className={css["plant-rating"]}>rating: {plant.rating}/10</h3>
            <h3 className={css["plant-price"]}>price: {plant.price}</h3>
          </div>

          <div className={css["description-container"]}>
            <h3 className={css["description-heading"]}>Description: </h3>
            <p className={css["plant-description"]}>{plant.description}</p>
          </div>
          <AddToCart
            product={{
              productId: id,
              name: plant.name,
              productImage: plantURL,
              pricePerOne: plant.price,
              availableAmount: plant.amount,
            }}
            type={type}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantIdPage;
