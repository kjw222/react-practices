//es6을 바꾸는 것. ex06을 지원하지 않는 브라우저를 위해서!
//블록 스코프 변수 es6

const users = [{
    no: 1,
    name: '마이콜',
    email: 'michol@gmail.com'

},{
    no:2,
    name: '둘리',
    email: 'dool@gmail.com'

}];

// 객체분해(es06)
function print({no, name, email}){
    console.log(`${no}, ${name}, ${email}`);
}

//for ..of(es6)
for (let user of users){
    print(user);
}