// 072 문자열로 변환하기 (toString)

/*
    자바스크립트의 모든 객체는 Object를 상속 받기 때문에 다른 모든 객체는 prototype을 통해 Object 내장 메소드 toString()에 접근하고
    재정의(Override) 한다.
    이는 Object 객체의 toString()을 상속받는 것과 다르다.

*/

const num = 5;
const bool = true;
const str = '문자열 값';
const arr = [1, 2, 3];
const obj ={
    a: 15
};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

num.__proto__.toString = () => {
    return 'toString 덮어 쓰기';
}

console.log(num.toString())