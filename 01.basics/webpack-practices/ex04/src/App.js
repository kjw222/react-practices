import './assets/css/App.css';

const App = function(){ 
    const app = document.createElement('h1');           //돔에 있는 엘러먼트를 만들어서
    app.className = "Header"        //스타일 로더로 할 수 있는 것..
    app.textContent = 'Hello World webpack-practices ex05';                // 엘러먼트에 값을 부여해서
    return app;                                         //해당 엘러먼트를 리턴해주는 함수
}
export {App}