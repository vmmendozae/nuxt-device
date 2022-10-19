const path = require('path')

module.exports = function (moduleOptions) {
    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'device.plugin.js'
    })
}

module.exports.meta = require('../package.json')