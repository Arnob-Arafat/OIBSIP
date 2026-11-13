
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* First row */}
      <div className="navbar-top">
        <a href="/" className="navbar-logo">
        <span className="logo-icon">
            <img src="/images/logo.png" alt="Foodpanda logo" />
        </span>
          <span>pizzaAche</span>
        </a>

        <button className="address-selector">
          <span>📍</span>
          New address Select your address
        </button>

        <div className="navbar-actions">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">
            Sign up for free delivery
          </button>

          <button className="language-btn">
            🌐 <span>EN</span> <span>⌄</span>
          </button>

          <button className="cart-btn" aria-label="Shopping cart">
            🛒
          </button>
        </div>
      </div>

      {/* Second row */}
      <div className="navbar-bottom">
        <nav className="nav-links">
          <a href="#" className="nav-link active">
            <span>🛵</span> Delivery
          </a>

          <a href="#" className="nav-link">
            <span>🚶</span> Pick-up
          </a>

          <a href="#" className="nav-link">
            <span>▣</span> pandamart
          </a>

          <a href="#" className="nav-link">
            <span>🏬</span> Shops
          </a>
        </nav>

        <div className="navbar-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, and dishes"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
