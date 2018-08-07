// This is the prod Webpack config. All settings here should prefer smaller,
// optimized bundles at the expense of a longer build time.
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const themesDir = path.resolve(__dirname, '../src/themes/');
// Find .scss files in themes directory and create themes from their basenames
const themes = fs.readdirSync(themesDir).map(file => (
  file.slice(-5) === '.scss' ? file.slice(0, -5) : ''
)).filter(name => name);

module.exports = themes.map(theme => (
  /*
    Since we are exporting multiple configurations, we need to be aware of a few things that are
    going to happen:
      - Webpack will export all files for each configuration to the same directory, if they have
        the same name, they will be overwritten. In this case, we want this as the only file we
        want multiples of is the css files. In a perfect world, we would be able to only compile
        all non-css assets once, but I'm not that good at webpack yet.
      - Builds are concurrent, so anything that's going to be overwritten will be overwritten by
        whichever build hits that stage last. For example, the index.html file will be written for
        each, so we have to customize it to always use the base-app.min.css file. More explanation
        in the plugin.
  */
  Merge.smart(commonConfig, {
    mode: 'production',
    entry: {
      app: [path.resolve(__dirname, `../src/themes/${theme}.scss`)],
    },
    devtool: 'source-map',
    output: {
      filename: '[name].min.js',
    },
    module: {
      // Specify file-by-file rules to Webpack. Some file-types need a particular kind of loader.
      rules: [
        // The babel-loader transforms newer ES2015+ syntax to older ES5 for older browsers.
        // Babel is configured with the .babelrc file at the root of the project.
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src'),
          ],
          loader: 'babel-loader',
          options: {
            compact: true,
          },
        },
        // Webpack, by default, includes all CSS in the javascript bundles. Unfortunately, that
        // means:
        // a) The CSS won't be cached by browsers separately (a javascript change will force CSS
        // re-download).  b) Since CSS is applied asyncronously, it causes an ugly
        // flash-of-unstyled-content.
        //
        // To avoid these problems, we extract the CSS from the bundles into separate CSS files that
        // can be included as <link> tags in the HTML <head> manually.
        //
        // We will not do this in development because it prevents hot-reloading from working and it
        // increases build time.
        {
          test: /(.scss|.css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                sourceMap: true,
                minimize: true,
              },
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                sourceMap: true,
                data: `@import "../src/themes/${theme}.scss";`,
                includePaths: [
                  path.join(__dirname, '../node_modules'),
                  path.join(__dirname, '../src'),
                ],
              },
            },
          ],
        },

        // Webpack, by default, uses the url-loader for images and fonts that are required/included
        // by files it processes, which just base64 encodes them and inlines them in the javascript
        // bundles. This makes the javascript bundles ginormous and defeats caching so we will use
        // the file-loader instead to copy the files directly to the output directory.
        {
          test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
      ],
    },
    // New in Webpack 4. Replaces CommonChunksPlugin. Extract common modules among all chunks to one
    // common chunk and extract the Webpack runtime to a single runtime chunk.
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
        chunks: 'all',
      },
    },
    // Specify additional processing or side-effects done on the Webpack output bundles as a whole.
    plugins: [
      // Writes the extracted CSS from each entry to a file in the output directory.
      new MiniCssExtractPlugin({
        filename: `${theme}-[name].min.css`,
      }),
      // Generates an HTML file in the output directory.
      new HtmlWebpackPlugin({
        inject: true, // Appends script tags linking to the webpack bundles at the end of the body
        template: path.resolve(__dirname, '../public/index.html'),
        hash: true,
        /*
          We are generating a seperate css file for each theme, but we still want the index.html to
          always point to the base-theme CSS file. Frontend will be responsible for switching to
          the correct CSS when it needs to.
        */
        templateParameters: (compilation, assets, options) => {
          const customAssets = assets;
          customAssets.css[0] = 'base-app.min.css';
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              files: assets,
              options,
            },
          };
        },
      }),
    ],
  })
));
