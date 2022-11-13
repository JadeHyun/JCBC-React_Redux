import React from "react";
import { data } from "../../database/data";
import "./homePage.css";
import ProductCart from "../../components/ProductCard/ProductCard";

export default function HomePage() {
  return (
    <div>
      <main className="product">
        <ul className="product-list">
          {data.map((item) => {
            return (
              <ProductCart
                key={item.id}
                productName={item.productName}
                price={item.price}
                thumbnailImg={item.thumbnailImg}
              />
            );
          })}
        </ul>
        <a className="cart-link" href="#"></a>
      </main>
    </div>
  );
}
