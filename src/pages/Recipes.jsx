import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Mediterranean Salad",
      description: "A delicious salad with fresh vegetables and feta cheese",
      ingredients: ["tomatoes", "cucumbers", "onion", "feta cheese", "olives", "olive oil", "lemon juice"],
      instructions: "1. Cut vegetables into bite-sized pieces. 2. Crumble feta cheese. 3. Combine all ingredients in a large bowl. 4. Drizzle with olive oil and lemon juice. 5. Toss to combine. Enjoy!",
      image: "https://www.example.com/mediterranean-salad.jpg"
    },
    {
      id: 2,
      title: "Anti-Inflammatory Smoothie",
      description: "A refreshing smoothie with anti-inflammatory ingredients",
      ingredients: ["pineapple", "mango", "banana", "ginger", "turmeric", "coconut milk"],
      instructions: "1. Cut fruits into chunks. 2. Add all ingredients to a blender. 3. Blend until smooth. 4. Pour into a glass and enjoy!",
      image: "https://www.example.com/anti-inflammatory-smoothie.jpg"
    },
    // add more recipe objects here
  ];

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
