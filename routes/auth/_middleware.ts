import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { State } from "../_middleware.ts";

export function handler(_req: Request, ctx: MiddlewareHandlerContext<State>) {
  if (!ctx.state.token) {
    const headers = new Headers();
    headers.set("location", "/login");
    return new Response(null, {
      status: 303,
      headers,
    });
  }

  return ctx.next();
}