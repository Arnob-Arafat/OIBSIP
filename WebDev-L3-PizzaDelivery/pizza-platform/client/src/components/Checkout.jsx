import { useState } from "react";
import "./Checkout.css";

function Checkout({ items, onBack, onPlaceOrder }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    instructions: "",
  });

  const deliveryFee = 60;

  const subtotal = items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const total = subtotal + deliveryFee;

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onPlaceOrder({
      customer,
      items,
      subtotal,
      deliveryFee,
      total,
    });
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button type="button" onClick={onBack}>
          ← Back
        </button>

        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="checkout-section">
            <h2>Delivery Information</h2>

            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={customer.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />

            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              value={customer.address}
              onChange={handleChange}
              required
              placeholder="House, road, area..."
              rows={3}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              value={customer.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
            />

            <label htmlFor="instructions">
              Delivery Instructions (Optional)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={customer.instructions}
              onChange={handleChange}
              placeholder="Any special instructions?"
              rows={2}
            />
          </section>

          <button className="place-order-btn" type="submit">
            Place Order — ৳{total.toFixed(2)}
          </button>
        </form>

        <aside className="order-summary">
          <h2>Your Order</h2>

          {items.map((item) => (
            <div className="checkout-item" key={item.cartItemId}>
              <div>
                <strong>{item.name}</strong>
                <p>Quantity: {item.quantity}</p>

                {item.type === "custom" && (
                  <p className="custom-details">
                    {item.base}, {item.sauce}, {item.cheese}
                    {item.vegetables?.length > 0 &&
                      `, ${item.vegetables.join(", ")}`}
                  </p>
                )}
              </div>

              <span>
                ৳{(item.unitPrice * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="summary-row">
            <span>Subtotal</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>৳{deliveryFee.toFixed(2)}</span>
          </div>

          <div className="summary-row summary-total">
            <strong>Total</strong>
            <strong>৳{total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;