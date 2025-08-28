
export interface BaseModel
{
  id: number
  readonly modelName: ModelName;
}

export const modelNames =
  [
    "AccountPerformance",
  ];

export type ModelName = (typeof modelNames)[number];
