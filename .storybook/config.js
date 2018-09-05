import { configure } from "@storybook/react";

configure(function() {
  const ctx = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.story\.jsx$/
  );

  ctx.keys().forEach(ctx);
}, module);
