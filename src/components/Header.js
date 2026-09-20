import React from "react";

function Header({ cartCount, goHome, goCart, search, setSearch, onNavClick }) {
  const handleSearch = (e) => {
    e.preventDefault();
    goHome();
    setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <header className="header">
        <button className="logo" onClick={goHome}>
          amazon<span>.in</span>
          <div className="amazon-smile">⌣</div>
        </button>
        <div className="location">
          <span>Delivering to</span>
          <strong>📍 India</strong>
        </div>
        <form className="header-search" onSubmit={handleSearch}>
          <select aria-label="Category">
            <option>All</option><option>Electronics</option><option>Fashion</option><option>Home</option>
          </select>
          <input type="text" placeholder="Search Amazon.in" value={search} onChange={(e) => setSearch(e.target.value)} />
          {search && <button type="button" className="search-clear" onClick={() => setSearch("")}>×</button>}
          <button type="submit" className="search-button">🔍</button>
        </form>
        <div className="header-item"><span>Hello, sign in</span><strong>Account & Lists ▾</strong></div>
        <div className="header-item"><span>Returns</span><strong>& Orders</strong></div>
        <button className="cart-btn" onClick={goCart}><span className="cart-icon">🛒</span><span className="cart-number">{cartCount}</span><strong>Cart</strong></button>
      </header>
      <nav className="nav">
        <button onClick={() => onNavClick("All")}>☰ All</button>
        <button onClick={() => onNavClick("Fresh")}>Fresh</button>
        <button onClick={() => onNavClick("Amazon Pay")}>Amazon Pay</button>
        <button onClick={() => onNavClick("Electronics")}>Electronics</button>
        <button onClick={() => onNavClick("Fashion")}>Fashion</button>
        <button onClick={() => onNavClick("Home")}>Home & Kitchen</button>
        <button onClick={() => onNavClick("Deals")}>Today's Deals</button>
        <button onClick={() => onNavClick("Gift Cards")}>Gift Cards</button>
        <button onClick={() => onNavClick("Customer Service")}>Customer Service</button>
        <button className="nav-offer" onClick={() => onNavClick("Festival")}>Great Indian Festival</button>
      </nav>
    </>
  );
}
export default Header;
