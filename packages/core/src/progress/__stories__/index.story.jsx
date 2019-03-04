import React from "react";
import { storiesOf } from "@storybook/react";

import "@kono/core/progress/index.css";

storiesOf("Core/Progress", module).add("with different intents", () => (
  <>
    <div className="example">
      <progress className="progress" min="0" max="100" value="50" />
    </div>
  </>
));
