import fs from 'fs';

let state={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동....';
// setState({
//     order: updateOrder1     //이러면 안됨 ㅠㅠ
// })
    // 두가지가 같다고 나오면 안된다. 기존 것은 유지되어야하므로 불변성에 위배된다.
    console.log(state.order, updateOrder1, state.order === updateOrder1);       //위배

    console.log("============================");

    let updateOrder2 = Object.assign({}, state.order, {
        receive: '부산시 해운대고 우동....'
    });
    
    console.log(state.order, updateOrder2, state.order === updateOrder2)        // 적합