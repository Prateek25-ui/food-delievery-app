function RestaurantCard({ name, cuisine, rating }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>⭐ {rating}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
  },
};

export default RestaurantCard;