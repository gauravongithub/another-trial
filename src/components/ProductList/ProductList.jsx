import "./ProductList.css"
import Product from "../Product/Product"
import { products } from "../../Data"

    // products.map((item) => (
    //     console.log(item.id,item.img, item.link)
    // ));
const ProductList = () =>{
    return (
       <div className="p1">
       <div className="p1-texts">
           <h1 className="p1-title">Create & inspire. It's lama</h1>
           <p className="p1-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima soluta inventore tenetur, vero voluptatibus blanditiis a culpa. Odio ad laudantium ducimus quas qui aliquid dolorum nulla sit rerum incidunt!</p>
       </div>
       <div className="p1-list">
          {

              products.map((item)=>(
                  <Product
                      key = {item.id}
                      img = {item.img}
                      link = {item.link}
                  />
              ))
          }
       </div>
       </div>
    )
}

export default ProductList;