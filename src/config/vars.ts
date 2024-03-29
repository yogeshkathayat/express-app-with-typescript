import dotenv from "dotenv";
/**
 *   Load environment variables from .env file, where API keys and passwords are configured
 */

dotenv.config({ path: ".env" });

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const apiLink = `http://${process.env.HOST}:${process.env.PORT}`;
export const basePath = "/api/v1 ";
export const postgre = {
    uri: process.env.NODE_ENV ===  "test " ? process.env.PGSQL_URI_TESTS : process.env.PGSQL_URI,
    db: process.env.PGSQL_DB,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    username: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASS,
};
export const logs = process.env.NODE_ENV ===  "production " ?  "combined " :  "dev";
export const sentryDsn = process.env.SENTRY_DSN;
