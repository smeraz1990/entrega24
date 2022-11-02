import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { Bson, MongoClient,} from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import express from "npm:express";
import config from "../config/config.js";
import routes from "../routes/index.ts"

const app: Application = new Application();
const router = new Router();

app.use(routes.routes());

app.listen({ port: 3000 });

console.log("Server listening on: http://127.0.0.1:3000");
