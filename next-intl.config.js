const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  // Other configurations...
  i18n: {
    locales: ['en', 'zh', 'ja', 'ko', 'tw'],
    defaultLocale: 'en',
    localeDetection: false, // Disable automatic locale detection
  },
  timeZone: 'UTC'
});
