import React from "react";
import { storiesOf } from "@storybook/react";

import "@kono/core/input/index.css";
import "@kono/core/select/index.css";

storiesOf("Core/Select", module).add("default", () => (
  <React.Fragment>
    <div className="example">
      <select className="select">
        <option className="select__option">Option 1</option>
        <option className="select__option">Option 2</option>
        <option className="select__option">Option 3</option>
        <option className="select__option">Option 4</option>
      </select>
    </div>
    <div className="example">
      <select className="select" multiple>
        <option className="select__option">Option 1</option>
        <option className="select__option">Option 2</option>
        <option className="select__option">Option 3</option>
        <option className="select__option">Option 4</option>
      </select>
    </div>
    <div className="example">
      <select className="select" disabled>
        <option className="select__option">Option 1</option>
        <option className="select__option">Option 2</option>
        <option className="select__option">Option 3</option>
        <option className="select__option">Option 4</option>
      </select>
    </div>
    <div className="example">
      <select className="select" disabled multiple>
        <option className="select__option">Option 1</option>
        <option className="select__option">Option 2</option>
        <option className="select__option">Option 3</option>
        <option className="select__option">Option 4</option>
      </select>
    </div>
  </React.Fragment>
));
