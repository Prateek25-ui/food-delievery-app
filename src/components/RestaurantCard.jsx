import { toast } from "react-toastify";

function RestaurantCard({ id, name, cuisine, rating, price, image, addToCart }) {

  const handleAdd = () => {
    addToCart({ id, name, cuisine, rating, price });
    toast.success(name + " added to cart!");
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>⭐ {rating}</p>
      <p>₹{price}</p>

      <button style={styles.button} onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#ff5200",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default RestaurantCard;