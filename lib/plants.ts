import {
  BackendPlantsTypes,
  PLANTS_TYPES_MAP,
  PlantsTypes,
} from "@/constants/plantsTypes";
import { Plant, PlantList } from "@/types/plant";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface GetPlantsProps {
  page: number;
  type: PlantsTypes;
}

export const getPlants = async ({ page, type }: GetPlantsProps) => {
  const res = await axios.get<PlantList>("/plants", {
    params: {
      perPage: 12,
      page,
      type: PLANTS_TYPES_MAP[type],
    },
  });
  return res.data;
};

export const getPlantById = async (plantId: string) => {
  const res = await axios.get<Plant>(`/plants/${plantId}`, {});
  return res.data;
};
