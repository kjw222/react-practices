npm init -y
npm i -D express    < 개발 의존성. 클라이언트를 만드는 것이고 서버를 만드는 것은 아니므로 개발을 위한 것


mkdir src  //웹팩 의존성 분석 후 public에 가져다 놓는다. src=>public
mkdir public



======
번들링 결과물을 public으로 가져다 놓는다.

ex03에서 index.html 만 public에 가져다 놓고
app.js와 index.js는 소스이므로 src 폴터에 가져다 놓는다.


=======

ex04: 애플리케이션 번들링(bundling)

1. webpackm 은 작게 분리된 많은 모듈(자바스크립트 뿐만이 아니라 js css images font등등)들의 의존성을 분석해서 하나의 js파일로 묶어주는 도구.
2. 하나의 js파일을 번들(bundle 경제용어라구 함)이라고하고, 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다. -> 빌드작업도 해준다.
4. 빌드 작업
    1) linting(ESLint, 문법체크 작업) 안 맞으면 하다가 중지된다고 한다. 이것도 webpack이 한다.
    2) document 작업(JDoc)작업
    3) test(Mocha Jest) 작업
    4) 난독화/압축 ( 개행이나 탭을 모두 없앤다?)(uglyfy) 작업
    5) 번들링
5. 자바 스크립트 뿐만 아니라 다양한 에셋(assets- css images font)도 모듈로 취급을 한다. 