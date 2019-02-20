import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "@kono/core/button/index.css";

storiesOf("Core/Button", module)
  .add("with different intents", () => (
    <React.Fragment>
      <div className="example">
        <div>
          <button className="btn" onClick={action("clicked")}>
            Default
          </button>
        </div>
        <br />
        <div>
          <button className="btn btn--primary" onClick={action("clicked")}>
            Primary
          </button>
        </div>
        <br />
        <div>
          <button className="btn btn--danger" onClick={action("clicked")}>
            Danger
          </button>
        </div>
        <br />
        <div>
          <button className="btn btn--warning" onClick={action("clicked")}>
            Warning
          </button>
        </div>
        <br />
        <div>
          <button className="btn btn--success" onClick={action("clicked")}>
            Success
          </button>
        </div>
      </div>
    </React.Fragment>
  ))
  .add("with block size", () => (
    <React.Fragment>
      <div className="example">
        <button className="btn btn--block" onClick={action("clicked")}>
          Block
        </button>
      </div>
    </React.Fragment>
  ));
