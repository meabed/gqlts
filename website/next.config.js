const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});
module.exports = withNextra({ dev: process.env.NODE_ENV !== "production" });
