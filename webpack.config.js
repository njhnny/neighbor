const path = require('path');

module.exports = {
  entry: './js/scripts.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};