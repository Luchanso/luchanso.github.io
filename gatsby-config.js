module.exports = {
  graphqlTypegen: true,
  pathPrefix: "/",
  siteMetadata: {
    title: `Blog`,
    copyright: "Luchanskii Oleg",
    author: {
      name: `Luchanskii Oleg`,
    },
    description: `Luchanskii Oleg personal Site`,
    siteUrl: `https://luchanso.github.io/`,
    social: {
      twitter: `luchanso`,
    },
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, ".md"],
        JSFrontmatterEngine: true,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              linkImagesToOriginal: false,
              quality: 95,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: "rgba(0,0,0,0.66)",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  filter: { frontmatter: { hidden: { ne: true } } },
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    slug
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Luchanskii Oleg Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luchanskii Oleg Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
