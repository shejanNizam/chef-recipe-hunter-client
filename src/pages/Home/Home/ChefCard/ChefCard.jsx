/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefCard = ({ singleChef }) => {
  //   console.log(singleChef);
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    numbers_of_recipes,
    likes,
    short_bio,
  } = singleChef;
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={chef_picture}
        />
        <Card.Body>
          <h3> {chef_name} </h3>
          <h6>Experience: {years_of_experience}+ Years </h6>
          <h6>Number of Recipes: {numbers_of_recipes}+ Items </h6>
          <h6>Likes: {likes} </h6>
          {/* to={`/details/${course.id}`} */}
          <Link>
            <Button variant="outline-secondary">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
