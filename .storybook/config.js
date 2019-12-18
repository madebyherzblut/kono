import { configure } from "@storybook/react";

configure(
  [
    require.context(
      "../packages/web-core/src",
      true,
      /__stories__\/.*\.story\.jsx$/
    )
  ],
  module
);
