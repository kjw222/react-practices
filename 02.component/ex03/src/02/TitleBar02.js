// import React from 'react';

// export default function TitelBar02() {      //함수 컴포넌트


//     return (
//         <h1 >ex03 - functional Event Handler(functional Component)</h1>  //handler가 함수라는 이야기! 함수형은 요즘에 잘 사용하지 않음. react에게 위임을 시키는 구조.
//     )
// }


import React from 'react';

export default function TitelBar02() {
    const onClickHandler = () => {
        console.log('TitleBar02 clicked');
    }

    return (
        <h1
            onClick = { onClickHandler }
            style={{cursor: 'pointer'}}>
            ex03 - Functional Event Handler(Functional Component)
        </h1>
    );
}