import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const Recipe = () => {
  const { title } = useParams();
  const recipe = recipes.find((recipe) => recipe.title === title);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default Recipe;

