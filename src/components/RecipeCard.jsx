import React from 'react';
import placeholder from '../images/placeholder.png'
import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  const tags = ['vegan', 'gluten-free']
  const recipeImage = require(`../images/recipes/${recipe.id}${recipe.imageFileType}`)
  const tempUrl = 'https://bbc.co.uk'

  return (
    <div className='recipe-card'>
      <Link to={tempUrl}>
        <img className='recipe-image' src={recipeImage} onError={(e) => e.target.src = placeholder} alt={recipe.title} />
        <h2 className='recipe-title'><a href={recipe.url || tempUrl}>{recipe.title}</a></h2>
      </Link>
      <div className='recipe-details'>
        <p className='recipe-description'>{recipe.description}</p>
        <div className='recipe-tags'>
          {tags.map((tag) => (
            <span className='tag' key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default RecipeCard;

