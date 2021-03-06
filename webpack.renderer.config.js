const rules = require('./webpack.rules');
const { VueLoaderPlugin } = require('vue-loader')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(png|jpe?g|ico)$/i,
  use: [{ loader: 'file-loader' }],
});
module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
