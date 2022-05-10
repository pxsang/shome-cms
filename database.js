const fs = require("fs");

const ca = fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString();

console.log("listing directory contents", __dirname);
fs.readdirSync(__dirname).forEach((file) => {
  console.log(file);
});

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: {
          ca,
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
