export const PLANTS_TYPES_MAP = {
  flowers: "flower",
  ornamentals: "ornamental",
  else: "else",
} as const;

export type PlantsTypes = keyof typeof PLANTS_TYPES_MAP;
export type BackendPlantsTypes = (typeof PLANTS_TYPES_MAP)[PlantsTypes];

export const PLANTS_TYPES = Object.keys(PLANTS_TYPES_MAP) as PlantsTypes[];

export const isPlantVald = (value: string): value is PlantsTypes =>
  PLANTS_TYPES.includes(value as PlantsTypes);

export const getPlantsTypeByBackend = (
  backendType: BackendPlantsTypes,
): PlantsTypes => {
  return PLANTS_TYPES.find(
    (key) => PLANTS_TYPES_MAP[key] === backendType,
  ) as PlantsTypes;
};
