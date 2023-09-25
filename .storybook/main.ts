import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => `
  ${head}
  ${
    '<link rel="preconnect" href="https://fonts.gstatic.com">'+
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">'+
    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'
  }
`,
};
export default config;
