function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button style={styles.remove} onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px"
  },

  remove: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Cart;