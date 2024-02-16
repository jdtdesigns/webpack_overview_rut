const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const is_prod = process.env.NODE_ENV === 'production';

const prodPlugins = [
  new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
    navigateFallback: '/index.html',
    runtimeCaching: [
      {
        urlPattern: new RegExp('.*\.(html|css|js|json|png)'),
        handler: 'StaleWhileRevalidate',
      },
    ],
  }),
  new WebpackPwaManifest({
    name: 'Webpack Overview',
    short_name: 'WPOV',
    description: 'Overview of Webpack!',
    background_color: '#ffffff',
    theme_color: '#fff',
    publicPath: '/',
    ios: true,
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/images/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve('src/images/icon.png'),
        size: '1024x1024',
        purpose: 'maskable'
      }
    ]
  })
];

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Webpack Overview App',
    template: path.join(__dirname, './src/index.html'),
    inject: 'body'
  })
];

if (is_prod) {
  plugins.push(...prodPlugins);
}

module.exports = {
  entry: './src/index.js',
  mode: is_prod ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins,

  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 8080,
  },
};