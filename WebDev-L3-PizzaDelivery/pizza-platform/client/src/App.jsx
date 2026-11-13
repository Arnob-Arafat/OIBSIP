
import { useState } from "react";

import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import pizzas from "./data/pizza.js";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPizza, setSelectedPizza] = useState(null);

  const categories = [
    "All",
    "Classic",
    "Vegetarian",
    "Special",
  ];

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearch =
      pizza.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || pizza.category === category;

    return matchesSearch && matchesCategory;
  });

  function handleCustomize(pizza) {
    setSelectedPizza(pizza);
  }

  return (
    <>
      <Navbar />

      <main>

        {/* Hero Section */}

        <section className="hero">

          <div className="hero-content">
            <span className="hero-tag">
              YOUR PIZZA DESTINATION
            </span>

            <h1>
              Good food.
              <br />
              <span>Good mood.</span>
            </h1>

            <p>
              Discover your favourite pizzas or create
              something completely your own.
            </p>

            <a href="#menu" className="hero-btn">
              Explore menu →
            </a>
          </div>

          <div className="hero-image">
            <span>🍕</span>
            <p>Replace with hero image</p>
          </div>

        </section>


        {/* Menu Section */}

        <section className="menu-section" id="menu">

          <div className="section-heading">
            <div>
              <span className="section-label">
                OUR MENU
              </span>

              <h2>Explore our pizzas</h2>

              <p>Find your next favourite slice.</p>
            </div>
          </div>


          {/* Search */}

          <div className="search-container">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search for your favourite pizza..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>


          {/* Category Filters */}

          <div className="category-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>


          {/* Pizza Grid */}

          <div className="pizza-grid">

            {filteredPizzas.length > 0 ? (
              filteredPizzas.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  onCustomize={handleCustomize}
                />
              ))
            ) : (
              <p className="empty-message">
                No pizzas found. Try another search.
              </p>
            )}

          </div>

        </section>


        {/* Customization Selection Feedback */}

        {selectedPizza && (
          <div className="selection-message">
            <div>
              <strong>{selectedPizza.name}</strong>
              <p>
                Selected! Your custom pizza builder
                will be connected here.
              </p>
            </div>

            <button
              onClick={() => setSelectedPizza(null)}
              aria-label="Dismiss selection"
            >
              ✕
            </button>
          </div>
        )}

      </main>


      {/* Footer */}

      <footer className="footer" id="contact">
        <h3>YOUR BRAND</h3>
        <p>Good pizza. Great moments.</p>
        <span>© 2026 Your Brand. All rights reserved.</span>
      </footer>

    </>
  );
}

export default App;
