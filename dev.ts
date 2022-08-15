#!/usr/bin/env -S deno run -A --watch=static/,routes/
import {readAllMD} from './utils/mdUtils.ts'

import dev from "$fresh/dev.ts";


await readAllMD('./content', './routes/blog')
await dev(import.meta.url, "./main.ts");
