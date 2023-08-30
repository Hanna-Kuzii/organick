import React from "react";
import { useState, useContext } from "react";
import { Good } from "../../types/good";
import image from "../../images/products/calabrese_broccoli.svg";
import star from "../../images/products/star.svg";
import { OrderGood } from "../../types/orderGood";
import { OrderListContext } from "../../hooks/OrderListContext";

interface ProductProps {
  setModalProduct: React.Dispatch<React.SetStateAction<boolean>>;
  good: Good;
  ratingStars: (arg: number) => string[];
}

interface OrderItem {
  good: Good;
  quantity: number;
}

export const Product: React.FC<ProductProps> = ({
  setModalProduct,
  good,
  ratingStars,
}) => {
  const [quantity, setQuantity] = useState("1");
  const { orderList, setOrderList } = useContext(OrderListContext);
  const [showDescription, setShowDescription] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowAdditionalInfo(false);
  };

  const handleAdditionalInfoClick = () => {
    setShowDescription(false);
    setShowAdditionalInfo(true);
  };

  const handleOrderItem = () => {
    if (parseInt(quantity) > 0) {
      const newOrderItem = { good, quantity: parseInt(quantity) };

      const updatedOrderList: OrderItem[] = orderList.map(
        (order: OrderItem) => {
          if (order.good.id === newOrderItem.good.id) {
            return {
              ...order,
              quantity: order.quantity + newOrderItem.quantity,
            };
          }
          return order;
        }
      );

      const isNewItem = !updatedOrderList.some(
        (order: OrderItem) => order.good.id === newOrderItem.good.id
      );
      if (isNewItem) {
        updatedOrderList.push(newOrderItem);
      }

      setOrderList(updatedOrderList);
      localStorage.setItem("orderList", JSON.stringify(updatedOrderList));

      setQuantity("");
      setModalProduct(false);
    }
  };
  return (
    <>
      <div className="overlay" onClick={() => setModalProduct(false)}></div>
      <div className="product">
        <div className="product__content">
          <div className="product__information information">
            <div className="information__picture picture">
              <img
                src={require("../../images/products/" + good.image)}
                alt={good.name}
                className="picture__image"
              />
              <div className="picture__category paragraph">{good.category}</div>
            </div>
            <div className="information__details details">
              <div className="details__more">
                <div className="details__name textH3">{good.name}</div>
                <div className="details__rating">
                  {ratingStars(good.rating).map((rate: string, index) => (
                    <svg
                      className={`details__star star star_${rate}`}
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        fill={rate}
                      ></path>
                    </svg>
                  ))}
                </div>
                <div className="details__price price">
                  {good.priceOld && (
                    <div className="details__price-full price-full textH6">
                      $ {good.priceOld}.00
                    </div>
                  )}

                  <div className="details__price-sale price-sale textH6">
                    $ {good.priceNew}.00
                  </div>
                </div>
                <div className="details__description paragraph">
                  {good.information}
                </div>
              </div>
              <div className="details__buying buying">
                <div className="buying__title textH6">Quantity:</div>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  className="buying__quantity textH6"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  className="buying__button default-button default-button_dark"
                  onClick={handleOrderItem}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="product__add-info add-info">
            <div className="add-info__buttons">
              <button
                className={`add-info__button default-button default-button_dark ${
                  showDescription ? "default-button_dark_active" : ""
                }`}
                onClick={handleDescriptionClick}
              >
                Product Description
              </button>
              <button
                className={`add-info__button default-button default-button_dark ${
                  showAdditionalInfo ? "default-button_dark_active" : ""
                }`}
                onClick={handleAdditionalInfoClick}
              >
                Additional Info
              </button>
            </div>
            <div
              className={`add-info__description add-info__text paragraph ${
                showDescription ? "add-info__text_active" : ""
              }`}
            >
              {good.description}
            </div>
            <div
              className={`add-info__additional add-info__text paragraph ${
                showAdditionalInfo ? "add-info__text_active" : ""
              }`}
            >
              {good.additional_info}
            </div>
          </div>
        </div>
        <button className="product__close" onClick={() => setModalProduct(false)}>
          X
        </button>
      </div>
    </>
  );
};
