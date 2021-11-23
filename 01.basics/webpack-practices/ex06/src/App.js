import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

const App = function(){ 
    const app = document.createElement('div');           //돔에 있는 엘러먼트를 만들어서
    app.className = "App"        //스타일 로더로 할 수 있는 것..
    app.innerHTML =             //이거는 돔을 쓴 것
        `<header class='App-header'>
            <img src='${logo}' class='App-logo' alt='logo'/>
            <p>Hello webpack ex06</p>
        </header>`;                // 엘러먼트에 값을 부여해서
    return app;                                         //해당 엘러먼트를 리턴해주는 함수
}
export {App}