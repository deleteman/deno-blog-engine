/** @jsx h */
    import { h } from "preact";
    import SearchBar from "../../islands/SearchBar.tsx"
    
    export default function Page() {
      return (
        <div style="padding: 10px; width: 90%; margin: 0 auto;">
            <SearchBar ></SearchBar>
            <h1 id="this-is-my-second-blog-post">This is my second blog post</h1>

        </div>
      );
    }
