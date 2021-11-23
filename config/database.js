module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", ""),
        username: env("DATABASE_USERNAME", "strapi-database-teste"),
        password: env("DATABASE_PASSWORD", ""),
        ssl: { rejectUnauthorized: false },
      },
      options: {
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
