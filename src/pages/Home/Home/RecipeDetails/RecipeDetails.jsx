/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const details = useParams();
  const chefDetails = useLoaderData();

  return (
    <div>
      <h3> {chefDetails.index} </h3>
    </div>
  );
};

export default RecipeDetails;
