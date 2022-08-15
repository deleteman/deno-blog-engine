/** @jsx h */
    import { h } from "preact";
    import SearchBar from "../../islands/SearchBar.tsx"
    
    export default function Page() {
      return (
        <div style="padding: 10px; width: 90%; margin: 0 auto;">
            <SearchBar ></SearchBar>
            <h1 id="hi-there-">Hi there!</h1>
<p>First blog post!</p>

        </div>
      );
    }
