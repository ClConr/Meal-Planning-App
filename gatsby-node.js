const path = require(`path`)



exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
  
    // Fetch all recipes
    const result = await graphql(`
    query {
        allSanityRecipes {
          nodes {
            _id
            name
        }
      }
    }
    `);
    if (result.errors) throw result.errors;
  
    // Create pages for each recipe
    result.data.allSanityRecipes.nodes.forEach((node) => {
      createPage({
        path: `/recipes/${node.name.toLowerCase().replace(/\s+/g, '-')}`, // Generate a URL slug
        component: path.resolve('./src/templates/recipeTemplate.js'),
        context: {
          id: node._id, 
        },
      });
    });
  };