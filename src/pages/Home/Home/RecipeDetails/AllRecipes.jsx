import React, { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { toast } from "react-hot-toast";

const AllRecipes = ({ recipe }) => {
  const [isClicked, setIsClicked] = useState(false);

  const {
    index,
    recipe_name,
    recipe_picture,
    ingredients,
    cooking_method,
    rating,
  } = recipe;

  const addToFav = () => {
    setIsClicked(true);
    toast.success("Added to Favourite");
  };

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
          <Button
            onClick={addToFav}
            disabled={isClicked}
            className="btn-secondary "
          >
            Favourite
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllRecipes;
