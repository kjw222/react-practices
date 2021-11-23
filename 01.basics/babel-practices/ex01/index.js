const babel = require('@babel/core');
const result = babel.transform("const fn = () => 1;", {});      //괄호 내부는 람다함수. 코어 자체는.. 클라이언트깔면 파일 전체를 읽어서 변환.

console.log(result);