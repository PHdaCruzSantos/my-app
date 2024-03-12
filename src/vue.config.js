// vue.config.js

module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        util: require.resolve("util/"),
        http: require.resolve("stream-http"),
        url: require.resolve("url/"),
        assert: require.resolve("assert/"),
        crypto: require.resolve("crypto-browserify"),
        https: require.resolve("https-browserify"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        querystring: require.resolve("querystring-es3"),
      },
    },
  },
  // ... outras configurações
};
