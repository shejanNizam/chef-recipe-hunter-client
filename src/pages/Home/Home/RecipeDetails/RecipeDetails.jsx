import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import AllRecipes from "./AllRecipes";

const RecipeDetails = () => {
  const chefDetails = useLoaderData();
  const {
    _id,
    chef_picture,
    chef_name,
    short_bio,
    likes,
    numbers_of_recipes,
    years_of_experience,
    all_recipes,
  } = chefDetails;

  return (
    <>
      <div className="d-flex align-items-center m-5">
        <img
          className="me-4"
          style={{ width: "20rem", height: "16rem" }}
          src={chef_picture}
          alt="chef_picture"
        />
        <div>
          <h3> Chef: {chef_name} </h3>
          <h6>
            Short Bio: <small>{short_bio}</small>{" "}
          </h6>
          <h6>Likes: {likes} </h6>
          <h6>Number of Recipes: {numbers_of_recipes}+ Recipes </h6>
          <h6>Year of Experience: {years_of_experience}+ Years </h6>
        </div>
      </div>
      <h2 className="text-center"> Popular Recipes </h2>
      {all_recipes.map((recipe) => (
        <AllRecipes key={recipe.index} recipe={recipe}></AllRecipes>
      ))}
      <div className="text-center">
        <Link to="/">
          <Button variant="secondary my-3"> Go Back</Button>
        </Link>
      </div>
    </>
  );
};

export default RecipeDetails;
