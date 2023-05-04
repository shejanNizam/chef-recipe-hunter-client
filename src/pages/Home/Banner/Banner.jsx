import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row banner d-flex align-items-center justify-content-center">
          <div className="col-6">
            <h1 className="title">
              develop Your <br /> Mind And Tests 📈
            </h1>
            <p className="text-white text-center mt-3">
              Hey, now this is pretty spicy for a restaurant banner design. The
              first thing that captures my attention is the well-done chicken in
              the middle of the banner. It does its job well at turning heads.
              Next is the “Hot Weekend Offer” caption. Of all restaurant
              promotion ideas, showcasing the food is an obvious trick that
              tends to work.
              <br />
              <small className="text-warning">
                What I like about how eye-grabbing it tends to be is the way how
                it creates a sense of urgency. Plus, the flame pattern is pretty
                cool to look at.
              </small>
            </p>
            <Link>
              <Button variant="outline-info text-white about-btn">
                who are we?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
