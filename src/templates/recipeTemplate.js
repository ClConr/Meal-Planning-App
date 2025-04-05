import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.js'
import * as styles from '../styles/template.module.scss'

const RecipePage = ({ data }) => {
  const recipe = data.sanityRecipes;

  if (!recipe) {
    return <Layout><div>Recipe not found</div></Layout>;
  };
  return (
    <Layout>
    <div className='mr-3'>
      <h1 className='mt-5 pt-5'>{recipe.name}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.ingredient} - {ingredient.measurement}
            {ingredient.price ? ` - $${ingredient.price}` : ''}
          </li>
        ))}
      </ul>
      <p className='mx-2'>{recipe.instructions}</p>
      <p>Source: {recipe.source}</p>
    </div>
    </Layout>
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