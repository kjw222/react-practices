Env Preset 
1. 관련 플러그인들을 모아놓고 한번에 적용하기 위해서 미리 플러그인들을 모아 놓은 것
2. ECMAScript 년도별로 모아놓은 것들, stage(0,1,2,3) 레벨별로 모아놓은 것, 3rd party(typescript, react)등 종류가 다양하다.
3. Env Preset은 stage 3 레벨 이상되는 문법들의 플러그인
4. Env Preset 뿐만 아니라 다양한 플러그인들은 babel설정을 통해서 적용할 수 있다.(babel.config.json)


Env Preset  설치
$ npm i -D @babel/core @babel/cli @babel/preset-env

Env Preset의 플러그인 항목 확인하기
$ npm list --depth=1

----

Env Preset 설정하기(브라우저 타겟 설정)
브라우저별 es6 호환성 테이블(kangax.github.io/compat-table/ex6)

변환하기 
$ npx babel src/ex.js -o dist/ex.js

========

플러그인 적용
1. 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping)
$npm i -D @babel/plugin-transform-block-scoping
$npx babel src/ex.js -o dist/ex.js  --plugins @babel/plugin-transform-block-scoping        //변환?

2. 객체 분해 파라미터 플러그인(@babel/plugin-transform-parameters)
3. 템플릿 문자열 변환 플러그인(@babel/plugin-transform-template-literals)
4. for,..of 변환 플러그인(@babel/plugin-transform-for-of)


5. 모두 적용해보기

npm i -D @babel/plugin-transform-block-scoping @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
npx babel src/ @babel/plugin-transform-block-scoping --plugins  @babel/plugin-transform-parameters  --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of --plugins 