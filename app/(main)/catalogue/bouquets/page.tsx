import { getBouquets } from "@/lib/bouquets";
import { getPlants } from "@/lib/plants";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BouquetsClient from "./Bouquets.Client";

const BouquetsPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.query({
    queryKey: ["bouquets"],
    queryFn: () => getBouquets(1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BouquetsClient />
    </HydrationBoundary>
  );
};

export default BouquetsPage;
