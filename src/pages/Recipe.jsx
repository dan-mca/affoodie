import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
  const { id } = useParams();

  // Fetch recipe data from the backend using the id
  const recipe = {
    title: 'Spicy Shrimp Pasta',
    description: 'This spicy shrimp pasta recipe is a quick and easy dinner that comes together in just 30 minutes. Tender shrimp are coated in a flavorful spice mixture and sautéed with garlic and tomatoes. Tossed with spaghetti and topped with Parmesan cheese, it’s a delicious and satisfying meal!',
    image: 'https://www.simplyrecipes.com/thmb/86yG_KpefBz9ZASvzkQngR6OLJc=/2000x1125/smart/filters:no_upscale()/Simply-Recipes-Spicy-Shrimp-Pasta-LEAD-2-8fd281f2ea634b7ab96c76be1f8c1fb1.jpg',
    ingredients: ['8 oz. spaghetti', '1 lb. large shrimp, peeled and deveined', '2 cloves garlic, minced', '1/2 tsp. smoked paprika', '1/4 tsp. cayenne pepper', '1/2 tsp. salt', '1/4 tsp. black pepper', '1 tbsp. olive oil', '1/4 cup chopped fresh parsley', '1/4 cup grated Parmesan cheese'],
    instructions: ['Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente, about 8 minutes. Drain and set aside.', 'While the pasta cooks, prepare the shrimp. In a small bowl, combine the smoked paprika, cayenne pepper, salt, and black pepper.', 'Pat the shrimp dry and sprinkle with the spice mixture.', 'In a large skillet, heat the olive oil over medium-high heat. Add the shrimp and cook for 2-3 minutes per side, until pink and opaque. Remove from the skillet and set aside.', 'In the same skillet, add the garlic and cook for 30 seconds, until fragrant. Add the tomatoes and cook for 2-3 minutes, until they begin to soften and release their juices.', 'Return the shrimp to the skillet and toss to combine with the tomatoes.', 'Add the cooked spaghetti to the skillet and toss to combine with the shrimp and tomatoes.', 'Top with chopped parsley and grated Parmesan cheese.', 'Serve immediately.'],
  };

  return (
    <div>
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default Recipe;
