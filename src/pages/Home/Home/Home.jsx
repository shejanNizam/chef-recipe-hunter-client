/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ChefCard from "./ChefCard/ChefCard";
import "./Home.css";

const Home = () => {
  const chefData = useLoaderData();
  // console.log(chefData);

  return (
    <>
      <Banner />
      <div className="my-4 text-center">
        <h2>Here our all Kitchen Heros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          asperiores, assumenda numquam ducimus quam obcaecati et quod facilis
          deserunt sit.
        </p>
      </div>

      <div className="cards">
        {chefData.map((singleChef) => (
          <ChefCard key={singleChef._id} singleChef={singleChef}></ChefCard>
        ))}
      </div>
    </>
  );
};

export default Home;
