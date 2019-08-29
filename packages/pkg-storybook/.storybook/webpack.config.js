// https://storybook.js.org/configurations/typescript-config/#setting-up-typescript-to-work-with-storybook
const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /.jsx?$/,
    include: [
      path.join(__dirname, "../src"),
      path.join(__dirname, "../../pkg-components"),
    ],
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-proposal-class-properties"],
          presets: ["@babel/preset-react"]
        }
      }
    ]
  });

  config.resolve.alias["react-native$"] = require.resolve("react-native-web");
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
