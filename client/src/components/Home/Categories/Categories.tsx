import React, { useState, useEffect } from "react";
import { Products, ProductsProps } from "../../Products/Products";
import { Good } from "../../../types/good";

export const Categories: React.FC<ProductsProps> = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState<Good[]>([]);
  const [randomProducts, setRandomProducts] = useState<Good[]>([]);
  const [isLoadVisible, setIsLoadVisible] = useState(true);
  const [isHideVisible, setIsHideVisible] = useState(false);

  useEffect(() => {
    // Shuffle the initial products array
    const shuffledInitialProducts = shuffleArray(products);
    setRandomProducts(shuffledInitialProducts);
    setVisibleProducts(shuffledInitialProducts.slice(0, 8));
  }, [products]);

  const shuffleArray = (array: Good[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleLoad = () => {
    setVisibleProducts(randomProducts);
    setIsLoadVisible(false);
    setIsHideVisible(true);
  };

  const handleHide = () => {
    setVisibleProducts(randomProducts.slice(0, 8));
    setIsLoadVisible(true);
    setIsHideVisible(false);
  };

  console.log(visibleProducts);

  return (
    <div className="home__categories categories">
      <div className="categories__titles">
        <div className="categories__subtitle italic">Categories</div>
        <div className="categories__title textH2">Our products</div>
      </div>
      <div className="categories__products">
        <Products products={visibleProducts} />
      </div>
      {isLoadVisible && (
        <button
          className="categories__button categories__button_load default-button default-button_dark"
          onClick={handleLoad}
        >
          Load More
        </button>
      )}
      {isHideVisible && (
        <button
          className="categories__button categories__button_hide default-button default-button_dark"
          onClick={handleHide}
        >
          Hide All
        </button>
      )}
    </div>
  );
};
