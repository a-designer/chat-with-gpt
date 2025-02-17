const cracoWasm = require("craco-wasm");
const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 3001,
  },
  plugins: [
    cracoWasm(),
  ],
  eslint: {
    enable: false
  },
  babel: {
    plugins: [
      [
        'formatjs',
        {
          removeDefaultMessage: false,
          idInterpolationPattern: '[sha512:contenthash:base64:6]',
          ast: true
        }
      ]
    ]
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve("buffer"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
  },
}