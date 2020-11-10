module.exports = {
  siteMetadata: {
      title: `What's Missing From CSS?`
  },
  plugins: [
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'pages',
              path: `${__dirname}/src/pages`
          }
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-netlify',
    //   'gatsby-plugin-eslint',
  ]
}
