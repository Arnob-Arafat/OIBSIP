import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("delivery");

  const navItems = [
    { id: "delivery", label: "Delivery", icon: "🛵" },
    { id: "pickup", label: "Pick-up", icon: "🚶" },
  ];

  return (
    <header className="navbar">
      {/* First row */}
      <div className="navbar-top">
        <a href="/" className="navbar-logo" aria-label="PizzaAche Home">
          <img
            src="images/logo.webp"
            alt="PizzaAche Logo"
            className="logo-img"
          />
          <span className="brand-text">pizzaAche</span>
        </a>

        <button type="button" className="address-selector">
          <span className="address-label">New address:</span>
          <span className="address-value">Select your address</span>
        </button>

        <div className="navbar-actions">
          <button type="button" className="login-btn">
            Log in
          </button>
          <button type="button" className="signup-btn">
            Sign up for free delivery
          </button>

          <button
            type="button"
            className="language-btn"
            aria-label="Select language"
          >
            <span>🌐 EN</span>
            <span className="chevron">⌄</span>
          </button>

          <button
            type="button"
            className="cart-btn"
            aria-label="Shopping cart"
          >
            🛒
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>

      {/* Second row */}
      <div className="navbar-bottom">
        <nav className="nav-links" aria-label="Service categories">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="navbar-search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search for Pizzas"
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;