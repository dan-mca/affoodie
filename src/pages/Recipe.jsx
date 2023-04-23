// import React from 'react';
// import { useParams } from 'react-router-dom';
// import RecipeCard from '../components/RecipeCard';
// import { recipes } from '../data/recipes';
// import '../styles/Recipe.css'

// const Recipe = () => {
//   const { title } = useParams();
//   const recipe = recipes.find((recipe) => recipe.title === title);

//   if (!recipe) {
//     return <div>Recipe not found</div>;
//   }

//   return (
//     <div>
//       <RecipeCard recipe={recipe} />
//     </div>
//   );
// };

// export default Recipe;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import db from '../firebase';

const Recipe = () => {
  const { title } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const unsubscribe = db.collection('recipes')
      .where('title', '==', title)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          setRecipe({ id: doc.id, ...doc.data() });
        });
      });
    return () => unsubscribe();
  }, [title]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default Recipe;


