const baseconfig = require('./webpack.config.base')
module.exports = {
    ...baseconfig,
    devtool: 'inline-source-map'
}