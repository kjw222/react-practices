npm i

npm un -D express
npm i -D webpack-dev-server //express를 없앤 이유는 webpack-dev-server를 사용하기 위함이다.


devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        part: 9999,
        inline: true,
        liveReload: true,       //라이브리로드랑 핫 둘 중 하나만 켜기. 뭔가 연관이 있는 듯..
        hot: falase,
        compress: true          //압축?? 이라셨는데 도통..ㅎ..
    }


    ====

     npm run build
     npm start    
            -1% setup initialize[webpack-cli] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema. //에러남