import React from "react";
import { storiesOf } from "@storybook/react";

import "@kono/core/input/index.css";

storiesOf("Core/Inputs", module).add("with different input types", () => (
  <React.Fragment>
    <div className="example">
      <input className="input" type="text" placeholder="Text" />
    </div>
    <div className="example">
      <input className="input" type="password" placeholder="Password" />
    </div>
    <div className="example">
      <input className="input" type="search" placeholder="Search" />
    </div>
    <div className="example">
      <input className="input" type="email" placeholder="Email" />
    </div>
    <div className="example">
      <input className="input" type="tel" placeholder="Telephone" />
    </div>
    <div className="example">
      <input className="input" type="url" placeholder="URL" />
    </div>
    <div className="example">
      <input className="input" type="checkbox" />
    </div>
    <div className="example">
      <input className="input" type="radio" />
    </div>
    <div className="example">
      <input
        className="input"
        type="number"
        min="10"
        max="30"
        step="5"
        defaultValue="5"
      />
    </div>
    <div className="example">
      <input className="input" type="range" min="10" max="30" step="5" />
    </div>
    <div className="example">
      <input className="input" type="color" />
    </div>
    <div className="example">
      <input className="input" placeholder="Disabled" disabled />
    </div>
  </React.Fragment>
));
