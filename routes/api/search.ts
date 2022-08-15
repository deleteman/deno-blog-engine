import { Handlers} from "$fresh/server.ts";
import {Search} from "../../utils/search.ts"

export const handler: Handlers = {
    GET(_req) {
        const url = new URL(_req.url)
        const q:string = url.searchParams.get("q") || ""

        const s = Search.getInstance()

        const body = s.searchFile(q)
        return new Response(JSON.stringify(body))
      }
};
