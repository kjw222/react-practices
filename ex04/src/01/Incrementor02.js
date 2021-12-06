import React, {useState} from 'react';

export default function ({ begin, step }) {     //함수형 컴포넌트는 값을 괄호 안으로 받음.
    const [stateVal, setVal] = useState(begin);     //여기서 괄호 안의 begin은 초기값이라고 생각하면된다.
   // const [stateStep] = useState(step);             //마찬가지로 step또한 초기값이다. useState는 배열을 반환해준다. 

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            
            {' '}
            <span>{ stateVal }</span>
            <button>
            <strong>-</strong>
            </button>
        </div>
    );
}