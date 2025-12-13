import { Hono } from "hono";
import type { HonoOptions } from "../types/bindings";
import { indexGet } from "../controllers/index/get";

const homeRouter = new Hono<HonoOptions>();

homeRouter.get("/", indexGet);

export { homeRouter };
