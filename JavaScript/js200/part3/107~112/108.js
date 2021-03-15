// 108 10 진수 아닌 진법을 다른 진법으로 변환하기 parseInt

/*
    parseInt 함수를 활용하여 숫자의 진법을 변환해 보겠다 
    parseInt 을 활용하여 특정 진법의 숫자를 10진수로 변환할 수 있다.
    이전 장에서 학습한 toString 메소드를 함꼐 활용하여 예제를 작성해봄
*/

const bin = 1000010011;
const oct = 1023
const hex = 213;

const dexByBin = parseInt(bin, 2)
const dexByOct = parseInt(oct , 8);
const dexByHex = parseInt(hex, 16);

const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin)
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);