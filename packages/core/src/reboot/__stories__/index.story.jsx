import React from "react";
import { storiesOf } from "@storybook/react";

import "@kono/core/reboot/index.css";

storiesOf("Core/Reboot", module)
  .add("Code", () => (
    <div class="example">
      <p>
        <pre>This is a &lt;pre&gt; tag.</pre>
      </p>
      <p>
        You can also use <code>&lt;code&gt;</code> for inline code.
      </p>
    </div>
  ))
  .add("Links", () => (
    <div class="example">
      <a href="#">A simple link</a>.
    </div>
  ))
  .add("Typography", () => (
    <div class="example">
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
      <h4>Heading h4</h4>
      <h5>Heading h5</h5>
      <h6>Heading h6</h6>
      <p>
        Paragraph with <abbr title="abbreviations">abbr</abbr>,{" "}
        <strong>bold text</strong>, <em>italic text</em>,{" "}
        <small>small text</small>, <sub>subscripts</sub>, <dfn>definitions</dfn>
        , and <sup>superscripts</sup>.
      </p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <dl>
        <dt>Term</dt>
        <dd>Description</dd>
        <dt>Term</dt>
        <dd>Description</dd>
      </dl>
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 50 years, WWF has been protecting the future of nature. The world's
        leading conservation organization, WWF works in 100 countries and is
        supported by 1.2 million members in the United States and close to 5
        million globally.
      </blockquote>
      <address>
        Example.com
        <br />
        Box 564, Example
        <br />
        USA
      </address>
    </div>
  ))
  .add("Table", () => (
    <div class="example">
      <table>
        <caption>A table caption.</caption>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add("Form", () => (
    <div class="example">
      <form onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Legend</legend>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input id="username" type="text" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" placeholder="1234" />
          </div>
          <div>
            <button>Sign in</button>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="text">Text: </label>
            <input id="text" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" />
          </div>
          <div>
            <label htmlFor="date">Date: </label>
            <input id="date" type="date" />
          </div>
          <div>
            <label htmlFor="time">Time: </label>
            <input id="time" type="time" />
          </div>
          <div>
            <label htmlFor="datetime-local">DateTime: </label>
            <input id="datetime-local" type="datetime-local" />
          </div>
          <div>
            <label htmlFor="month">Month: </label>
            <input id="month" type="month" />
          </div>
          <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="search" />
          </div>
          <div>
            <label htmlFor="number">Number: </label>
            <input id="number" type="number" />
          </div>
          <div>
            <label htmlFor="file">File: </label>
            <input id="file" type="file" />
          </div>
          <div>
            <label htmlFor="select">Select: </label>
            <select id="select">
              <optgroup label="Group 1">
                <option>Option 1</option>
                <option>Option 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Option 1</option>
                <option>Option 2</option>
              </optgroup>
            </select>
          </div>
          <div>
            <progress value="10" max="100" min="0" />
          </div>
        </fieldset>
      </form>
    </div>
  ));
