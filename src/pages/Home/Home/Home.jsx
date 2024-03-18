import {
  faBullseye,
  faCloud,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ChefCard from "./ChefCard/ChefCard";
import "./Home.css";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <>
      <Banner />
      <div className="my-5 text-center">
        <h2>Here our all Kitchen Heros</h2>
        <p>
          A chef is a highly trained and skilled professional cook who is
          proficient in all aspects of food preparation of a particular cuisine.
          <br />
          The word "chef" is derived (from shortened) from the term chef de
          cuisine (French pronunciation: [ʃɛf.də .kɥi.zin]), the director or
          head of a kitchen. <br /> Chefs can receive both formal training from
          an institution, as well as through apprenticeship with an experienced
          chef.
        </p>
      </div>
      <div className="cards">
        {chefData.map((singleChef) => (
          <ChefCard key={singleChef._id} singleChef={singleChef}></ChefCard>
        ))}
      </div>

      <div className="my-5 bg-image bg-parallax overlay">
        <div className="container">
          <div className="row">
            <div className="p-5 col-md-6 text-start text-white">
              <h2>Grab a 50% offer</h2>
              <p className="lead fs-5">
                get our deal and have a chance to all food for your desired dish
                abroad and get your favourite food
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="section-hr" />
      <div className="row mb-5">
        <div className="section-header text-center">
          <h1>
            Why Chef<span style={{ color: "#374050" }}>Savvy ?</span>
          </h1>
          <p className="lead fs-5">
            because we have the best chef avaiable, not just to cook but to have
            a special serve..
          </p>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faCloud} />
            <div className="feature-content text-start">
              <h4>Online Orders</h4>
              <p className="lead fs-5">
                Containing all the suggestions on books, videos, walkthroughs,
                animations, diagrams, podcasts, tips, tactics and extra
                resources, users can follow a study routine synchronized with
                their test date
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faBullseye} />
            <div className="feature-content text-start">
              <h4>Cash on Delevary</h4>
              <p className="lead fs-5">
                live walkthrough of official practice tests on both English and
                Math section and answer submission by a JavaScript poll + zoom
                based private tutoring system on need basis
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faGamepad} />
            <div className="feature-content text-start">
              <h4>Interactive Dishes</h4>
              <p className="lead fs-5">
                cognitive skills through exercises and games like "The Math
                Game", "The Dice", "The Simon Game", "Fruit Slice Game" as an
                excercise for muscle memory
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
