import type { Context } from "hono";
import type { HonoOptions } from "../../types/bindings";

import { LandingPage } from "../../../views/index/page";

export const indexGet = async (c: Context<HonoOptions>) => {
  return c.html(LandingPage());
};
