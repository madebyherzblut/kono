const path = require("path");

module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{ loader: require.resolve("ts-loader") }]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src")
  });

  return config;
};
