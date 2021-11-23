"use strict";

//es6을 바꾸는 것. ex06을 지원하지 않는 브라우저를 위해서!
//블록 스코프 변수 es6
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dool@gmail.com'
}]; // 객체분해(es06)

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
} //for ..of(es6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
