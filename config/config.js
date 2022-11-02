import dotenv from "npm:dotenv";
import process from 'https://deno.land/std@0.120.0/node/process.ts'
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL,
};
