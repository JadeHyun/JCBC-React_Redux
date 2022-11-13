import React, { useState, useEffect } from "react";
import { data } from "../../database/data";
import "./homePage.css";
import ProductCart from "../../components/ProductCard/ProductCard";

export default function HomePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://test.api.weniv.co.kr/mall");
        const result = await res.json();
        setItems(result);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    getData();
  }, []);
  if (error) {
    return <div>에러입니다 !</div>;
  } else if (!isLoaded) {
    return <div>로딩중 !</div>;
  } else {
    return (
      <div>
        <main className="product">
          <ul className="product-list">
            {items.map((item) => {
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
          <a className="product cart-link" href="#"></a>
        </main>
      </div>
    );
  }
}
