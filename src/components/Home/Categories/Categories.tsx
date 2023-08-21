import { useState } from "react";
import { Products } from "../../Products/Products";
import products from "../../../json/products.json";
// import '../../../images/products/calabrese_broccoli.svg'

export const Categories = () => {
  const [isLoad, setIsLoad] = useState("none");

  const load = document.querySelector(
    ".categories__button_load"
  ) as HTMLElement | null;
  const hide = document.querySelector(
    ".categories__button_hide"
  ) as HTMLElement | null;

  const handleLoad = () => {
    if (load) {
      load.style.display = "none";
    }
    if (hide) {
      hide.style.display = "block";
    }
  };

  const handleHide = () => {
    if (load) {
      load.style.display = "block";
    }
    if (hide) {
      hide.style.display = "none";
    }
  };

  return (
    <>
      <div className="home__categories categories">
        <div className="categories__titles">
          <div className="categories__subtitle italic">Categories</div>
          <div className="categories__title textH2">Our products</div>
        </div>
        <div className="categories__products">
          <Products products={products} />
        </div>
        <button
          className="categories__button categories__button_load default-button default-button_dark"
          onClick={handleLoad}
        >
          Load More
        </button>
        <button
          className="categories__button categories__button_hide default-button default-button_dark"
          onClick={handleHide}
        >
          Hide All
        </button>
      </div>
    </>
  );
};
