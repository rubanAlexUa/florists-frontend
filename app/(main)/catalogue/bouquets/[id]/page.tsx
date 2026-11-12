import Image from "next/image";
import css from "@/app/(main)/catalogue/[plantsType]/[id]/Plant.module.css";
import c from "./Bouquet.module.css";
import AddToCart from "@/components/AddToCart/AddToCart";
import { getBouquetById } from "@/lib/bouquets";
import { Bouquet } from "@/types/bouquet";
import Link from "next/link";
import { Plant } from "@/types/plant";
import ButtonAddToCart from "@/components/ButtonAddToCart/ButtonAddToCart";

type Props = {
  params: Promise<{ id: string }>;
};

interface FlowerProps {
  amount: number;
  plantId: Plant;
}

const BouquetIdPage = async ({ params }: Props) => {
  const { id } = await params;
  const bouquet = await getBouquetById(id);
  const plantURL = bouquet.productImage
    ? bouquet.productImage
    : "/default-bouquet-img.png";
  return (
    <div className="wrapper">
      <div className={css["main-info"]}>
        <div className={css["image-wrappers"]}>
          <Image
            className={css["plant-image"]}
            src={plantURL}
            alt="bouquet image"
            width={400}
            height={500}
          />
        </div>
        <div className={css["product-info"]}>
          <h2 className={css["plant-name"]}>{bouquet.name}</h2>

          <div className={css["little-info"]}>
            <h3 className={css["plant-rating"]}>rating: {bouquet.rating}/10</h3>
            <h3 className={css["plant-price"]}>price: {bouquet.price}</h3>
          </div>

          <div className={css["description-container"]}>
            <h3 className={css["description-heading"]}>Description: </h3>
            <p className={css["plant-description"]}>{bouquet.description}</p>
          </div>

          <h3 className={css["description-heading"]}>Flowers in bouquet:</h3>
          <ul className={c["plant-flowers-info"]}>
            {bouquet.flowers.map((flower: FlowerProps) => (
              <li key={flower.plantId._id} className={c["flower-info-item"]}>
                <Link href={`/catalogue/flowers/${flower.plantId._id}`}>
                  <div className={c["img-box"]}>
                    <Image
                      className={c["flower-image"]}
                      src={
                        flower.plantId.productImage || "/default-plant-img.png"
                      }
                      alt="bouquet image"
                      width={200}
                      height={200}
                    />
                  </div>

                  {/* <Image
                    className={css["plant-image"]}
                    src={flower.productImage}
                    alt="flower image"
                    width={400}
                    height={500}
                  /> */}
                </Link>
                <p className={c["flower-amount-box"]}>×{flower.amount}</p>
              </li>
            ))}
          </ul>
          <ButtonAddToCart
            cartProduct={{
              productId: id,
              name: bouquet.name,
              productImage: plantURL,
              pricePerOne: bouquet.price,
              amount: 1,
              type: "bouquets",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BouquetIdPage;
