// 026 자료형 변환 이해하기

/*
    자바스크립트에서는 자료형 간 변환을 지원한다. 예를 들어, 숫자형 변수값을 문자형으로 변환하거나,
    문자형 변수값을 숫자형으로 변환할 수 있다.
    자바스크립트에서는 이를 자료형 변환 또는 형변환이라고 부른다.

    자료형 변환하기 위한 방법으로는 두 가지가 있다. 개발자가 직접 명시적으로 자료형을 변환하거나,
    자바스크립트 엔진에 의해 자동으로 자료형이 변환되는 방법이 있다.
    주로 console로 값을 문자열로 출력할 떄 내지는 내장 객체의 함수나 연산자를 사용하여 자료형 변환이 가능하다.

    특히 엔진에 의해 자동으로 자료형이 변환되는 것은 자바스크립트가 동적 자료형 언어이기 때문에 적용되는 특징이다. 처음 개발자가 작성한 코드가 어떤 의도를 품고 있던
    간에 자바스크립트가 미리 정해놓은 규칙에 따라 자료형이 변환된다.

*/

console.log('5' + 1);
console.log('5' - 1);
console.log('5' * 2);
console.log('There is' + 5);
console.log('Five' * 2);


console.log('연산자를 활용한 자료형 번환');
var str = 5 +'1';
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num)
console.log(typeof num);

console.log('함수를 활용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);

