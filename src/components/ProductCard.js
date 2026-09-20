import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <span className="discount-badge">{discount}% off</span>
        <button className="wishlist-button" aria-label="Add to wishlist">♡</button>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="deal-badge">Limited time deal</span>
        <h3>{product.name}</h3>
        <div className="rating"><span className="stars">★★★★★</span><span>{product.rating}</span><span className="reviews">({product.reviews})</span></div>
        <div className="price"><sup>₹</sup><strong>{product.price.toLocaleString("en-IN")}</strong></div>
        <div className="mrp">M.R.P.: <del>₹{product.oldPrice.toLocaleString("en-IN")}</del></div>
        <p className="delivery"><strong>FREE delivery</strong> available</p>
        <button className={"add-cart-button " + (added ? "added" : "")} onClick={handleAddToCart}>{added ? "✓ Added to Cart" : "Add to Cart"}</button>
      </div>
    </article>
  );
}
export default ProductCard;
