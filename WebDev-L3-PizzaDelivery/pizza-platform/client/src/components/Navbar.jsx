
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="/" className="brand">
          <span className="brand-icon">🍕</span>
          <span>PizzaAche</span>
        </a>

        <div className="nav-location">
          <span>📍</span>
          <span>Your delivery location</span>
          <span className="location-arrow">⌄</span>
        </div>

        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">
            Log in
          </button>

          <button className="signup-btn">
            Sign up
          </button>

          <button className="cart-btn" aria-label="Shopping cart">
            🛒
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
