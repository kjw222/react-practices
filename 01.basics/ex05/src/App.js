import React from 'react';

const App = function(){ 
   // const app = document.createElement('h1');           //돔에 있는 엘러먼트를 만들어서
   // app.textContent = 'Hello World ex03';                // 엘러먼트에 값을 부여해서
    
   //아래는 리액트. 위 아래 똑같은 결과인데 사용하는 것이 다름.
   const app = React.createElement('h1', null, 'Hello ex05');       //이 구문은 도큐먼트가 아니라 리엑트 돔에 만드는 것..

   return app;                                         //해당 엘러먼트를 리턴해주는 함수
}
export {App}