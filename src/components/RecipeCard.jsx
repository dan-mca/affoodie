import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.description}</p>
        <div>
          <h6>Ingredients:</h6>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6>Instructions:</h6>
          {/* <p>{recipe.instructions}</p> */}
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          
        </div>
        <Link to={`/recipe/${recipe.title}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
