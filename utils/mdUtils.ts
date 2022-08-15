import {walk} from "https://deno.land/std@0.150.0/fs/mod.ts";
import {Marked} from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { encode } from "https://deno.land/std/encoding/hex.ts";
import {Search} from './search.ts'


function pageTemplate(html: string) {

    return `/** @jsx h */
    import { h } from "preact";
    import SearchBar from "../../islands/SearchBar.tsx"
    
    export default function Page() {
      return (
        <div style="padding: 10px; width: 90%; margin: 0 auto;">
            <SearchBar ></SearchBar>
            ${html}
        </div>
      );
    }
`
}

async function saveMarkDownFile(content: string, fname: string, targetFolder: string) {

    let fnameParts = fname.split(".")
    fnameParts.pop()

    const fileUrl = '/blog/' + fnameParts.join(".")
    const mySearch = Search.getInstance()
    mySearch.indexElement(content, fileUrl)

    fnameParts.push("tsx")


    const destination = targetFolder + "/" + fnameParts.join(".")

    const encoder = new TextEncoder()
    let targetHash = "";

    content = pageTemplate(content)
    const sourceHash = encode(new Uint8Array(await crypto.subtle.digest('sha-1', encoder.encode(content)))).toString();
    try {
        const targetFile = await Deno.readTextFile(destination);
        targetHash = encode(new Uint8Array(await crypto.subtle.digest('sha-1', encoder.encode(targetFile)))).toString()
    } catch( e ) {
        console.log("Target file doesn't yet exists....")
    }


    console.log(sourceHash)
    console.log(targetHash)
    if(targetHash != sourceHash){
        console.log("different values, updating....")
        await Deno.writeTextFile(destination, content)
    }
}

export async function readAllMD(source: string, target: string) {

    for await (const file of walk(source)) {
        if(file.isFile) {
            const markdown = await Deno.readTextFile(file.path);
            const markup = Marked.parse(markdown); 
            console.log(markup)
            await saveMarkDownFile(markup.content, file.name, target)
        }
    }
}