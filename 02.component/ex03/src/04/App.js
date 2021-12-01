import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);      //여기서는 null인게 당연. 렌더링 할 때 알 수 있는 것.. 이라는데 도통 모르겠음

    const onKeyPressInput = (e) => {
        if(e.key = 'Enter'){
            console.log(e.tartget.value);
        }
    };

    const onFocusInput = (e) =>{
        console.log('focused');
    }
    const onBlurInput = (e) =>{
        console.log('Blur');
    }
    const onMouseOverImage = (e) =>{
        console.log('mouseover', `x=${e.clientX}`, `y=${e.clientY}`)
    }
    const onMouseMoveImage = (e) =>{
        const offsetTop = imageRef.current.offsetTop;
        const offsetRight = imageRef.current.offsetRight;
        console.log('mousemove', `x=${offsetTop}`, `y=${offsetRight}`)
    }
    const onMouseOutImage = (e) =>{
        console.log('mouseoout', `x=${e.clientX}`, `y=${e.clientY}`)
    }
    const onMouseDownImage = (e) =>{
        console.log('mousedown', `x=${e.clientX}`, `y=${e.clientY}`)
    }
    const onMouseUpImage = (e) =>{
        console.log('mouseup', `x=${e.clientX}`, `y=${e.clientY}`)
    }
    const onClickImage = (e) =>{
        console.log('onClickImage', `x=${e.clientX}`, `y=${e.clientY}`)
    }
    const onDoubleClickImage = (e) =>{
        console.log('onDoubleClickImage', `x=${e.clientX}`, `y=${e.clientY}`)
    }

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref={ imageRef }        //변수이름 세팅
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }
                 
                 />
        </Fragment>
    );
}