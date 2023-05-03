/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const details = useParams();
  console.log(details);

  return (
    <div>
      <h3>recipe details coming soon</h3>
    </div>
  );
};

export default RecipeDetails;
