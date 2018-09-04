import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "@kono/core/button/index.css";

storiesOf("Core/Button", module).add("with text", () => (
  <button className="a-btn" onClick={action("clicked")}>
    Hello button
  </button>
));
