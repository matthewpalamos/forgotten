var path = require('path');

module.exports = {
  entry: './client/src/app',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/dist')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  }
};
