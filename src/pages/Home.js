import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const products=[
{id:1,name:"Apple iPhone 15 (128 GB) - Black",category:"Electronics",price:69999,oldPrice:79900,rating:4.5,reviews:1824,image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"},
{id:2,name:"Premium Wireless Headphones",category:"Electronics",price:4999,oldPrice:7999,rating:4.4,reviews:2541,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"},
{id:3,name:"Premium Running Shoes",category:"Fashion",price:2499,oldPrice:4999,rating:4.3,reviews:912,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"},
{id:4,name:"Smart Watch Fitness Tracker",category:"Electronics",price:3499,oldPrice:5999,rating:4.2,reviews:1452,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"},
{id:5,name:"Modern Coffee Maker",category:"Home",price:2999,oldPrice:4999,rating:4.1,reviews:638,image:"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80"},
{id:6,name:"Classic Polarized Sunglasses",category:"Fashion",price:1299,oldPrice:2499,rating:4.6,reviews:742,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"},
{id:7,name:"Professional Work Laptop",category:"Electronics",price:54999,oldPrice:64999,rating:4.5,reviews:1103,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"},
{id:8,name:"Premium Travel Backpack",category:"Fashion",price:1899,oldPrice:2999,rating:4.3,reviews:856,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"},
{id:9,name:"Non Stick Cookware Set",category:"Home",price:2199,oldPrice:3999,rating:4.4,reviews:542,image:"https://images.unsplash.com/photo-1584990347449-a89b2e2ee47b?auto=format&fit=crop&w=700&q=80"},
{id:10,name:"Portable Bluetooth Speaker",category:"Electronics",price:1799,oldPrice:2999,rating:4.5,reviews:1642,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"}];

const fresh=[
["Fresh Tomatoes - 1 kg","Fresh Vegetables",49,65,"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80"],
["Fresh Red Apples - 1 kg","Fresh Fruits",199,249,"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80"],
["Fresh Full Cream Milk - 1 L","Dairy Products",72,80,"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80"],
["Fresh Whole Wheat Bread","Bakery",55,65,"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"],
["Fresh Orange Juice - 1 L","Beverages",149,179,"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"],
["Premium Basmati Rice - 5 kg","Rice & Staples",699,899,"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80"]
].map((x,i)=>({id:101+i,name:x[0],category:x[1],price:x[2],oldPrice:x[3],image:x[4],rating:4.5,reviews:300+i*100}));

function Home({addToCart,search,setSearch,navSelection,setNavSelection}){
 const [category,setCategory]=useState("All");
 useEffect(()=>{if(["Electronics","Fashion","Home"].includes(navSelection))setCategory(navSelection);else if(navSelection==="All"||navSelection==="Deals")setCategory("All");},[navSelection]);
 if(navSelection==="Fresh")return <SpecialProducts title="Amazon Fresh" subtitle="Fresh groceries delivered to your door" items={fresh} addToCart={addToCart} back={()=>setNavSelection("All")} categories={["Fresh Vegetables","Fresh Fruits","Dairy Products","Bakery","Beverages","Rice & Staples"]}/>;
 if(navSelection==="Gift Cards")return <GiftCards addToCart={addToCart} back={()=>setNavSelection("All")}/>;
 if(navSelection==="Customer Service")return <CustomerService back={()=>setNavSelection("All")}/>;
 if(navSelection==="Festival")return <Festival addToCart={addToCart} back={()=>setNavSelection("All")}/>;
 if(navSelection==="Amazon Pay")return <AmazonPay back={()=>setNavSelection("All")}/>;
 const q=search.trim().toLowerCase();
 const shown=products.filter(p=>(category==="All"||p.category===category)&&(p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)));
 const choose=c=>{setCategory(c);setNavSelection(c);setTimeout(()=>document.getElementById("products")?.scrollIntoView({behavior:"smooth"}),50)};
 return <><section className="hero"><div className="hero-content"><span className="festival">GREAT INDIAN FESTIVAL</span><h1>BIG DEALS.<br/>BIG SAVINGS.</h1><p>Discover great deals across electronics, fashion, home essentials and much more.</p><button className="hero-button" onClick={()=>document.getElementById("products")?.scrollIntoView({behavior:"smooth"})}>Shop Now →</button></div></section>
 <section className="category-section">{[["Electronics","🎧"],["Fashion","👟"],["Home","🏠"],["All","⚡"]].map(([c,i])=><button className="category-card" key={c} onClick={()=>choose(c)}><h2>{c==="All"?"Today's Deals":c}</h2><div className="category-icon">{i}</div><p>Explore great offers</p><span>See more →</span></button>)}</section>
 <section className="store-section" id="products"><div className="products-header"><div><span className="section-label">SHOP NOW</span><h2>{search?'Search results for "'+search+'"':category==="All"?"Today's Deals":category}</h2><p>{shown.length} products found</p></div><div className="product-filters"><select value={category} onChange={e=>choose(e.target.value)}><option value="All">All Categories</option><option>Electronics</option><option>Fashion</option><option value="Home">Home & Kitchen</option></select>{(search||category!=="All")&&<button onClick={()=>{setSearch("");choose("All")}}>Clear Filters</button>}</div></div>
 {shown.length?<div className="products-grid">{shown.map(p=><ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div>:<div className="no-results"><h3>No products found</h3><button onClick={()=>{setSearch("");choose("All")}}>Show all products</button></div>}</section></>;
}

function SpecialProducts({title,subtitle,items,addToCart,back,categories}){
 const [cat,setCat]=useState("All"); const shown=cat==="All"?items:items.filter(x=>x.category===cat);
 return <main className="special-page"><section className="special-hero"><button onClick={back}>← Amazon Home</button><h1>{title}</h1><p>{subtitle}</p></section><div className="chip-row"><button className={cat==="All"?"active":""} onClick={()=>setCat("All")}>All</button>{categories.map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}</div><section className="store-section"><div className="products-grid">{shown.map(p=><ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div></section></main>;
}

function GiftCards({addToCart,back}){
 const cards=[["Birthday","🎂"],["Wedding","💍"],["Congratulations","🎉"],["Thank You","❤️"],["Festivals","🪔"],["Corporate","💼"]]; const [amount,setAmount]=useState(1000); const [recipient,setRecipient]=useState("");
 return <main className="special-page"><section className="special-hero"><button onClick={back}>← Amazon Home</button><h1>Amazon Gift Cards</h1><p>Send the perfect gift for every occasion.</p></section><section className="gift-grid">{cards.map(([name,icon],i)=><article className="gift-card" key={name}><span>{icon}</span><h2>{name} Gift Card</h2><p>A thoughtful gift for someone special.</p><div className="amounts">{[500,1000,2000,5000].map(a=><button key={a} className={amount===a?"active":""} onClick={()=>setAmount(a)}>₹{a}</button>)}</div><input placeholder="Recipient name" value={recipient} onChange={e=>setRecipient(e.target.value)}/><button className="primary-button" onClick={()=>addToCart({id:200+i,name:name+" Gift Card"+(recipient?" for "+recipient:""),price:amount,oldPrice:amount,rating:5,reviews:1,image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"})}>Add ₹{amount.toLocaleString("en-IN")} to Cart</button></article>)}</section></main>;
}

function CustomerService({back}){
 const [msg,setMsg]=useState(""); const opts=[["Your Orders","📦"],["Returns & Refunds","↩️"],["Payment Issues","💳"],["Delivery Help","🚚"],["Account Settings","👤"],["Contact Us","💬"]];
 return <main className="special-page"><section className="special-hero"><button onClick={back}>← Amazon Home</button><h1>Hello. What can we help you with?</h1></section><section className="support-grid">{opts.map(([n,i])=><button className="support-card" key={n} onClick={()=>setMsg(n+" demo support opened.")}><span>{i}</span><div><h3>{n}</h3><p>Get help with {n.toLowerCase()}.</p></div></button>)}</section>{msg&&<div className="service-success">✓ {msg}</div>}</main>;
}

function Festival({addToCart,back}){
 const [cat,setCat]=useState("All"); const sale=products.map(p=>({...p,id:p.id+500,price:Math.round(p.price*.85)})).filter(p=>cat==="All"||p.category===cat);
 return <main className="festival-page"><section className="festival-main-hero"><button onClick={back}>← Amazon Home</button><span>AMAZON GREAT INDIAN FESTIVAL</span><h1>BIG DEALS.<br/>BIG SAVINGS.</h1><p>Special demo festival prices across your favourite categories.</p></section><div className="chip-row">{["All","Electronics","Fashion","Home"].map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}</div><section className="store-section"><div className="products-grid">{sale.map(p=><ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div></section></main>;
}

function AmazonPay({back}){
 const [service,setService]=useState(""); const [value,setValue]=useState(""); const [msg,setMsg]=useState("");
 const services=[["Mobile Recharge","📱"],["Electricity Bill","💡"],["DTH Recharge","📺"],["Gas Bill","🔥"],["Travel Tickets","🎫"],["Add Money","💰"]];
 return <main className="special-page"><section className="special-hero"><button onClick={back}>← Amazon Home</button><h1>amazon pay</h1><p>Payments made simple. Demo interface only.</p></section><section className="pay-services">{services.map(([n,i])=><button key={n} onClick={()=>{setService(n);setMsg("")}}><span>{i}</span><strong>{n}</strong></button>)}</section>{service&&<section className="pay-action-panel"><h2>{service}</h2><input value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter details"/><button onClick={()=>setMsg(value.trim()?service+" demo completed successfully.":"Please enter the required details.")}>Continue</button>{msg&&<div className="service-success">{msg}</div>}<small>No real payment is processed.</small></section>}</main>;
}
export default Home;
