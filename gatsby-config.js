/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `PlateItUp`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2ziz6el5', 
        dataset: 'production',
        graphqlTag: 'default',
        watchMode: true,
        apiVersion: '2025-3-18',
      },
    },
    `gatsby-plugin-image`,
  ],
  
};
