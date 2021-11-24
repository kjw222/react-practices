import React from 'react';

const App = function(){ 

   // const app = React.createElement('h1', null, 'Hello ex05');       //이 구문은 도큐먼트가 아니라 리엑트 돔에 만드는 것..
   // return app;                                         //해당 엘러먼트를 리턴해주는 함수

   //여기서 fetch로 통신을 하고 아래서 리턴해줌
   const message = "Hello World";

   return (
      <div>
         <h1>hello here is ex06 {message}</h1>
         <h1>hello here is ex06 {                                message}</h1>
         <h1>'hello here is ex06                                 '+message</h1>
      </div>
   );
}
export {App}