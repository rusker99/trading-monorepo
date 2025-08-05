
export interface IBaseModel
{
  id: number
  readonly modelName: ModelName;
}

export const modelNames =
  [
    "AccountPerformance",
  ];

export type ModelName = (typeof modelNames)[number];
