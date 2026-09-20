import React, { useState } from "react";
function Payment({ subtotal, address, goBack, placeOrder }) {
  const [method,setMethod]=useState("upi"); const [processing,setProcessing]=useState(false);
  const handlePlaceOrder=()=>{if(processing)return;setProcessing(true);setTimeout(()=>placeOrder(),1800);};
  return <main className="payment-page"><header className="checkout-header"><div className="checkout-logo">amazon<span>.in</span></div><h1>Checkout</h1><span>🔒</span></header>
    <div className="payment-layout"><section><div className="payment-address"><div><h3>1 Delivery address</h3><p><strong>{address.name}</strong><br/>{address.address}<br/>{address.city}, {address.state} - {address.pincode}</p></div><button className="link-button" onClick={goBack}>Change</button></div>
    <div className="payment-methods"><h2><span>2</span>Select a payment method</h2>
      <PaymentOption active={method==="upi"} title="UPI" subtitle="Google Pay, PhonePe, Paytm or any UPI app" onClick={()=>setMethod("upi")}><div className="payment-form"><label>Demo UPI ID<input placeholder="yourname@upi"/></label><div className="payment-brands"><span>G Pay</span><span>PhonePe</span><span>Paytm</span><span>UPI</span></div></div></PaymentOption>
      <PaymentOption active={method==="card"} title="Credit or Debit Card" subtitle="Demo card payment" onClick={()=>setMethod("card")}><div className="payment-form"><label>Demo card number<input placeholder="Demo only"/></label><label>Name on card<input placeholder="Name"/></label><div className="form-row"><label>Expiry<input placeholder="MM/YY"/></label><label>Demo CVV<input type="password" placeholder="Demo"/></label></div></div></PaymentOption>
      <PaymentOption active={method==="bank"} title="Net Banking" subtitle="Select a demo bank" onClick={()=>setMethod("bank")}><div className="payment-form"><select><option>Select Bank</option><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option></select></div></PaymentOption>
      <PaymentOption active={method==="cod"} title="Cash on Delivery" subtitle="Pay when the order is delivered" onClick={()=>setMethod("cod")}><div className="cod-message">✓ Cash on Delivery is available for this demo order.</div></PaymentOption>
    </div></section><aside className="payment-summary"><button className="place-order-button" onClick={handlePlaceOrder} disabled={processing}>{processing?"Processing...":"Place your order"}</button><p className="payment-note">Demo checkout only. No real payment is processed.</p><hr/><h3>Order Summary</h3><div><span>Items:</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div><div><span>Delivery:</span><span>FREE</span></div><hr/><div className="payment-total"><strong>Order Total:</strong><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div></aside></div>
    {processing&&<div className="processing-overlay"><div className="processing-box"><div className="loader"/><h2>Processing your order</h2><p>Please wait...</p></div></div>}
  </main>;
}
function PaymentOption({active,title,subtitle,onClick,children}){return <div className={"payment-option "+(active?"active":"")}><label className="payment-option-header" onClick={onClick}><input type="radio" checked={active} onChange={onClick}/><div><strong>{title}</strong><p>{subtitle}</p></div></label>{active&&children}</div>;}
export default Payment;
