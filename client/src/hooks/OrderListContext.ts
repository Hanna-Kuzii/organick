import { createContext } from "react";
import { OrderGood } from "../types/orderGood";
import { OrderList } from "../types/orderList";



export const OrderListContext = createContext<{ orderList: OrderGood[]; setOrderList: React.Dispatch<React.SetStateAction<OrderGood[]>> }>({
  orderList: [],
  setOrderList: () => { },
});