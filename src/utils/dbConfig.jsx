import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:AjuKR4Sg3Fos@ep-empty-breeze-a5fce4fm.us-east-2.aws.neon.tech/beat_cancer?sslmode=require",
);
export const db = drizzle(sql, { schema });