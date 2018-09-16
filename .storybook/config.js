import { configure } from "@storybook/react";

import "./storybook.css";
import "@kono/core/reboot/index.css";

configure(function() {
  const ctx = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.story\.jsx$/
  );

  ctx.keys().forEach(ctx);
}, module);
