import React from 'react';
import { graphql, Link } from 'gatsby';
import './recipeDetails.css'

const RecipePage = ({ data }) => {
  const recipe = data.sanityRecipes;

  if (!recipe) {
    return <div>Recipe not found</div>;
  };
  return (
    <div className="recipe-container">
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Link to="/recipes" className="nav-button">Recipes Page</Link>
        <Link to="/" className="nav-button">Home</Link>
      </div>
      <div className="recipe-header">
        <h1>{recipe.name}</h1>
      </div>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.ingredient} - {ingredient.measurement} - ${ingredient.price}
          </li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
      <p>Source: {recipe.source}</p>
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityRecipes(_id: { eq: $id }) {
      _id
      name
      instructions
      source
      ingredients {
        ingredient
        measurement
        price
      }
    }
  }
`;

export default RecipePage;