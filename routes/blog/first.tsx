/** @jsx h */
    import { h } from "preact";
    import SearchBar from "../../islands/SearchBar.tsx"
    
    export default function Page() {
      return (
        <div style="padding: 10px; width: 90%; margin: 0 auto;">
            <SearchBar ></SearchBar>
            <h1 id="this-is-the-main-page">This is the main page</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Etiam</strong> ultricies dolor tellus, a commodo arcu iaculis ew. <em>Praesent</em> dapibus ultrices tempor. Vestibulum id justo ut ipsum euismod iaculis eget ac nunc. Morbi neque est, euismod nec tempus in, fermentum vitae nibh. Curabitur euismod nibh a condimentum faucibus. Curabitur non nisi a magna fringilla varius. Aliquam pharetra congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non feugiat purus, ac semper ex. Mauris quis risus quis odio sagittis egestas. Sed consequat, magna nec dictum vehicula, metus nisl sollicitudin sem, quis feugiat arcu risus vitae arcu.</p>
<p>Donec tempor libero eros, at rutrum dolor pharetra et. Pellentesque at dolor arcu. Quisque posuere leo vitae eleifend eleifend. Proin <em>eget ex ut nisl tempus consequat</em>. Vestibulum in mi hendrerit, eleifend leo non, luctus elit. Quisque quis aliquet tortor. Quisque porttitor rhoncus libero. Cras eu mi ac nisi bibendum rhoncus eget vel mi. Maecenas dui tellus, ornare eu feugiat in, venenatis non velit. Cras accumsan dui arcu, a porttitor magna maximus eget. Donec euismod felis quis quam viverra, a condimentum tortor viverra. Nunc ultrices tortor nibh, ultricies ullamcorper lectus porttitor sed.</p>

<ul>
<li>First option</li>
<li>Second option</li>
<li>Third option</li>
</ul>

        </div>
      );
    }
