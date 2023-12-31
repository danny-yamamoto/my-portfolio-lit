import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { articles } from './utils/articles'

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div class="card">
        <section id="intro">
          <p>Welcome to my portfolio</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
        </section>
        <section id="article">
          <h2>Top 20 Articles</h2>
          ${articles()}
        </section>
        <footer>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
          <p>&copy; 2023 hoge. All rights reserved.</p>
          <div class="social-links">
            <a href="https://github.com/danny-yamamoto" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/dai_s_a_n" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </footer>
      </div>
    `
  }

  static styles = css`
/*
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
*/
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }
    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      color: #0077cc;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    button:hover {
      border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
    section {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1rem 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .social-links a {
      color: #fff;
      font-size: 1.5rem;
      margin-left: 10px;
      text-decoration: none;
    }
  
    .social-links a:hover {
        color: #0077cc;
    }

    #intro {
      background-color: #333;
      color: #fff;
    }

    #articles {
      background-color: #ddd;
    }

    h1, h2 {
      margin: 0 0 20px;
      border-bottom: 2px solid #333;
    }
    /** host is my-element tag style */
    :host {
      width: 100%
    }
    ul li {
      margin-bottom: 0px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
