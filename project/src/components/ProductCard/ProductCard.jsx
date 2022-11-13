import React from "react";
import { useRef } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./productCard.css";

export default function ProductCard({ productName, price, thumbnailImg }) {
  const likeBtn = useRef();
  const handleLikeClick = (e) => {
    e.currentTarget.classList.toggle("on");
  };

  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
      </div>
      <div className="product-name">
        <ProductName productName={productName} />
      </div>
      <button
        className="like-btn"
        onClick={handleLikeClick}
        ref={likeBtn}
      ></button>
      <div className="product-price">
        <ProductPrice price={price} />
      </div>
    </li>
  );
}
