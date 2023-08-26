import { directive, AsyncDirective } from "lit/async-directive.js";
import { html } from "lit";

class ArticlesDirective extends AsyncDirective {
    render() {
        return html`
        <p>hoge</p>
        `;
    }
}

export const articles = directive(ArticlesDirective);
