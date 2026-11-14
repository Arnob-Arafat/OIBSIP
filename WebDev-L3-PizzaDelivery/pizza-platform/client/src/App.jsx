import { useState, useMemo, useEffect } from "react";
import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import pizzas from "./data/pizza.js";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ["All", "Classic", "Vegetarian", "Special"];

  // Auto-advance hero carousel every 4 seconds
  useEffect(() => {
    if (!pizzas || pizzas.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pizzas.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Memoize filtered results for better rendering performance
  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) => {
      const matchesSearch = pizza.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());
      const matchesCategory =
        category === "All" || pizza.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="app-container">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">YOUR PIZZA PALACE</span>
            <h1>
              Cheezy Slice
              <br />
              <span>Cheeky Smiles</span>
            </h1>
            <p>
              Discover your favourite pizzas or create something completely your
              own.
            </p>
            <a href="#menu" className="hero-btn">
              Explore menu →
            </a>
          </div>

          {/* Carousel Right Side */}
          <div className="hero-carousel" aria-label="Featured pizzas carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pizzas.map((pizza) => (
                <div className="carousel-slide" key={pizza.id}>
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="carousel-img"
                  />
                  <span className="carousel-pizza-name">{pizza.name}</span>
                </div>
              ))}
            </div>

            {/* Carousel Dots Indicator */}
            <div className="carousel-dots">
              {pizzas.map((pizza, index) => (
                <button
                  key={pizza.id}
                  type="button"
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show ${pizza.name}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR MENU</span>
              <h2>Explore our pizzas</h2>
              <p>Find your next favourite slice.</p>
            </div>
          </div>

          <div className="menu-controls">
            {/* Search */}
            <div className="search-container" role="search">
              <input
                type="text"
                placeholder="Search for your favourite pizza..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search pizzas"
              />
              {search && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="category-filters" role="tablist">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={category === item}
                  className={`category-btn ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Pizza Grid */}
          <div className="pizza-grid">
            {filteredPizzas.length > 0 ? (
              filteredPizzas.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  onCustomize={setSelectedPizza}
                />
              ))
            ) : (
              <div className="empty-state">
                <span className="empty-icon">🍽️</span>
                <h3>No pizzas found</h3>
                <p className="empty-message">
                  We couldn't find any pizzas matching "{search}". Try searching
                  for something else or switch categories.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Customization Selection Feedback Modal / Banner */}
        {selectedPizza && (
          <aside className="selection-message" role="alert">
            <div className="selection-info">
              <strong>{selectedPizza.name} selected!</strong>
              <p>Your custom pizza builder will be connected here.</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPizza(null)}
              aria-label="Dismiss selection"
              className="close-banner-btn"
            >
              ✕
            </button>
          </aside>
        )}
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>pizzaAche</h3>
          <p>Good pizza. Great moments.</p>
          <span>© 2026 pizzaAche. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;