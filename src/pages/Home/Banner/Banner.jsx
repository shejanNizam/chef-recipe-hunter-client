import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="row banner d-flex pt-5 justify-content-center">
        <div className="col-6">
          <h1 className="title">
            develop Your <br /> Mind And Tests 📈
          </h1>
          <p className="text-white text-center mt-1">
            Hey, now this is pretty spicy for a restaurant banner design. The
            first thing that captures my attention is the well-done chicken in
            <br />
            <small className="text-warning">
              What I like about how eye-grabbing it tends to be is the way how
              it creates a sense of urgency. Plus, the flame pattern is pretty
              cool to look at.
            </small>
          </p>
          <Link to="/about">
            <Button variant="outline-info text-white about-btn">
              who are we?
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
