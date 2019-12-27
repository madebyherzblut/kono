import { action } from "@storybook/addon-actions";
import * as React from "react";
import "../../reset/index.scss";
import "../_index.scss";

export default {
  title: "Button"
};

export const Variants = () => (
  <>
    <div>
      <button className="btn" onClick={action("clicked")}>
        A default button
      </button>
    </div>
    <div>
      <button className="btn" disabled onClick={action("clicked")}>
        A disabled default button
      </button>
    </div>
  </>
);

export const Links = () => (
  <a href="#" className="btn">
    A link button
  </a>
);
