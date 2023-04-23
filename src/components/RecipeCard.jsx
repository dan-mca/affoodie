import React from "react";
import { Link } from "react-router-dom";
import '../styles/RecipeCard.css'
import placeholder from "../images/placeholder.png";

const RecipeCard = ({ recipe }) => {
    // create variable for image path
    // const imagePath = `../images/${recipe.id}.jpg`;
    const imagePath = require(`../images/${recipe.id}.jpg`) || placeholder;
    console.log(recipe)

  return (
    <div className="card">
      <img className="card-img-top" src={imagePath} alt={recipe.title} />
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
      </div>
    </div>
  );
};

export default RecipeCard;
