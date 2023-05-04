import React from "react";
import { Button, Card, Image } from "react-bootstrap";

const AllRecipes = ({ recipe }) => {
  const {
    index,
    recipe_name,
    recipe_picture,
    ingredients,
    cooking_method,
    rating,
  } = recipe;
  return (
    <>
      <Card border="info" className="text-center w-75 mx-auto m-4">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Image
            style={{ width: "30rem", height: "16rem" }}
            src={recipe_picture}
          ></Image>
          <Card.Title>Recipe: {recipe_name} </Card.Title>
          <Card.Text>
            <h6>Ingredients:</h6> {ingredients}
          </Card.Text>
          <Card.Text>
            <h6>Cooking Method:</h6> {cooking_method}
          </Card.Text>
          <h6> Ratings: {rating} </h6>
          <Button className="btn-secondary ">Add to Favourite</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllRecipes;
