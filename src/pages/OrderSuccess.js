import React from "react";
function OrderSuccess({ orderNumber, address, continueShopping }) {
  return <main className="success-page"><div className="success-logo">amazon<span>.in</span></div><section className="success-card">
    <div className="success-check">✓</div><h1>Order placed, thank you!</h1><p className="success-message">Your demo order has been successfully placed.</p>
    <div className="order-number">Order #<strong>{orderNumber}</strong></div><hr/><h3>Shipping to</h3>
    <p className="shipping-address"><strong>{address.name}</strong><br/>{address.address}<br/>{address.city}, {address.state} {address.pincode}</p>
    <div className="delivery-box"><span>📦</span><div><strong>Estimated delivery</strong><p>3–5 business days</p></div></div>
    <button className="primary-button" onClick={continueShopping}>Continue Shopping</button>
  </section></main>;
}
export default OrderSuccess;
