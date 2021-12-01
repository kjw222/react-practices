const path  = require('path');

module.exports = (env) => {

    const entry = path.resolve(`src/index.js`);

    return{
    mode: 'development',
    entry: entry,      //여기가 엔트리. 여기서부터 디펜던시 분석을 시작함.
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module:{
        rules: [{
            test: /\.js$/i, //바벨 엔진을 사용해서 트랜스 파일링을 하기는하는데
            exclude: /node_modules/,
            loader:'babel-loader',
            options: {
                configFile:path.resolve('config/babel.config.json')
            }
        },{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]  //어떤 파일을 어떤 노더가 쓸지 지정 파일과 노더가 많으므로 배열로 작성 $는 끝이라는 뜻이고 .는 경로를 표현하기 위해 꼭 필요한 것이므로 escape문 \를 꼭 앞에 붙여줘야함
    },
    devtool: "eval-source-map",     //번들된 코드를 돌리면 에러코드가 번들에 돌리기 때문에 원래 소스랑 매핑을 시켜서 원래 소스를 보여주는! 디버깅을 위한 것.
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        hot: false,
        compress: true,
        historyApiFallback: true         //가상 URL? 히스토리에 저장..? 라우팅하고 리프레시할 때 나는 404에러를 멈추고 메인으로 돌리는..
    }
}
}
