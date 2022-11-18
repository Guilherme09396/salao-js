const metadata = require("./src/config/metadata");
const plugins = require("./src/config/plugins");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: metadata,
  plugins: plugins
};