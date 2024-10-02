import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";

export interface Middleware {
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    next: NavigationGuardNext
  ): void | Promise<void>;
}

export interface Middlewares {
  [index: string]: Middleware;
}
