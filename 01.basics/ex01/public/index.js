const App = function(){ 
    const app = document.createElement('h1');           //돔에 있는 엘러먼트를 만들어서
    app.textContent = 'Hello World';                // 엘러먼트에 값을 부여해서
    return app;                                         //해당 엘러먼트를 리턴해주는 함수   이게 루트 컴퍼넌트가 됨.
}

document
    .getElementById('root')        //root라는 id를 가진 엘러먼트 자리에
    .appendChild(App());            //만들어둔 App함수안에 있는 내용을 넣어줌