import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={styles.nav}>

      <h2>Food Delivery</h2>

      <div style={styles.links}>
        <Link to="/">
          <button style={styles.button}>Home</button>
        </Link>

        <Link to="/cart">
          <button style={styles.button}>
            Cart 🛒 ({cartCount})
          </button>
        </Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#ff5200",
    color: "white"
  },

  links: {
    display: "flex",
    gap: "10px"
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Navbar;