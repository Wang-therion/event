module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://c5aabe78-88f1-4ed6-a869-78009ae2382a.mock.pstmn.io/api/v1/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}