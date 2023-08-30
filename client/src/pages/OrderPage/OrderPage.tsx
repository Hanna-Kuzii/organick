import { useState, useEffect } from "react";
import axios from "axios";

interface Order {
  orderId: number;
  userId: number;
  customer: string;
  email: string;
  phone: number;
  address: string;
  cartId: number;
  totalAmount: number;
  discount: number;
  message: string;
  created: string;
  productID: number;
  productName: string;
  quantity: number;
}
interface OrderInfo {
  orderId: number;
  userId: number;
  customer: string;
  email: string;
  phone: number;
  address: string;
  cartId: number;
  totalAmount: number;
  discount: number;
  message: string;
  created: string;
}

interface Product {
  cartId: number;
  productID: number;
  productName: string;
  quantity: number;
}

export const OrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [cartId, setCartId] = useState(0);
  const [orderId, setOrderId] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await axios.get("http://localhost:8000/order");
        setOrders(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);
  useEffect(() => {
    if (cartId !== null) {
      const filteredProducts = orders.filter((order) => order.cartId === cartId);
      setProducts(filteredProducts);
    }
  }, [cartId, orders]);

  const ordersInfo: OrderInfo[] = [];

  orders.forEach((order: Order) => {
    if (
      !ordersInfo.some((inform: OrderInfo) => inform.cartId === order.cartId)
    ) {
      ordersInfo.push({
        orderId: order.orderId,
        userId: order.userId,
        customer: order.customer,
        email: order.email,
        phone: order.phone,
        address: order.address,
        cartId: order.cartId,
        totalAmount: order.totalAmount,
        discount: order.discount,
        message: order.message,
        created: order.created,
      });
    }
  });

  const dateOrder = (date: string) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  };
  return (
    <>
      <div className="app__order-page order-page">
        <table className="table table-order">
          <thead className="thead-dark table__head">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Customer</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Cart ID</th>
              <th scope="col">Total amount</th>
              <th scope="col">Discount</th>
              <th scope="col">Message</th>
              <th scope="col">Created</th>
            </tr>
          </thead>
          <tbody>
            {ordersInfo.map((order: OrderInfo) => (
              <tr key={order.orderId}
              className={`${
                orderId === order.orderId
                  ? "table-order__tr_choosed"
                  : ""
              }`}
              onClick={() => {
                setCartId(order.cartId);
                setOrderId(order.orderId);
              }}>
                <th
                  scope="row"
                  className="table-order__orderId"
                >
                  {order.orderId}
                </th>
                <td>{order.userId}</td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.cartId}</td>
                <td>{order.totalAmount}</td>
                <td>{order.discount}</td>
                <td>{order.message}</td>
                <td>{dateOrder(order.created)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {cartId !== 0 && (
          <table className="table table-bordered table-products">
            <thead className="table__head">
              <caption className="table-products__header">
                Order No:{orderId}
              </caption>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody className="table-products__body">
              {products.map((product: Product) => (
                <tr key={product.cartId + product.productID + product.quantity} >
                  <th scope="row">{product.productID}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
