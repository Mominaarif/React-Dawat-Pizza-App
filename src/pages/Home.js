import React from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

const Home = () => {
  return (
    <div className="App">
      <Featured />
      <PizzaList />
    </div>
  );
};

export default Home;