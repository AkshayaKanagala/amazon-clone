import React from "react";

function Cart({ cart, subtotal, increaseQuantity, decreaseQuantity, removeItem, continueShopping, checkout }) {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return <main className="cart-page"><section className="empty-cart"><div className="empty-cart-icon">🛒</div><div><h1>Your Amazon Cart is empty</h1><p>Add some products and they will appear here.</p><button className="primary-button" onClick={continueShopping}>Continue Shopping</button></div></section></main>;
  }

  return <main className="cart-page"><div className="cart-layout"><section className="cart-products"><h1>Shopping Cart</h1><div className="cart-price-title">Price</div>
    {cart.map((item)=><article className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-info"><h2>{item.name}</h2><span className="stock">In Stock</span><p><strong>FREE delivery</strong></p><label className="gift"><input type="checkbox"/> This will be a gift</label><div className="cart-actions"><div className="quantity"><button onClick={()=>decreaseQuantity(item.id)}>−</button><span>{item.quantity}</span><button onClick={()=>increaseQuantity(item.id)}>+</button></div><button className="link-button" onClick={()=>removeItem(item.id)}>Delete</button></div></div><strong className="cart-product-price">₹{(item.price*item.quantity).toLocaleString("en-IN")}</strong></article>)}
    <div className="cart-subtotal">Subtotal ({itemCount} items): <strong>₹{subtotal.toLocaleString("en-IN")}</strong></div></section>
    <aside className="cart-summary"><div className="delivery-success">✓ Your order is eligible for FREE Delivery.</div><p>Subtotal ({itemCount} items):</p><h2>₹{subtotal.toLocaleString("en-IN")}</h2><button className="primary-button full-button" onClick={checkout}>Proceed to Buy</button><button className="secondary-button full-button" onClick={continueShopping}>Continue Shopping</button></aside></div></main>;
}
export default Cart;
