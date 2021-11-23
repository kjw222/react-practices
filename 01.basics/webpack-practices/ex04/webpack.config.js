const { userInfo } = require('os');
const path  = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),      //여기가 엔트리. 여기서부터 디펜던시 분석을 시작함.
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }]  //어떤 파일을 어떤 노더가 쓸지 지정 파일과 노더가 많으므로 배열로 작성 $는 끝이라는 뜻이고 .는 경로를 표현하기 위해 꼭 필요한 것이므로 escape문 \를 꼭 앞에 붙여줘야함
    },
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        liveReload: true,
        hot: false,
        compress: true
    }
}