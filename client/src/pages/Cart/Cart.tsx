import { useContext, useState } from "react";
import { OrderGood } from "../../types/orderGood";
import { OrderListContext } from "../../hooks/OrderListContext";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Cart = () => {
  const { orderList, setOrderList } = useContext(OrderListContext);
  const [isOrderForm, setIsOrderForm] = useState(false);
  const navigate = useNavigate();

  const name = useInput("");
  const email = useInput("");
  const address = useInput("");
  const phone = useInput("");
  const message = useInput("");

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const idUser = Math.floor(Math.random() * 10000000);
      const customer = {
        idCustomer: idUser,
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        message: message.value,
        created: new Date(),
      };
      await axios.post("http://localhost:8000/user", customer);

      const idCartList = Math.floor(Math.random() * 10000000);
      const cartList = {
        idCartList: idCartList,
        totalAmount: totalCost,
        discount: discount,
        created: new Date(),
      };
      await axios.post("http://localhost:8000/cart_list", cartList);

      for (const item of orderList) {
        const orderItem = {
          idOrderItem: Math.floor(Math.random() * 10000000),
          productId: item.good.id,
          orderListId: idCartList,
          quantity: item.quantity,
        };
        await axios.post("http://localhost:8000/cart_item", orderItem);
      }

      const order = {
        idOrder: Math.floor(Math.random() * 100000000),
        userId: idUser,
        orderListId: idCartList,
        created: new Date(),
      };
      await axios.post("http://localhost:8000/order", order);
    } catch (err) {
      console.log(err);
    }

    name.clear();
    email.clear();
    address.clear();
    phone.clear();
    message.clear();
    setOrderList([]);
    setIsOrderForm(false);
    localStorage.setItem("orderList", JSON.stringify([]));

    navigate("/order");
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedOrderList = orderList.map((item) => {
      if (item.good.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setOrderList(updatedOrderList);
  };

  const handleRemoveItem = (productId: number) => {
    const updatedOrderList = orderList.filter(
      (item) => item.good.id !== productId
    );
    setOrderList(updatedOrderList);
  };

  let totalCost = 0;
  let discount = 0;

  orderList.forEach((item: OrderGood) => {
    totalCost += item.quantity * item.good.priceNew;

    if (item.good.priceOld !== null) {
      discount += item.quantity * (item.good.priceOld - item.good.priceNew);
    }
  });

  return (
    <>
      <div className="app__cart cart">
        <div className="cart__header textH1 headerText">Cart</div>
        {orderList.length !== 0 && (
          <div className="cart__order order">
            <div className="order__list">
              {orderList.map((product: OrderGood) => (
                <div
                  key={product.good.id}
                  className="order__order-item order-item"
                >
                  <div className="order-item__picture">
                    <img
                      src={require("../../images/products/" +
                        product.good.image)}
                      alt={product.good.name}
                      className="order-item__image"
                    />
                  </div>
                  <div className="order-item__information">
                    <div className="order-item__name textH3">
                      {product.good.name}
                    </div>
                    <div className="order-item__price price">
                      {product.good.priceOld && (
                        <div className="order-item__price-full price-full textH6">
                          $ {product.good.priceOld}.00
                        </div>
                      )}

                      <div className="order-item__price-sale price-sale textH6">
                        $ {product.good.priceNew}.00
                      </div>
                    </div>
                  </div>
                  <div className="order-item__buying buying">
                    <div className="buying__title textH6">Quantity:</div>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="buying__quantity textH6"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.good.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </div>
                  <button
                    className="order-item__button_delete textH6"
                    onClick={() => handleRemoveItem(product.good.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className="order__cost">
              <div className="order__cost__total textH3">Total cost</div>
              <div className="order__cost__total-price order__cost__price textH3">
                {" "}
                {totalCost} $
              </div>
              <div className="order__cost__discount textH3"> Discount</div>
              <div className="order__cost__discount-price order__cost__price textH3">
                {" "}
                {discount} $
              </div>
            </div>
            {!isOrderForm && (
              <div className="order__buttons">
                <button
                  className="order__button default-button default-button_dark"
                  onClick={() => setIsOrderForm(true)}
                >
                  To order
                </button>
              </div>
            )}

            {/* <OrderForm /> */}
            {isOrderForm && (
              <form className="order__form form-order" onSubmit={submitForm}>
                <div className="form-order__block_name form-order__block">
                  <label
                    htmlFor="name"
                    className="form-order__label form-order__label_name textH6"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-order__input form-order__input_name"
                    placeholder="Your Full Name"
                    value={name.value}
                    onChange={name.onChange}
                    required
                  />
                </div>
                <div className="form-order__block_email form-order__block">
                  <label
                    htmlFor="email"
                    className="form-order__label form-order__label_email textH6"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-order__input form-order__input_email"
                    placeholder="example@yourmail.com"
                    value={email.value}
                    onChange={email.onChange}
                    required
                  />
                </div>
                <div className="form-order__block_address form-order__block">
                  <label
                    htmlFor="address"
                    className="form-order__label form-order__label_address textH6"
                  >
                    Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-order__input form-order__input_address"
                    placeholder="Your company adress"
                    value={address.value}
                    onChange={address.onChange}
                    required
                  />
                </div>
                <div className="form-order__block_phone form-order__block">
                  <label
                    htmlFor="phone"
                    className="form-order__label form-order__label_phone textH6"
                  >
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-order__input form-order__input_phone"
                    placeholder="Enter your phone"
                    value={phone.value}
                    onChange={phone.onChange}
                    required
                  />
                </div>
                <div className="form-order__block_message form-order__block">
                  <label
                    htmlFor="message"
                    className="form-order__label form-order__label_message textH6"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-order__input form-order__input_message"
                    placeholder="Some extra information"
                    value={message.value}
                    onChange={message.onChange}
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="form-order__button default-button default-button_dark"
                >
                  Confirm
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
};
