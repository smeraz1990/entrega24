import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import saludoController from "../controllers/saludo.Controller.ts";
import homeController from "../controllers/home.controller.ts";

const router: Router = new Router();



router.get("/", homeController.getHome)
router.get("/saludo", saludoController.getSaludo)

export default router;
