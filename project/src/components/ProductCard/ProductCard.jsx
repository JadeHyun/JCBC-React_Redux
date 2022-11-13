import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./productCard.css";

export default function ProductCard({ productName, price, thumbnailImg }) {
  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
      </div>
      <div className="product-name">
        <ProductName productName={productName} />
      </div>
      <button className="like-btn"></button>
      <div className="product-price">
        <ProductPrice price={price} />
      </div>
    </li>
  );
}
