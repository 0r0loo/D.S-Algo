// 023 논리 연산자

/*
    논리 연산자는 어떠한 명제에 대한 논리적인 판단을 내리는 연산자이다.
    참 또는 거짓의 값을 받아 논리적 연산의 결과로 true, false를 반환한다.
    연산자 종류로는 AND 연산자 &&, OR연산자 ||, NOT 연산자 ! 가 있다.
    결과값은 항상 불리언 자료형으로 반환한다.
*/

console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 == 5);
console.log(5 == 5 && '다른 문장 1' == '다른 문장 2');

console.log(true || false);
console.log(true || false);
console.log('문장' == '문장' || 5 == 10);

console.log(!true);
console.log(!false);
console.log(!5);
console.log(!'문장');
console.log(!!5);
console.log(!!'문장');


/*
    불리언 자료형이 아니더라도, 값을 논리 연산자로 처리하면 참인지 거짓인지 구분할 수 있다.
    값이 있는 경우 true 반환

    반대로 값의 정보가 비어 있는 경우 유효하지 않다고 판단되어 거짓을 의미하는 값인 false를 반환한다
    일반적으로 무조건 false 값을 의미하는 7개의 값이 있는데 다음과 같다
    false, 0, -0, '', NaN, null, undefiend, 
*/

