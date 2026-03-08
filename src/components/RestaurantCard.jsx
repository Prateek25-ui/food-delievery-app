import { toast } from "react-toastify";

function RestaurantCard({ id, name, cuisine, rating, price, addToCart }) {

  const handleAdd = () => {
    addToCart({ id, name, cuisine, rating, price });
    toast.success(name + " added to cart!");
  };

  return (
    <div style={styles.card}>

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
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  button: {
    marginTop: "10px",
    padding: "10px 16px",
    background: "#ff5200",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default RestaurantCard;