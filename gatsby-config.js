const description = `Les Capsules sont un groupe d'amis de Sauclières dans le sud-Aveyron.`
const title = 'Les Capsules'
const baseUrl = process.env.REVIEW_ID
  ? `https://deploy-preview-${process.env.REVIEW_ID}--lescapsules.netlify.app`
  : `https://www.lescapsules.com`
const previewMode = process.env.PREVIEW_MODE === '1'
const gaTrackingId =
  process.env.PRODUCTION_DEPLOY === 'true' ? 'G-Q6XBC0V997' : 'G-xxx'

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    siteUrl: baseUrl,
    keywords: 'Sauclières, Capsules, Fete, soirée, concert, village',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `9xyjnlvq`,
        dataset: `production`,
        overlayDrafts: previewMode,
        watchMode: previewMode,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0054c7`,
        display: `standalone`,
        icon: `src/images/lescapsules-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          gaTrackingId, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: 'https://7f640f49556c48f1be30ad98d3f2787f@sentry.io/1527242',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        resolveSiteUrl: () => baseUrl,
        serialize: (page, tools) => {
          let priority = 0.5
          const pagePath = tools.resolvePagePath(page)
          if (pagePath === '/photos/') {
            priority = 0.7
          } else if (['/videos/', '/drink-team/'].includes(pagePath)) {
            priority = 0.6
          } else if (pagePath === '/') {
            priority = 1
          }
          return {
            url: `${baseUrl}${pagePath}`,
            changefreq: `monthly`,
            priority: priority,
          }
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      // Needs to be last
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            // Opt-out of Google's FLoC
            'Permissions-Policy: interest-cohort=()',
          ],
        },
      },
    },
  ],
}
