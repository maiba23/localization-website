module.exports = {
  siteMetadata: {
    title: "ITIO - your Web Agency",
    supportedLanguages: ["en", "es"],
    siteUrl:
      process.env.GATSBY_ACTIVE_ENV === "development"
        ? "http://localhost:8000"
        : "https://itio.dev",
  },
  plugins: [
    `gatsby-plugin-styled-jsx`,
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-page-transitions",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-ZVL1KNY76P",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: "2428625",
        sv: 6,
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-J4M3BCB8V1",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        siteUrl:
          process.env.GATSBY_ACTIVE_ENV === "production"
            ? `https://itio.dev`
            : `http://localhost:8000`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
