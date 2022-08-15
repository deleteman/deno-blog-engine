
export type SearchElement = {
    content: string,
    path: string
}

export class Search {

    elements: SearchElement[] = []
    static instance: Search;

    static getInstance() {
        if(!Search.instance) {
            Search.instance = new Search()
        }
        return Search.instance;
    }

    indexElement(content: string, path: string) {
        this.elements.push({
            content,
            path
        })
    }

    searchFile(q: string) {
        console.log("Searching inside ", this.elements.length, "files")
        console.log("Searching for: ", q)
        const matches = this.elements.filter( e => {
            return e.content.indexOf(q) != -1
        })
        return matches
    }

}