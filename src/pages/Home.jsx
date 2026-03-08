  import RestaurantCard from "../components/RestaurantCard";
  import restaurants from "../data/restaurants";

  function Home({ addToCart }) {

    return (
      <div style={styles.container}>

        {restaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            id={res.id}
            name={res.name}
            cuisine={res.cuisine}
            rating={res.rating}
            price={res.price}
            addToCart={addToCart}
          />
        ))}

      </div>
    );
  }

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "20px",
      padding: "20px"
    }
  };

  export default Home;