
import "./Cart.css";

function Cart({ items, onUpdateQuantity, onRemove, onClose }) {
  const subtotal = items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <section className="cart-panel">
        <div className="cart-header">
          <div>
            <h2>Your Cart</h2>
            <p>{totalItems} item(s)</p>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <h3>Your cart is empty</h3>
            <p>Add some delicious pizzas to get started.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.cartItemId}>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <span className="cart-item-type">
                      {item.type === "custom"
                        ? "Custom pizza"
                        : "Menu pizza"}
                    </span>

                    {item.type === "custom" && (
                      <p className="cart-item-description">
                        {item.base.name} · {item.sauce.name} ·{" "}
                        {item.cheese.name}
                        {item.vegetables.length > 0 &&
                          ` · ${item.vegetables.map(v => v.name).join(", ")}`}
                      </p>
                    )}

                    <strong>৳{item.unitPrice} each</strong>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(
                            item.cartItemId,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(
                            item.cartItemId,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <strong>
                      ৳{item.unitPrice * item.quantity}
                    </strong>

                    <button
                      type="button"
                      className="remove-cart-item"
                      onClick={() => onRemove(item.cartItemId)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <strong>৳{subtotal}</strong>
              </div>

              <button
                type="button"
                className="checkout-btn"
                disabled
                title="Checkout will be implemented in a later step"
              >
                Checkout — Coming soon
              </button>

              <p>Delivery charges and taxes will be calculated at checkout.</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Cart;
