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
import MidBanner from "./MidBanner/MidBanner";

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
      <MidBanner />
      <div className="mt-5 bg-image bg-parallax overlay">
        <div className="container">
          <div className="row">
            <div className="p-5 col-md-6 text-start text-white">
              <h2>Grab a 50% offer</h2>
              <p className="lead fs-5">
                get our deal and have a chance to study for your desired subject
                abroad and get your dream job
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="section-hr" />
      <div className="row">
        <div className="section-header text-center">
          <h1 className="mt-5">
            Why Learn<span style={{ color: "#374050" }}>JAVASCRIPT ?</span>
          </h1>
          <p className="lead fs-5">
            because we have the best resources avaiable, not just to study but
            to have a mind refreshment
          </p>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faCloud} />
            <div className="feature-content text-start">
              <h4>Online Courses</h4>
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
              <h4>Live Sessions</h4>
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
              <h4>Interactive Games</h4>
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
