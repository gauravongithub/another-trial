import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../Data";

// products.map((item) => (
//     console.log(item.id,item.img, item.link)
// ));
const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title">These are some of my works</h1>
        <p className="p1-desc">
          Hello, 
        </p>
      </div>
      <div className="p1-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
