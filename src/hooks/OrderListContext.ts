import { createContext } from "react";
import { OrderGood } from "../types/orderGood";

export const OrderListContext = createContext<{ orderList: OrderGood[]; setOrderList: React.Dispatch<React.SetStateAction<OrderGood[]>> }>({
  orderList: [],
  setOrderList: () => {},
});