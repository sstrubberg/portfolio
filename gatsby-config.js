require(`dotenv`).config({ path: `.env` })

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Scott Strubberg’s Portfolio`,
    siteUrl: `https://strubberg.netlify.com`,
    description: `This is a portfolio that represents the career of Scott Strubberg, through all of it’s many iterations.`,
    author: `Scott Strubberg <sstrubberg@gmail.com>`,
    linkedIn: `https://www.linkedin.com/in/sstrubberg/`,
    github: `https://github.com/sstrubberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [path.resolve(__dirname, "node_modules")],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
              quotes: "true",
            },
          },
        ],
      },
    },
  ],
}