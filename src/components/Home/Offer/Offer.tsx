import { Products } from "../../Products/Products"
import products from '../../../json/products.json';
import { Good } from "../../../types/good";

export const Offer = () => {

  const productsOffer: Good[] = [];
  products.forEach((good: Good, index) => {
    if (index < 4) {
      productsOffer.push(good)
    }
  })

  return (
    <>
      <div className="home__offer offer">
        <div className="offer__titles">
          <div className="offer__subtitle italic">Offer</div>
          <div className="offer__title textH2">We Offer Organic For You</div>
        </div>
        <div className="offer__products">
          <Products products={productsOffer}/>
        </div>
      </div>
    </>
  )
}