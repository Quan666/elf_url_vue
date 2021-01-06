module.exports = {
  // ...
  devServer: {
    proxy: {
      // 代理所有的以 /api 开头的请求到 https://ii1.fun
      '/api': {
        target: 'https://ii1.fun',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  // publicPath: './' // 打包时放开注释
}
