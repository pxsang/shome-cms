module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "stapi"),
        password: env("DATABASE_PASSWORD", ""),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});
