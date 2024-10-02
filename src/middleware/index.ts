import type { Middlewares } from "@/types/middleware";

import AuthMiddleware from "./auth/auth";
import GuestMiddleware from "./auth/guest";
import AuthenticateMiddleware from "./auth/authenticate";

const middlewares: Middlewares = {
  authenticate: AuthenticateMiddleware,
  auth: AuthMiddleware,
  guest: GuestMiddleware,
};

export default middlewares;
