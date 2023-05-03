import React from "react";
import { Button, Card } from "react-bootstrap";

const AllRecipes = ({ recipe }) => {
  const { index, recipe_name, ingredients, cooking_method, rating } = recipe;
  return (
    <>
      <Card border="info" className="text-center w-75 mx-auto m-4">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
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
