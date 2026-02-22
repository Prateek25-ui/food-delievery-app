import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants.js";

function Home() {
  return (
    <div style={styles.container}>
      {restaurants.map((res) => (
        <RestaurantCard
          key={res.id}
          name={res.name}
          cuisine={res.cuisine}
          rating={res.rating}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px",
    width: "100%",
  },
};

export default Home;