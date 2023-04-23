import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import '../styles/Recipes.css'

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('recipes').onSnapshot((snapshot) => {
      const newRecipes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecipes(newRecipes);
    });
    return () => unsubscribe();
  }, []);

  console.log(recipes)

  return (
    <main class='recipes'>
      <h1>Recipes</h1>
      <ul class='recipe-list'>
        {recipes.map((recipe) => (
          <li class='recipe' key={recipe.id}>
            <Link class='recipe-title'
              to={{ pathname: `/recipe/${recipe.title}`, state: { title: recipe.title } }}
            >
              {recipe.title}
            </Link>
            <p class='recipe-description'>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Recipes;
