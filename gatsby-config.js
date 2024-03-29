require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Commerce 2020`,
    description: `E-Commerce JAM starter with Gatsby as static site generator, utility based styling with Tailwind and deployment on Netlify. To be cloned to extend with API's and content management for E-commerce`,
    author: `Eli Colpaert`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stripe`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Commerce 2020`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku', 'Subscription'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ODg0NTFhZTEtZThkMy00OWJlLWIwZmEtOTVhZDk0MjYzMjljNjM3MDIwNTgxMjc3Njg5NjA0',
        autopop: true,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e37ybt6spd36`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
