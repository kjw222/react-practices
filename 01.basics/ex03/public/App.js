const App = function(){ 
    const app = document.createElement('h1');           //돔에 있는 엘러먼트를 만들어서
    app.textContent = 'Hello World ex03';                // 엘러먼트에 값을 부여해서
    return app;                                         //해당 엘러먼트를 리턴해주는 함수
}
export {App}