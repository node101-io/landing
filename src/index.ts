import { Hono } from "hono";

import type { HonoOptions } from "./types/bindings";

import { homeRouter } from "./routes/home";

const app = new Hono<HonoOptions>();

app.route("/", homeRouter);

export default app;
