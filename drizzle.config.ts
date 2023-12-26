import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    // host: env.DATABASE_HOST,
    // user: env.DATABASE_USERNAME ,
    // password: env.DATABASE_PASSWORD,
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["headmaster_*"],
} satisfies Config;
