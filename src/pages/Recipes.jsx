import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';

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

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link
              to={{ pathname: `/recipe/${recipe.title}`, state: { title: recipe.title } }}
            >
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
