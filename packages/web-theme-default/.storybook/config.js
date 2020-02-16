import { configure } from "@storybook/react";

configure(
  [require.context("../src", true, /__stories__\/.*\.story\.(jsx|mdx)$/)],
  module
);
