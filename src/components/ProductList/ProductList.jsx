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
        <h1 className="p1-title">❤These are some of my works❤</h1>
        <p className="p1-desc">
          Hello, these are my projects which I have made while learning Web Development. As stated I have made these projects using MERN tech stack(MongoDB, ExpressJs, ReactJs, NodeJs).
          To Visit these projects, please click on the image.
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
