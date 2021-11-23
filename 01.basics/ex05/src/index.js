import ReactDOM from 'react-dom';
import {App} from './App.js';

// document
//     .getElementById('root')        //root라는 id를 가진 엘러먼트 자리에
//     .appendChild(App());            //만들어둔 App함수안에 있는 내용을 넣어줌

ReactDOM.render(App(), document.getElementById('root'));  //레알돔으로 바꿔치기.. 루트 아이디를 가진 엘러먼트에?