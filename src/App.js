import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [navSelection, setNavSelection] = useState("All");
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");
  const [address, setAddress] = useState({name:"",phone:"",address:"",city:"",state:"",pincode:""});
  const [orderNumber, setOrderNumber] = useState("");

  const navigate = (destination) => {
    setPage(destination);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (option) => {
    setSearch("");
    setNavSelection(option);
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);
      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id ? {...item, quantity:item.quantity + 1} : item
        );
      }
      return [...currentCart, {...product, quantity:1}];
    });
    setNotification(product.name + " added to cart");
    setTimeout(() => setNotification(""), 2000);
  };

  const increaseQuantity = (id) => setCart((c) => c.map((i) => i.id === id ? {...i,quantity:i.quantity+1}:i));
  const decreaseQuantity = (id) => setCart((c) => c.map((i) => i.id === id ? {...i,quantity:i.quantity-1}:i).filter((i)=>i.quantity>0));
  const removeItem = (id) => setCart((c) => c.filter((i)=>i.id!==id));
  const cartCount = cart.reduce((t,i)=>t+i.quantity,0);
  const subtotal = cart.reduce((t,i)=>t+i.price*i.quantity,0);

  const placeOrder = () => {
    setOrderNumber("AMZ-" + Math.floor(100000000 + Math.random()*900000000));
    setCart([]);
    setPage("success");
    window.scrollTo({top:0,behavior:"smooth"});
  };

  return <div className="app">
    {notification && <div className="notification"><span>✓</span>{notification}</div>}
    {page !== "payment" && page !== "success" && <Header cartCount={cartCount} goHome={()=>{setNavSelection("All");navigate("home");}} goCart={()=>navigate("cart")} search={search} setSearch={setSearch} onNavClick={handleNavClick}/>}
    {page === "home" && <Home addToCart={addToCart} search={search} setSearch={setSearch} navSelection={navSelection} setNavSelection={setNavSelection}/>}
    {page === "cart" && <Cart cart={cart} subtotal={subtotal} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} continueShopping={()=>navigate("home")} checkout={()=>navigate("checkout")}/>}
    {page === "checkout" && <Checkout subtotal={subtotal} address={address} setAddress={setAddress} goBack={()=>navigate("cart")} continuePayment={()=>navigate("payment")}/>}
    {page === "payment" && <Payment subtotal={subtotal} address={address} goBack={()=>navigate("checkout")} placeOrder={placeOrder}/>}
    {page === "success" && <OrderSuccess orderNumber={orderNumber} address={address} continueShopping={()=>{setSearch("");setNavSelection("All");navigate("home");}}/>}
    {(page === "home" || page === "cart") && <Footer/>}
  </div>;
}
export default App;
