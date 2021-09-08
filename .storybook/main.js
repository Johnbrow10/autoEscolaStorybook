module.exports = {
  stories: [
    "../src/stories/*.stories.(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/*.stories.(js|mdx)",
    "../src/styles/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-knobs",
  ],
};
