import React, { useState } from "react";

function Checkout({ subtotal, address, setAddress, goBack, continuePayment }) {
  const [error, setError] = useState("");
  const handleChange = (e) => setAddress({ ...address, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.name || !address.phone || !address.address || !address.city || !address.state || !address.pincode) { setError("Please complete all delivery details."); return; }
    if (!/^\d{10}$/.test(address.phone)) { setError("Please enter a valid 10-digit mobile number."); return; }
    if (!/^\d{6}$/.test(address.pincode)) { setError("Please enter a valid 6-digit PIN code."); return; }
    setError(""); continuePayment();
  };
  return <main className="checkout-page">
    <header className="checkout-header"><div className="checkout-logo">amazon<span>.in</span></div><h1>Checkout</h1><span>🔒</span></header>
    <div className="checkout-layout"><section className="address-section"><h2><span>1</span>Enter a delivery address</h2>
      <form className="address-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">⚠ {error}</div>}
        <label>Full name<input name="name" value={address.name} onChange={handleChange} placeholder="First and last name"/></label>
        <label>Mobile number<input name="phone" value={address.phone} onChange={handleChange} placeholder="10-digit mobile number" maxLength="10"/></label>
        <label>Flat, House no., Building<input name="address" value={address.address} onChange={handleChange} placeholder="Street address"/></label>
        <div className="form-row"><label>Town / City<input name="city" value={address.city} onChange={handleChange}/></label><label>State<input name="state" value={address.state} onChange={handleChange}/></label></div>
        <label>PIN Code<input name="pincode" value={address.pincode} onChange={handleChange} maxLength="6"/></label>
        <div className="checkout-buttons"><button type="submit" className="primary-button">Use this address</button><button type="button" className="link-button" onClick={goBack}>← Return to cart</button></div>
      </form></section>
      <aside className="order-summary"><h2>Order Summary</h2><div><span>Items:</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div><div><span>Delivery:</span><span>FREE</span></div><hr/><div className="summary-total"><strong>Order Total:</strong><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div></aside>
    </div></main>;
}
export default Checkout;
