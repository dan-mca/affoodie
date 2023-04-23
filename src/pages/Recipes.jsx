import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import RecipeCard from '../components/RecipeCard';
import '../styles/Recipes.css'

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main className='recipes'>
      <h1>Recipes</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search recipes...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='recipe-card-container'>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
