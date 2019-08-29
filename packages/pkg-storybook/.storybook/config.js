import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

function loadStories() {
  const req = require.context("../src", true, /\.stories\.jsx?$/);
  console.log(req.keys())
  req.keys().forEach(story => req(story));
}

addParameters({
  viewport: { defaultViewport: "iphone8p" }
});

addDecorator(withKnobs);

configure(loadStories, module);
