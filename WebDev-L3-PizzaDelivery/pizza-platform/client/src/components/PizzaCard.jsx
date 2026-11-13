
function PizzaCard({ pizza, onCustomize }) {
  return (
    <div className="pizza-card">

      <div className="pizza-image">

        {pizza.image ? (
          <img
            src={pizza.image}
            alt={pizza.name}
          />
        ) : (
          <div className="image-placeholder">
            <span>🍕</span>
            <p>Add pizza image</p>
          </div>
        )}

        <span className="pizza-category">
          {pizza.category}
        </span>

      </div>

      <div className="pizza-details">

        <h3>{pizza.name}</h3>

        <p className="pizza-description">
          {pizza.description}
        </p>

        <div className="pizza-card-footer">

          <div className="pizza-price">
            <span>Starting from</span>
            <strong>৳{pizza.price}</strong>
          </div>

          <button
            className="customize-btn"
            onClick={() => onCustomize(pizza)}
          >
            Customize
          </button>

        </div>

      </div>
    </div>
  );
}

export default PizzaCard;
