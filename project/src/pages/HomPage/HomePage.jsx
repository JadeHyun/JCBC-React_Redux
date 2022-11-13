import React, { useState, useEffect, useContext } from "react";
import { Data } from "../../database/data";
import "./homePage.css";
import ProductCart from "../../components/ProductCard/ProductCard";

export default function HomePage() {
  const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    console.log("loading,...");
  }, []);

  useEffect(() => {
    if (loadData === null) {
      return;
    } else {
      console.log("loading finish");
      console.log(loadData);
    }
  }, [loadData]);

  useContext(Data).then((d) => {
    setLoadData(d);
    console.log(d);
  });

  return (
    <div>
      <main className="product">
        <ul className="product-list">
          {loadData !== null ? (
            loadData.map((item) => {
              return (
                <ProductCart
                  key={item.id}
                  productName={item.productName}
                  price={item.price}
                  thumbnailImg={item.thumbnailImg}
                />
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </ul>
        <a className="product cart-link" href="#"></a>
      </main>
    </div>
  );
}
