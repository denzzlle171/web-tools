const path = require('path');

module.exports = {
  entry: {
    profile: './src/profile/index.js',
    dashboard: './src/dashboard/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  watch: true,
};

// "build:scripts": "webpack ./src/index.js --mode=production",
//     "watch:scripts": "webpack ./src/index.js --mode=development --devtool eval-source-maps -w"
