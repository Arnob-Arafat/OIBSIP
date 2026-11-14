
import { useState } from "react";
import "./CustomPizzaBuilder.css";

const bases = [
  { name: "Classic Hand Tossed", price: 250 },
  { name: "Thin Crust", price: 280 },
  { name: "Cheese Burst", price: 350 },
  { name: "Whole Wheat", price: 300 },
  { name: "Pan Crust", price: 320 },
];

const sauces = [
  { name: "Classic Tomato", price: 50 },
  { name: "BBQ Sauce", price: 70 },
  { name: "Peri Peri", price: 70 },
  { name: "Pesto", price: 90 },
  { name: "White Garlic", price: 80 },
];

const cheeses = [
  { name: "Mozzarella", price: 100 },
  { name: "Cheddar", price: 120 },
  { name: "Parmesan", price: 150 },
];

const vegetables = [
  { name: "Onion", price: 20 },
  { name: "Capsicum", price: 30 },
  { name: "Mushroom", price: 40 },
  { name: "Tomato", price: 25 },
  { name: "Olives", price: 50 },
  { name: "Jalapenos", price: 40 },
  { name: "Sweet Corn", price: 35 },
  { name: "Baby Spinach", price: 40 },
];

function CustomPizzaBuilder({ onAddToCart, onClose }) {
  const [base, setBase] = useState(bases[0]);
  const [sauce, setSauce] = useState(sauces[0]);
  const [cheese, setCheese] = useState(cheeses[0]);
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const vegetablePrice = selectedVegetables.reduce(
    (total, vegetable) => total + vegetable.price,
    0
  );

  const unitPrice = base.price + sauce.price + cheese.price + vegetablePrice;
  const totalPrice = unitPrice * quantity;

  function toggleVegetable(vegetable) {
    setSelectedVegetables((previous) => {
      const alreadySelected = previous.some(
        (item) => item.name === vegetable.name
      );

      if (alreadySelected) {
        return previous.filter((item) => item.name !== vegetable.name);
      }

      return [...previous, vegetable];
    });
  }

  function handleAddToCart() {
    const customPizza = {
      id: `custom-${Date.now()}`,
      name: "Custom Pizza",
      base,
      sauce,
      cheese,
      vegetables: selectedVegetables,
      quantity,
      unitPrice,
      totalPrice,
    };

    onAddToCart(customPizza);
  }

  return (
    <section className="builder-section" id="custom-builder">
      <div className="builder-header">
        <div>
          <span className="builder-label">CREATE YOUR OWN</span>
          <h2>Build Your Perfect Pizza</h2>
          <p>Choose your ingredients. Make it yours.</p>
        </div>

        <button
          type="button"
          className="builder-close"
          onClick={onClose}
          aria-label="Close pizza builder"
        >
          ✕
        </button>
      </div>

      <div className="builder-layout">
        <div className="builder-options">

          {/* Base selection */}
          <div className="builder-group">
            <h3>1. Choose your base</h3>
            <p>Select one pizza base.</p>

            <div className="builder-choice-grid">
              {bases.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={`builder-choice ${
                    base.name === item.name ? "selected" : ""
                  }`}
                  onClick={() => setBase(item)}
                >
                  <span>{item.name}</span>
                  <strong>৳{item.price}</strong>
                </button>
              ))}
            </div>
          </div>

          {/* Sauce selection */}
          <div className="builder-group">
            <h3>2. Choose your sauce</h3>
            <p>Select one sauce.</p>

            <div className="builder-choice-grid">
              {sauces.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={`builder-choice ${
                    sauce.name === item.name ? "selected" : ""
                  }`}
                  onClick={() => setSauce(item)}
                >
                  <span>{item.name}</span>
                  <strong>৳{item.price}</strong>
                </button>
              ))}
            </div>
          </div>

          {/* Cheese selection */}
          <div className="builder-group">
            <h3>3. Choose your cheese</h3>
            <p>Select one cheese.</p>

            <div className="builder-choice-grid">
              {cheeses.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={`builder-choice ${
                    cheese.name === item.name ? "selected" : ""
                  }`}
                  onClick={() => setCheese(item)}
                >
                  <span>{item.name}</span>
                  <strong>৳{item.price}</strong>
                </button>
              ))}
            </div>
          </div>

          {/* Vegetable selection */}
          <div className="builder-group">
            <h3>4. Add your vegetables</h3>
            <p>Select as many as you like.</p>

            <div className="builder-choice-grid">
              {vegetables.map((item) => {
                const checked = selectedVegetables.some(
                  (vegetable) => vegetable.name === item.name
                );

                return (
                  <label
                    key={item.name}
                    className={`builder-choice vegetable-choice ${
                      checked ? "selected" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleVegetable(item)}
                    />

                    <span>{item.name}</span>
                    <strong>+৳{item.price}</strong>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <aside className="builder-summary">
          <div className="summary-image">🍕</div>

          <h3>Your Custom Pizza</h3>
          <p className="summary-subtitle">Your creation, your choice.</p>

          <div className="summary-details">
            <div>
              <span>Base</span>
              <strong>{base.name}</strong>
            </div>

            <div>
              <span>Sauce</span>
              <strong>{sauce.name}</strong>
            </div>

            <div>
              <span>Cheese</span>
              <strong>{cheese.name}</strong>
            </div>

            <div>
              <span>Vegetables</span>
              <strong>
                {selectedVegetables.length > 0
                  ? selectedVegetables.map((item) => item.name).join(", ")
                  : "None selected"}
              </strong>
            </div>
          </div>

          <div className="quantity-control">
            <span>Quantity</span>

            <div>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
              >
                −
              </button>

              <strong>{quantity}</strong>

              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="summary-total">
            <span>Total price</span>
            <strong>৳{totalPrice}</strong>
          </div>

          <button
            type="button"
            className="add-custom-pizza-btn"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CustomPizzaBuilder;
