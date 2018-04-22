const path = require('path');

module.exports = {
  mode: "development",
  entry: './react_src/index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    }]
  }
  
}