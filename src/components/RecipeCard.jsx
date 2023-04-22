import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
