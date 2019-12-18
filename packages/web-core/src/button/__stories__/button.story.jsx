import React from "react";

export default { title: "Web Core|Button" };

export const withText = () => <button>Hello button</button>;

export const withEmoji = () => (
  <button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);
