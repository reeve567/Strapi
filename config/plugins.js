module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,

  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "no-reply@reeve.dev",
        defaultReplyTo: "no-reply@reeve.dev",
      },
    }
  },
  
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      shadowCRUD: true,
      apolloServer: {
        tracing: false,
      },
    }
  },
});
