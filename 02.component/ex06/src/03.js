import fs from 'fs';

let state={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동'
});

updateOrder1.payment.method = 'Mobile';

console.log(state.order, updateOrder1, state.order === updateOrder1, state.order.receive === updateOrder1.receive, state.order.payment === updateOrder1.payment);