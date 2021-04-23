const path = require('path')

module.exports = {
    /* config options here */
    compress: false,
    generateEtags: false,
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        // Important: return the modified config
        return config
    },
}