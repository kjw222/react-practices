const path  = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),      //여기가 엔트리. 여기서부터 디펜던시 분석을 시작함.
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        host: '0.0.0.0',
        part: 9999,
        liveReload: true,
        hot: false,
        compress: true
    }
}