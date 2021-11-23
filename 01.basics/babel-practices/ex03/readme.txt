Babel Plugin

라이브러리 설치
$ npm i -D @babel/core @babel/cli

플러그인 적용
1. 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping)
$npm i -D @babel/plugin-transform-block-scoping
$npx babel src/ex.js -o dist/ex.js  -- plugins @babel/plugin-transform-block-scoping        //변환?

2. 객체 분해 파라미터 플러그인(@babel/plugin-transform-parameters)

3. 템플릿 문자열 변환 플러그인(@babel/plugin-transform-template-literals)

4. for,..of 변환 플러그인(@babel/plugin-transform-for-of)