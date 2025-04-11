import { graphql, Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import "./recipes.css"; //Import style sheet

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/150"; //Default image for buttons if image provided does not appear

const RecipesPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allRecipes = data.allSanityRecipes.nodes;

  const filteredRecipes = allRecipes.filter( /*Funcitonality of the search bar */
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients?.some((ing) =>
        ing.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="container py-5">
      <h1 className="animated-header">Recipe Page</h1> 
      {/* Back to Main Menu Button */}
      <Link to="/" className="back-button">Home</Link> 

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes or ingredients..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching "{searchTerm}"</p>
      ) : (
        <div className="recipes-grid"> {/*Styling to make recipe buttons appear in a grid format */}
          {filteredRecipes.map((node) => {
            const imageUrl = node.picture?.asset?.url || DEFAULT_IMAGE_URL;

            return (
              <Link
                to={`/recipes/${node.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={node._id}
                className="recipe-button" /*Styling for the recipe buttons */
              >
                <div
                  className="recipe-image" /*Styling for th image layout */
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <span className="recipe-name">{node.name}</span> 
              </Link> /*Styling for the recipe name on the button */
            );
          })}
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query M {
    allSanityRecipes {
      nodes {
        _id
        name
        ingredients {
          ingredient
          measurement
          price
        }
        picture {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default RecipesPage;

