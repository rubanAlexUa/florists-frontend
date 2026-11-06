import { Plant } from "@/types/plant";

export interface Bouquet {
  _id: string;
  name: string;
  description: string;
  price: number;
  flowers: Plant[];
  state: "active" | "archive";
  sellerId: string;
  productImage: string;
}

export interface BouquetList {
  page: number;
  perPage: number;
  totalPages: number;
  totalBouquets: number;
  bouquets: Bouquet[];
}
