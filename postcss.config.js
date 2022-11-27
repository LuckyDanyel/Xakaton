const { plugins } = require("./webpack.config")

module.exports = {
      plugins: [require("postcss-preset-env")],
};