module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'http://www.shomeinterior.com/api',
    admin: {
      url: 'http://www.shomeinterior.com//dashboard',
    },
  });
