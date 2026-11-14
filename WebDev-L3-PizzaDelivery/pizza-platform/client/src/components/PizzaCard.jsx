function PizzaCard({ pizza }) {
  return (
    <article className="pizza-card">
      <div className="pizza-image">
        {pizza.image ? (
          <img src={pizza.image} alt={pizza.name} loading="lazy" />
        ) : (
          <div className="image-placeholder" aria-hidden="true">
            <span>🍕</span>
            <p>No image available</p>
          </div>
        )}
        <span className="pizza-category">{pizza.category}</span>
      </div>

      <div className="pizza-details">
        <h3>{pizza.name}</h3>
        <p className="pizza-description">{pizza.description}</p>

        <div className="pizza-card-footer">
          <div className="pizza-price">
            <span>Starting from</span>
            <strong>৳{pizza.price}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PizzaCard;