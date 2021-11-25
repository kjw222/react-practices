ex01: property

01. pros(property)

<Food

02. FoodList src/01 : 클래스 컴포넌트



03. FoodList src/02 :  Data Flow(top->down) : 클래스 컴포넌트
04. FoodList src/03 :  Data Flow(top->down) : 함수 컴포넌트
05. Class 컴포넌트 만들어보기   //클래스 컴포넌트는 점점 없어지고 함수 컴포넌트가 유행하는 추세..
06. FoodList src/04 :  validation



설치: 
npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm i react react-dom

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