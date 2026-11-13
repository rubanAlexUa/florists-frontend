import { PLANTS_TYPES, PlantsTypes } from "@/constants/plantsTypes";
import { getPlants } from "@/lib/plants";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PlantsClient from "./Plants.client";

type Props = {
  params: Promise<{ plantsType: PlantsTypes }>;
};

const PlantsPage = async ({ params }: Props) => {
  const { plantsType } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["plants", plantsType, 1],
    queryFn: () => getPlants({ page: 1, type: plantsType }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PlantsClient type={plantsType} />
    </HydrationBoundary>
  );
};

export default PlantsPage;
