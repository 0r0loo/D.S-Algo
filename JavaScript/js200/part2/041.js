// 041 let으로 변수 선언하기

/*
    자바스크립트의 새로운 표준인 ECAMScript 2015 (ES6) 가 나오기 전까지 변수는 var 키워드로 만 정의할 수 있었다.
    하지만 ES6 에서 let 키워드가 나오면서 변수 선언 시 변수의 유효 범위를 블록 범위로 지정할 수 있게 되었다

*/

if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue);
// console.log(blockScopeValue); 오류


let value = '바깥'

if (true) {
    // console.log(value); 오류 -> 호이스팅
    let value = '안쪽'
}

