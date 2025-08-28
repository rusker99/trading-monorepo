
export interface PositionRequest
{
    orderBy: "LAST" | "CHANGE" | "SYMBOL" | "AVERAGE_PRICE" | "TOTAL_QUANTITY" | "TOTAL_COST",
    order: "ASC" | "DESC",
}
