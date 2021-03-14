// 079 배열 요소를 분할 / 변환하기 (from)

/*
    Array 내장 객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할한다.
    그리고 분활된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환한다.
    첫번째 인자는 배열 요소로 분할 변환될 문자열을 대입한다.
    두번째 인자는 필수값은 아니지만 callback 함수를 대입하면 분할함과 동시에 각 값을 변환 시킬수 있다.

    Array.from(배열로 변환될 값, 변활될 배열 내부 요소에 대한 callback 함수)
*/


const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);
