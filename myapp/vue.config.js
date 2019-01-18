module.exports = {
    chainWebpack: config => {
        config.externals({
            'liff': 'liff'
        })
    }
}