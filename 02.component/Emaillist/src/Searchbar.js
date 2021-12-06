import React, {useState} from "react";
import styles from './assets/scss/Searchbar.scss';



const Searchbar=({keyword, callback})=>{
    //8~10번 줄까지와 onChange 안에 있는 구문이 같다.
    // const [keyword, setKeyword] =useState('');
    // //onchange에서 부모를 불러야함?
    // const onInputChanged =(e)=>{setKeyword(e.target.value); callback(e.target.value);}  //setKeyowrd는 state값 변경해주는 것, callback은 부모로 부터 받아온 함수!
    return(
        <div className={styles.Searchbar}>
                찾기: <input type='text' placeholder='search' value={keyword} onChange={(e)=>callback(e.target.value)}/>
        </div>
    )
}

export default Searchbar;