import { Products } from "../../components/Products/Products"
import { Subscribe } from "../../components/Subscribe/Subscribe";
import products from '../../json/products.json';
export const Shop = () => {
  return (
    <>
    <div className="app__shop shop">
      <div className="shop__header textH1 headerText">
        Shop
      </div>
      <div className="shop__products">
        <Products products={products} />
      </div>
    </div>
    <Subscribe />
    </>
  )
}