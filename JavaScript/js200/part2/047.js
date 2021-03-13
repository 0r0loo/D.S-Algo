// 047 화살표 함수 이해하기
/*
    ES6에서는 기존 함수를 간결하게 표현할 수 있고 기능이 개선된 화살표 함수가 추가되어싿.
    화살표 함수는 function 키워드를 사용하지 않고 화살표 모양의 => 연산자를 이용하여 정의한다.
    화살표 함수를 정의할 떄는 몇 가지 규칙이 있다.

    - 매개변수가 하나일 경우에는 인자를 정의할 때 괄호를 생략할 수 있다.
    - 매개변수가 없거나 둘 이상일 경우 괄호를 작성해야 한다.
    - 화살표 함수 코드 블록을 지정하지 않고 한 문장으로 작성 시 return 문을 사용하지 않아도 화살표 오른쪽 표현식의 계산 결과값이 반환된다.
    - 화살표 함수 코드 블록을 지정했을 경우 반환하고자 하는 값에 return 문을 작성해야 한다. return 문이 없을시 undefined가 반환된다.
*/

const double = x => x + x;
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1, 2));

const printArguments = () => {
    console.log(arguments);
}
printArguments(1,2, 3)

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i <args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum(1, 2, 3));

setTimeout(() => {
    console.log('화살표 함수!')
}, 5000);