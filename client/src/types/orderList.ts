import { OrderGood } from "./orderGood";

export interface OrderList {
  id: number | null,
  orderItems: OrderGood[],
  total_amount: number,
  discount: number,
  created: Date | null,
}