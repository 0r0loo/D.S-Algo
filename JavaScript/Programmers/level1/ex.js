const list = [1,2,3,4,5,6,7,8,9,10];
const result = [];

for(let i = 0; i < list.length; i++){
    if(list[i] % 2 === 0){
        result.push(list[i]);
        break;
    }
}

console.log(result)