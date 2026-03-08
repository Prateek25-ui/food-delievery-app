import { toast } from "react-toastify";

function Cart({ cart, removeFromCart }) {

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.error(name + " removed from cart");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (

        <div key={item.id} style={styles.card}>

          <div>
            <h3>{item.name}</h3>
            <p>{item.cuisine}</p>
            <p>₹{item.price}</p>
          </div>

          <button
            style={styles.remove}
            onClick={() => handleRemove(item.id, item.name)}
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
}

const styles = {

  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    marginTop: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  remove: {
    background: "#ff3b30",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Cart;