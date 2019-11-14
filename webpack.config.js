const merge = require("webpack-merge");

const commonConfig = require("./config/webpack.common.js");

module.exports = ({ env }) => {
  const envConfig = require(`./config/webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
