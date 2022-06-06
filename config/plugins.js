module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'vipul.malakiya@teamcomputers.com',
        defaultReplyTo: 'vipul.malakiya@teamcomputers.com',
        testAddress: 'jitender.g@teamcomputers.com',
      },
    },
  },
});