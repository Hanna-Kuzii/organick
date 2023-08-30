import { Good } from "../../types/good";
import { useState } from "react";
import { Product } from "../Product/Product";

export interface ProductsProps {
  products: Good[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  const [modalProduct, setModalProduct] = useState(false);
  const [choosedProduct, setChoosedProduct] = useState<Good>({} as Good);

  const ratingStars = (rating: number) => {
    let starsYellow = [];
    let starsWhite = [];

    for (let i = 1; i <= rating; i++) {
      starsYellow.push("#FFA858");
    }

    for (let i = 1; i <= 5 - rating; i++) {
      starsWhite.push("#f9f8f8");
    }

    return [...starsYellow, ...starsWhite];
  };

  return (
    <>
      <div className="products">
        <ul className="products__list">
          {products.map((good: Good) => {
            return (
              <li key={good.id} className="products__good good">
                <div className="good__pic">
                  <div className="good__category paragraph">
                    {good.category}
                  </div>
                  <img
                    src={require("../../images/products/" + good.image)}
                    alt={good.name}
                    className="good__image"
                  />
                </div>

                <div className="good__description">
                  <div
                    className="good__name textH6"
                    onClick={() => {
                      setModalProduct(true);
                      setChoosedProduct(good);
                    }}
                  >
                    {good.name}
                  </div>
                  <hr className="good__hr" />
                  <div className="good__add">
                    <div className="good__price">
                      {good.priceOld && (
                        <div className="good__price-full price-full textH6">
                          $ {good.priceOld}.00
                        </div>
                      )}

                      <div className="good__price-sale price-sale textH6">
                        $ {good.priceNew}.00
                      </div>
                    </div>
                    <div className="good__rating">
                      {ratingStars(good.rating).map((rate: string, index) => (
                        <svg
                          className={`star star_${rate}`}
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
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {modalProduct && (
        <Product
          setModalProduct={setModalProduct}
          good={choosedProduct}
          ratingStars={ratingStars}
        />
      )}
    </>
  );
};
