import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants";

function Home({ addToCart }) {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = restaurants.filter((r) => {
    return (
      (filter === "All" || r.cuisine === filter) &&
      r.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const recommended = restaurants.filter((r) => r.rating >= 4.5);

  return (
    <div>

      <div style={styles.topBar}>
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
          <option>All</option>
          <option>Fast Food</option>
          <option>Italian</option>
          <option>Indian</option>
        </select>
      </div>

      <h2 style={styles.heading}>🔥 AI Recommended</h2>

      <div style={styles.container}>
        {recommended.map((res) => (
          <RestaurantCard key={res.id} {...res} addToCart={addToCart} />
        ))}
      </div>

      <h2 style={styles.heading}>🍽 All Restaurants</h2>

      <div style={styles.container}>
        {filtered.map((res) => (
          <RestaurantCard key={res.id} {...res} addToCart={addToCart} />
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    padding: "20px"
  },

  topBar: {
    display: "flex",
    gap: "10px",
    padding: "20px"
  },

  input: {
    padding: "10px",
    flex: 1,
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  select: {
    padding: "10px",
    borderRadius: "8px"
  },

  heading: {
    padding: "10px 20px"
  }
};

export default Home;