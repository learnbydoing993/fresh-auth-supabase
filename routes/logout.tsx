import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const headers = new Headers();
    deleteCookie(headers, "supaLogin");
    headers.set("location", "/");
    return new Response(null, {
      status: 303,
      headers,
    });
  }
}