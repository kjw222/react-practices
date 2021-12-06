import fs from 'fs';

const state2={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts1 = state1.order.products;      //불변성을 지켜주지 못함. 
updateProducts1.push({
    "no": "s002-002",
    "name": "블루양말",
    "price": 2000,
    "amount":1
})

console.log(state1.order.products, updateProducts1, state1.order.products === updateProducts1);

console.log("================================================================================");

state2={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts2 = state2.order.products       //concat을 사용하면 원본은 보장되고 새롭게 추가된다.
    .concat({
            "no": "s002-002",
            "name": "블루양말",
            "price": 2000,
            "amount":1
    });


console.log(state2.order.products, updateProducts2, state2.order.products === updateProducts2);

state2={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts3 = ({
    "no": "s002-002",
            "name": "블루양말",
            "price": 2000,
            "amount":1
    })


console.log(state2.order.products, updateProducts3, state2.order.products === updateProducts3);