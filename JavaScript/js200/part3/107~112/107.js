// 107 진수 변환하기 (toString)
/*
    일반적으로 toString 메소드는 지정된 객체의 문자열을 출력한다.
    이번 장에서는 toString 메소드의 다른 활용법을 알아보겠다.
    Number 객체의 toString 메소드는 값을 특정 진법으로 표현하여 문자형으로 반환한다.

*/

const dec = 531;

const binByDex = dec.toString(2);
const octBydex = dec.toString(8);
const hexByDex = dec.toString(16);

console.log(binByDex);
console.log(octBydex);
console.log(hexByDex);