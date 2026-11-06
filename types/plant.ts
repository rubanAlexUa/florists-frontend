import { BackendPlantsTypes } from "@/constants/plantsTypes";

export interface Plant {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  type: BackendPlantsTypes;
  productImage: string;
  rating: number;
}

export interface PlantList {
  page: number;
  perPage: number;
  totalPages: number;
  totalPlants: number;
  plants: Plant[];
}
