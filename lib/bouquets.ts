import { BouquetList } from "@/types/bouquet";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getBouquets = async (page: number) => {
  const res = await axios.get<BouquetList>("/bouquets", {
    params: {
      perPage: 12,
      page,
    },
  });
  return res.data;
};

export const getBouquetById = async (bouquetId: string) => {
  const res = await axios.get(`/bouquets/${bouquetId}`, {});
  return res.data;
};
