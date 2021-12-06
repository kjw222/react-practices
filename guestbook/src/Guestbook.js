import React, {useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        console.log("최초 메세지 리스트 가져오기");
        fetchMessageList();
    }, []);     // [] 이거 안 붙이면 랜더링할 떄마다 호출된다.


    const notifyMessage={
        add: function(message){

        },
        delete: function(no){
          setMessages(messages.filter(messages=>messages.no !== no));
        }
    }

    const fetchMessageList = () => {

    }

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages}/>
                </div>
            </div>
        </div>
    );
}