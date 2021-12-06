import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);       //모달창 input에 focus 주려고 사용!
    // const [isOpen, setIsOpen] = useState(false);
    // const[password, setPassword]=useState('');

    useEffect(() => {
        setTimeout(()=>{setTimeout(()=>{refForm.current && refForm.current.password.focus();})})
        
    }, [modalData]);


    const notifyDeleteMessage = (no) => {
        console.log('delete!!!: '+no);
        setIsOpen(true);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    try{
       // console.log("삭제!!! : "+messageNo, e.target.password.value, password);
       if(e.target.password.value===''){
           return;
       }
    //    const response = await fetch(`/api/${modalData.messageNo}`, {
    //         method: 'delete',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Accept' : 'application/json'
    //         },
    //         body: JSON.stringify({password: modalData.password})
    //    })
    //    if(!response.ok){
    //        throw `${response.status} ${response.statusText}`
    //    }
    //    const jsonResult = response.json;
    
    
    // 비밀번호가 틀린 경우
    // jsonResult.data = null
  //  setModalData(Object.assign({}, modalData, {label: "비밀번호가 틀렸습니다.", password: ''}))
    
    //잘 삭제가 된 경우
    //jsonResult.data = 10
    setModalData({isOpen: false, password:''})
    notifyMessage.delete(modalData.messageNo);
    
    }catch(err){
        console.error(err);
    }
        console.log("모달 데이타 : "+modalData);
    }

   // const [messageNo, setMessageNo] = useState(0);
    const notifyDeleteMessage = (no) => {
        // setMessageNo(no);
        // setIsOpen(true);
        // setPassword('');

        setModalData({
            title: '작성시 입력했던 비밀번호를 입력하세요',
            isOpen: true, 
            messageNo: no,
            password: ''
        })
    }


    //--------------------------------
    const [modalData, setModalData] = useState({isOpen:false});

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} 
                                                  notifyDeleteMessage={notifyDeleteMessage}/>)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={() => setModalData(!{isOpen})}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        ref={refForm} 
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit()}>
                        <label>{modalData.title || ''} 지금 여기는 비제어</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e)=> setPassword(Object.assign({}, modalData, {password: e.target.value}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => {
                       // refForm.current.dispatchEvent(new Event("Submit", {cancelable: true, bubbles: true}));  이거는 비제어 방식
                       console.log('삭제 : ', password);
                        
                    }}>확인 //dom api 트리거 이벤트? 1. 이벤트 구조 알기</button>
                    <button 
                        //onClick={() => setIsOpen(false)}
                        onClick={()=>{Object.assign(setModalData({}, modalData, {isOpen: false}))}}
                        >취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}