const path = require('path');
console.log(path.join( __dirname + "/srv"));

module.exports = {

  // node: {
  //   fs: "empty"
  // },
  
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.join( __dirname + "/srv"),
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      // JS / JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // CSS Rule
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: {
            namedExport: true,
            exportLocalsConvention: function (name) {
              return name.replace(/-/g, "_");
            },
          },
        },
      }

    ]
  },
  
  devServer: {
    port: 999,
    static: {
      directory: path.join(__dirname, 'srv'),
    },
    compress: true,
  }
};
