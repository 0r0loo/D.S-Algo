// 042 const로 상수 선언하기

/*
    ES6에서 추가된 const 키워드는 let 키워드와 마찬가지로 블록 단위로 스코프를 정의할 수 있다. 하지만 let과의
    큰 차이점은 선언시 값을 할당해야 하고 이후에 재할당을 할 수 없다.
*/

const URL = 'https://js.com';
// URL = 'http'; 오류 재할당 x

if (true) {
    const URL2 = 'https://js.com';
}

// console.log(URL2); 오류 블록단위


const CONST_USER = {
    name : 'jay',
    age : 30
}
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;

console.log(CONST_USER.name, CONST_USER,age);
// CONST_USER = {
//     name : 'bbo'
// }
// 오류 재할당 x
