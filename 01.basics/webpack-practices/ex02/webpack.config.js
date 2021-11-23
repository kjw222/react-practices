const path  = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),      //여기가 엔트리. 여기서부터 디펜던시 분석을 시작함.
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'

    }
}