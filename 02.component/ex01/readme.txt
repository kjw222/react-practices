ex01: property

01. pros(property)
  01-1. 컴포넌트의 데이터
  01-2. 부모 컴포넌트에서 자식으로 전달된다.
        -Component Communication(컴포넌트 간의 통신), Data Flow
        -Top -> down
  01-3. 자식 컴포넌트에서는 변경 불가
  01-4. 부모가 소유한다. ()


02. FoodList src/01 : 클래스 컴포넌트
03. FoodList src/02 :  Data Flow(top->down) : 클래스 컴포넌트
04. FoodList src/03 :  Data Flow(top->down) : 함수 컴포넌트
05. Class 컴포넌트 만들어보기   //클래스 컴포넌트는 점점 없어지고 함수 컴포넌트가 유행하는 추세..
06. FoodList src/04 :  validation



설치: 
npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm i react react-dom

npm i prop-types

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가하기
"scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack --mode production"
  },

실행 방법 : npm run debug src = (src 내부의 폴더이름  01, 02, 03....햣 )