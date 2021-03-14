// 065 문자열을 숫자형 정수로 변환하기 (pareInt)
/*
    parseInt()는 어떤 내장함수 객체에도 속하지 않은, 전역에서 사용할 수 있는 내장 함수이다.
    parseInt()를 활용하여 문자열 자료형을 숫자로 변환할 수 있다. 
    parseInt는 두 개의 인자를 받는다.
    첫 번째 인자에는 숫자로 변환하고 싶은 값을 넣고, 두 번째 인자는 특정 진수를 나타내는 정수값을 넣는다.
    
    parseInt(값, 진수)
*/

console.log(parseInt('15'))
console.log(parseInt('15', 10))
console.log(parseInt('15', 2))
console.log(parseInt(5.15))
console.log(parseInt('5.15'))