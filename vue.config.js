// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "https://sandbox.asaas.com/api/v3/customers",
//         changeOrigin: true,
//         pathRewrite: { "^/api": "" },
//         secure: false,
//       },
//     },
//   },
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         crypto: require.resolve("crypto-browserify"),
//         fs: false,
//         http: require.resolve("stream-http"),
//         net: false,
//         path: require.resolve("path-browserify"),
//         querystring: require.resolve("querystring-es3"),
//         stream: require.resolve("stream-browserify"),
//         zlib: require.resolve("browserify-zlib"),
//         https: require.resolve("https-browserify"),
//       },
//     },
//   },
// };
